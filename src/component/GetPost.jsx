// GetPost.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Notification from './atoms/Notification';
import Container from './Container';

const GetPost = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedAboutMe, setEditedAboutMe] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedSize, setEditedSize] = useState('');
  const [editedRegType, setEditedRegistrationType] = useState('');
  const [editedScore, setEditedScore] = useState('');
  const [showNotificationSuccess, setShowSuccessNotification] = useState(false);
  const [showErorNotifications, setErorNotifications] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://example.com/api/allparticipant');
        setPosts(response.data);
      } catch (error) {
        // Handle error (e.g., show an error message)
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  const handleDeletePost = async (postId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (confirmDelete) {
      try {
        await axios.delete(`https://example.com/api/deleteparticipant/${postId}`);
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
      } catch (error) {
        // Handle error (e.g., show an error message)
        console.error(error);
      }
    };
  };
  const closeeditform = async () => {
    try {
      setEditingPost(null);
    } catch (error) {
      console.error(error, 'Form Are Not Closed')
    }
  }

  const handleEditPost = (postId) => {
    const postToEdit = posts.find((post) => post.id === postId);
    setEditingPost(postToEdit);
    setEditedTitle(postToEdit.name);
    setEditedAboutMe(postToEdit.aboutme)
    setEditedDescription(postToEdit.organization);
    setEditedSize(postToEdit.shirtSize);
    setEditedRegistrationType(postToEdit.registrationType)
    setEditedScore(postToEdit.score)
  };

  const handleUpdatePost = async () => {
    try {
      setLoading(true);

      await axios.put(`https://example.com/api/editparticipant/${editingPost.id}`, {
        name: editedTitle,
        aboutme: editedAboutMe,
        organization: editedDescription,
        shirtSize: editedSize,
        registrationType: editedRegType,
        score: editedScore,
      });
      const updatedPosts = posts.map((post) =>
        post.id === editingPost.id ? { ...post, name: editedTitle, aboutme: editedAboutMe, organization: editedDescription, shirtSize: editedSize, registrationType: editedRegType, score: editedScore, } : post
      );
      setPosts(updatedPosts);
      setShowSuccessNotification(true);

      const timer = setTimeout(() => {
        setShowSuccessNotification(false);
        setEditingPost(null);
      }, 2000);
      setShowSuccessNotification(timer);
    } catch (error) {
      setErorNotifications(true);

      const timer = setTimeout(() => {
        setErorNotifications(false);
      }, 2000);
      setErorNotifications(timer);
      console.error(error);
    } finally {
      setLoading(false); // Reset loading state regardless of the outcome
    }
  };
  const editedshirtSizes = ['Small', 'Medium', 'Large', 'XL', 'XXL']; // Available shirt sizes


  return (
    <div className="main-posts">
      <Container>
        <div className="participantdata">
          <table className="table-data">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>About Me</th>
                <th>Email</th>
                <th>Organization</th>
                <th>Shirt Size</th>
                <th>Registration Type</th>
                <th>Score</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="table-row">
                  <td className="table-column">
                    <img src={post.profilePicturePath} alt={post.name} className="table-image" />
                  </td>
                  <td className="table-column">
                    <div className="table-content">
                      <h2>{post.name}</h2>
                    </div>
                  </td>
                  <td className="table-column">
                    <div className="table-content">
                      <p>{post.aboutme}</p>
                    </div>
                  </td>
                  <td className="table-column">
                    <div className="table-content">
                      <p>{post.email}</p>
                    </div>
                  </td>
                  <td className="table-column">
                    <div className="table-content">
                      <p>{post.organization}</p>
                    </div>
                  </td>
                  <td className="table-column">
                    <div className="table-content">
                      <p>{post.shirtSize}</p>
                    </div>
                  </td>
                  <td className="table-column">
                    <div className="table-content">
                      <p>{post.registrationType}</p>
                    </div>
                  </td>
                  <td className="table-column">
                    <div className="table-content">
                      <p>{post.score}</p>
                    </div>
                  </td>
                  <td className="table-column">
                    <div className="table-buttons">
                      <button className="edit-post" onClick={() => handleEditPost(post.id)}>
                        Edit
                      </button>
                      <button className="delete-post" onClick={() => handleDeletePost(post.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
        {editingPost && (
          <div className='form-reg-he'>
            <div className="edit-main">
              <div className='close-frm-icon'>
                <FontAwesomeIcon onClick={closeeditform} icon={faTimes} />
              </div>
              <h2>Edit Post</h2>
              <label>
                <span>Title</span>
                <input
                  type="text"
                  required
                  placeholder="Title"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
              </label>

              <label>
                <span>Organization</span>
                <input
                  placeholder="Organization"
                  required
                  type='text'
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                />
              </label>
              <label>
                <span>Shirt Size</span>
                <select value={editedSize} required onChange={(e) => setEditedSize(e.target.value)}>
                  <option value="">Change Shirt Size</option>
                  {editedshirtSizes.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>Registration Type</span>
                <select value={editedRegType} required onChange={(e) => setEditedRegistrationType(e.target.value)}>
                  <option value="">Change Registration Type</option>
                  <option value="tshirt">Buy T-shirt ($25)</option>
                  <option value="challenge">Participate to Win Challenge ($50)</option>
                </select>
              </label>
              <label>
                <span>
                  score
                </span>
                <input
                  placeholder="Score"
                  type='text'
                  value={editedScore}
                  onChange={(e) => setEditedScore(e.target.value)}
                />
              </label>
              <label>
                <span>About Me</span>
                <textarea
                  type="text"
                  required
                  placeholder="Title"
                  value={editedAboutMe}
                  onChange={(e) => setEditedAboutMe(e.target.value)}
                />
              </label>
              <button onClick={handleUpdatePost} disabled={loading}>
                {loading ? ' Updating...' : ' Update Post'}
              </button>
              {showNotificationSuccess && (
                <Notification
                  className='success-notification'
                  message='Update Successful!'
                />
              )}
              {showErorNotifications && (
                <Notification
                  className='decline-notification'
                  message=' Please try again '
                />
              )}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default GetPost;
