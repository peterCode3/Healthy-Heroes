import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Notification from './atoms/Notification';
import Logo from './atoms/Logo';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [aboutme, setAboutMe] = useState('');
  const [organization, setOrganization] = useState('');
  const [shirtSize, setShirtSize] = useState('');
  const [profilePicturePath, setProfilePicturePath] = useState('');
  const [registrationType, setRegistrationType] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showErorNotification, setErorNotification] = useState(false);
  
  const stripe = useStripe();
  const elements = useElements();

  // const [imageFile, setImageFile] = useState(null);


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setProfilePicturePath(file);
  };
  
  const handleSubmit = async (event) => {
  setLoading(true);

    event.preventDefault();
    try { 
      const { token, error } = await stripe.createToken(elements.getElement(CardElement));
      console.log(token); 
      if (error) {
        throw new Error(error.message);
      }

      
      const formData = new FormData();
      formData.append('image', profilePicturePath);

      const imageResponse = await axios.post('https://view.swank12.com/api/upload', formData);
      const imagePath = "https://view.swank12.com/" +      imageResponse.data.imagePath;

      
      const response = await axios.post('https://view.swank12.com/api/participant', {
        name,
        email,
        aboutme,
        organization,
        shirtSize,
        profilePicturePath : imagePath,
        registrationType,
        stripeToken: token.id,
      });
      

      setShowNotification(true);
      
      const timer = setTimeout(() => {
          setShowNotification(false);
      }, 8000); 
      setShowNotification(timer);

  
      console.log(response.data);
      // Optionally, reset form fields after successful submission
      setName('');
      setEmail('');
      setAboutMe(''),
      setOrganization('');
      setShirtSize('');
      setProfilePicturePath('');
      setRegistrationType('');
    } catch (error) {
      setErorNotification(true);
      const timer = setTimeout(() => {
        setErorNotification(false);
    }, 8000); 
    setErorNotification(timer);
      console.error('Error processing payment or adding data to database:', error.message);
    }finally {
      setLoading(false); // Reset loading state regardless of the outcome
    }
  };


const cardElementOptions = {
  hidePostalCode: true,
};


  const shirtSizes = ['Small', 'Medium', 'Large', 'XL', 'XXL']; // Available shirt sizes

  return (
    <div className='post-edit-form signup-main'>
      <div className='container'>
        {/* <div className='title-part-list'>
            <h1>Signup SNIP Heroes</h1>
        </div> */}
        <div className='edit-main sign-up-page'>
          <div className='signup-log'>
              <div className='logo-snip'>
                  <Logo 
                      logo = '/healthlogo.png'
                  />
              </div>
          </div>
          <div className='regester-form'>
            <form className='post-edit-form' onSubmit={handleSubmit}>
                <label>
                  <span>Full Name</span>
                  <input type="text" required placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                
                <label>
                  <span>Organization</span>
                  <input type="text" required placeholder="Organization" value={organization} onChange={(e) => setOrganization(e.target.value)} />
                </label>
                <label>
                  <span>Select Shirt Size</span>
                  <select required value={shirtSize} onChange={(e) => setShirtSize(e.target.value)}>
                    <option value="">Select Shirt Size</option>
                    {shirtSizes.map((size, index) => (
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
                <label className='image-type-field'>
                  <span>Profile Picture</span>
                  <input type="file" required onChange={handleImageChange} />
                </label>
                <label>
                  <span>Payment</span>
                  <CardElement options={cardElementOptions} />
                </label>
                <button type="submit"  className='add-new-post' disabled={loading}>
                  {loading ? 'Processing...' : 'Register and Pay'}
                </button>
              </form>
              {showNotification && (
                <Notification 
                  className='success-notification'
                  message='Registration and Payment Successful! Kindly check your email'
                />
              )}
              {showErorNotification && (
                <Notification 
                  className='decline-notification'
                  message='Payment Declined Kindly Contact at becki@swansolutionsllc.com '
                />
              )}
          </div>
          </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
