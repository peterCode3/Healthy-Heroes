//ListPost.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from './Container';
import Banner from './Banner';

const TshirtParticpants = () => {

    const [posts, setPosts] = useState([null]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://example.com/api/tshirtparticpants');
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
            <Banner 
                mainclass= 'fanbg'
                Title = 'Fan Page'
                Paragraph = 'Join us for an incredible fitness journey!'
                imagepath = '/healthlogo.png'
                buttonhref = '/registration'
                ButtonText = 'SIGN UP'

            />
            <div className="main-posts main-posts-participent">
                <Container>
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

                </Container>
            </div>
        </div>
    );
};

export default TshirtParticpants;
