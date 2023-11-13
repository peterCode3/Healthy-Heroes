
import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Notification from './atoms/Notification';


const AddNewPost = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [name, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [aboutme, setAboutMe] = useState('');
  const [profilePicturePath, setImageUrl] = useState('');
  const [organization, setDescription] = useState('');
  const [shirtSize, setShirtSize] = useState('');
  const [registrationType, setRegistrationType] = useState('');
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showErorNotification, setErorNotification] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageUrl(file);
  };

  const handleAddPost = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('image', profilePicturePath);
      formData.append('name', name);
      formData.append('aboutme', aboutme);
      formData.append('email', email);
      formData.append('organization', organization);
      formData.append('shirtSize', shirtSize);
      formData.append('registrationType', registrationType);
  
      // Upload image to the server
      const response = await axios.post('https://view.swank12.com/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Get the image path from the server response
      //adding absolute url into it
      const imagePath = "https://view.swank12.com/" +      response.data.imagePath;
       // Send the image path and other form data to the database
      await axios.post('https://view.swank12.com/api/posts', {
        name,
        aboutme,
        email,
        organization,
        shirtSize,
        registrationType,
        profilePicturePath: imagePath, // Send the image path as profilePicturePath
      });
      setShowNotification(true);
      
      const timer = setTimeout(() => {
          setShowNotification(false);
          setIsFormVisible(false);
      }, 2000); 
      setShowNotification(timer);
  
      
      window.location.reload('/dashboard/');
    } catch (error) {
      console.error('Error adding post:', error);
      setErorNotification(true);
      const timer = setTimeout(() => {
        setErorNotification(false);
    }, 2000); 
    setErorNotification(timer);
    }finally {
      setLoading(false); // Reset loading state regardless of the outcome
    }
  };
  
  const closeform = async () => {
    try{
      setIsFormVisible(false);
    }catch ( error ) {
      console.error(error, 'Form Are Not Closed')
    }
  } 

  const AddshirtSizes = ['Small', 'Medium', 'Large', 'XL', 'XXL']; // Available shirt sizes


  return (
    <div className='post-edit-form'>
      <div className='container'>
        <div className='ptr-part'>
          <h1 className="posts-title">Participants</h1>
          <button className='add-new-form' onClick={() => setIsFormVisible(true)}>Add New Participant</button>
        </div>
        {isFormVisible && (
          <div className='form-reg-he'>
            <div className='edit-main'>
              <h2>Add New Particpant</h2>
              <div className='close-frm-icon'>
                <FontAwesomeIcon onClick={closeform} icon={faTimes} />
              </div>
              <div className='inr-container'>
                <form onSubmit={handleAddPost}>
                  <label className='image-type-field'>
                    <span>Profile Picture</span>
                    <input type="file" required onChange={handleImageChange} />
                  </label>
                  <label>
                    <span>Full Name</span>
                    <input type="text" required placeholder="Title" value={name} onChange={(e) => setTitle(e.target.value)} />
                  </label>
                  <label>
                    <span>Email Address</span>
                    <input type="email" required placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </label>
                  <label>
                    <span>Organization</span>
                    <input placeholder="Organization" type='text' value={organization} onChange={(e) => setDescription(e.target.value)} />
                  </label>
                  <label>
                    <span>Select Shirt Size</span>
                    <select required value={shirtSize} onChange={(e) => setShirtSize(e.target.value)}>
                      <option value="">Select Shirt Size</option>
                      {AddshirtSizes.map((size, index) => (
                        <option key={index} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <span>Select Registration Type</span>
                    <select required value={registrationType} onChange={(e) => setRegistrationType(e.target.value)}>
                      <option value="">Select Registration Type</option>
                      <option value="tshirt">Buy T-shirt ($25)</option>
                      <option value="challenge">Participate to Win Challenge ($50)</option>
                    </select>
                  </label>
                  <label>
                    <span>About Me</span>
                    <textarea type="text" required placeholder="About Me" value={aboutme} onChange={(e) => setAboutMe(e.target.value)} />
                  </label>
                  <button className='add-new-post' type='submit' disabled={loading}>
                        {loading ? ' Processing...' : ' Add New Participant'}
                  </button>
                </form>
                {showNotification && (
                  <Notification 
                    className='success-notification'
                    message='Participant Added Successful!'
                  />
                )}
                {showErorNotification && (
                  <Notification 
                    className='decline-notification'
                    message='Please try again'
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddNewPost;