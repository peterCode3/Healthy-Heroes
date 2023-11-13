//ListPost.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Logo from './atoms/Logo';


const ListPost = () => {
    const [posts, setPosts] = useState([]);
    const [editingPost, setEditingPost] = useState(null);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedDescription, setEditedDescription] = useState('');
    const [editedImage, setEditedImage] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://view.swank12.com/api/challengeparticpants');
                setPosts(response.data);
            } catch (error) {
                // Handle error (e.g., show an error message)
                console.error(error);
            }
        };

        fetchPosts();
    }, []);



    const handleUpdatePost = async () => {
        try {
            await axios.put(`https://view.swank12.com/api/editparticipant/${editingPost.id}`, {
                name: editedTitle,
                organization: editedDescription,
                profilePicturePath: editedImage,
            });
            const updatedPosts = posts.map((post) =>
                post.id === editingPost.id ? { ...post, title: editedTitle, description: editedDescription, image_url: editedImage } : post
            );
            setPosts(updatedPosts);
            setEditingPost(null);
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <div>
            <div className="herosection">
                <div className='overlay-inner-sec'></div>
                <div className='container'>
                    <div className='sect-fan-bnr'>
                        <div className="heroContent">
                            <h1>SNIP HEROES <br />Participants</h1>
                            <p>Join us for an incredible fitness journey!</p>
                            <Link href='/registration'><button>Sign Up</button></Link>
                        </div>
                        <div className='logo-snip'>
                            <Logo 
                                logo = '/healthlogo.png'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-posts main-posts-participent">
                <div className='container'>
                    {/* <div className='title-part-list'>
                        <h1>Our Participant</h1>
                    </div> */}
                    {/* <h1 className="posts-title">Participants</h1> */}
                    <div className="column-data">
                        {posts.map((post) => (
                         
                            <div key={post.id} className="posts-columns">
                                <div className='column-inr-content'>
                                    <h2>{post.name}</h2>
                                    <p>{post.organization}</p>
                                    <p>{'Score' + ' : ' + (post.score!==null?post.score:"")}</p>
                                    <p>{post.aboutme}</p>
                                </div>
                                <div className='profile-picture'>
                                    <img src={post.profilePicturePath} alt={post.name} className="mb-4 rounded-lg w-full h-40 object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>
                    {editingPost && (
                        <div className="edit-main">
                            <h2>Edit Post</h2>
                            <input
                                type="text"
                                placeholder="Title"
                                value={editedTitle}
                                onChange={(e) => setEditedTitle(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Changed Image"
                                value={editedImage}
                                onChange={(e) => setEditedImage(e.target.value)}
                            />
                            <textarea
                                placeholder="Description"
                                value={editedDescription}
                                onChange={(e) => setEditedDescription(e.target.value)}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListPost;
