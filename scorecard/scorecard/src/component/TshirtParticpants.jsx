//ListPost.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Logo from './atoms/Logo';

const TshirtParticpants = () => {

    const [posts, setPosts] = useState([null]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://view.swank12.com/api/tshirtparticpants');
                setPosts(response.data);
            } catch (error) {
                // Handle error (e.g., show an error message)
                console.error(error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <div className="fanbg">
                <div className='overlay-inner-sec'></div>
                <div className='container'>
                    <div className='sect-fan-bnr'>
                        <div className="heroContent">
                            <h1>Fan Page</h1>
                            <p>Join us for an incredible fitness journey!</p>
                            <Link href='/registration'><button>Sign Up</button></Link>
                        </div>
                        <div className='logo-snip'>
                            <Logo
                                logo='/healthlogo.png'
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
                        {posts && posts.length > 0 ? (
                            posts.map((post) => (
                                post && ( // Check if post is not null or undefined
                                    <div key={post.id} className="posts-columns">
                                        <div className='column-inr-content'>
                                            <h2>{post.name}</h2>
                                            <p>{post.organization}</p>
                                            <p>{post.aboutme}</p>
                                            {/* <p>{'Score' + ' : ' + post.score}</p> */}
                                        </div>
                                        <div className='profile-picture'>
                                            <img src={post.profilePicturePath} alt={post.name} className="mb-4 rounded-lg w-full h-40 object-cover" />
                                        </div>
                                    </div>
                                )
                            ))
                        ) : (
                            <p>No posts available</p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TshirtParticpants;
