//ListPost.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from './Container';
import Banner from './Banner';


const ListPost = () => {
    const [posts, setPosts] = useState([]);
    const [editingPost, setEditingPost] = useState(null);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedDescription, setEditedDescription] = useState('');
    const [editedImage, setEditedImage] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://example.com/api/challengeparticpants');
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
            <Banner 
                mainclass= 'herosection'
                Title = 'SNIP HEROES <br> Participants'
                Paragraph = 'Join us for an incredible fitness journey!'
                imagepath = '/healthlogo.png'
                buttonhref = '/registration'
                ButtonText = 'SIGN UP'

            />
            <div className="main-posts main-posts-participent">
                <Container>
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
                </Container>
            </div>
        </div>
    );
};

export default ListPost;
