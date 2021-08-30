import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../utils/mutations';
import axios from 'axios'
import Auth from '../utils/auth';
import "../style/Signup.css";

const ItemForm = () => {
    const [fileState, setFileState] = useState([]);

    const [formState, setFormState] = useState({
      name: '',
      genre: '',
      location: '',
      description: '',
      condition:'',
    });

    const [addItem, { error }] = useMutation(ADD_ITEM);

    const handleFormSubmit = async (event) => {
      event.preventDefault();


      const formData = new FormData();
      formData.append('file', fileState);
      formData.append('upload_preset', 'ml_default');

      console.log(formData);
      const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
      formData
    )
    try {
      console.log(response);
      const { data } = addItem({
        variables: { 
         ...formState,
         image_id: response.data.public_id,
         user: Auth.getProfile().data.username,
        },
      });
      console.log(formState);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

    const handleFileChange = (event) => {
      setFileState(event.target.files[0]);
      console.log(fileState);
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    return (
          <div className="container p-3">
            <form onSubmit={handleFormSubmit}>
              <h1 className="text-center">Submit Your Item</h1>
              <div className="form-control p-3">
                <label>Item Name:</label>
                <input className="form-control my-2" name="name" type="text" onChange={handleChange}></input>
                <label>Item Genre:</label>
                <input className="form-control my-2" name="genre" type="text" onChange={handleChange}></input>
                <label>Location:</label>
                <input className="form-control my-2" name="location" type="text" onChange={handleChange}></input>
                <label>Condition:</label>
                <input className="form-control my-2" name="condition" type="text" onChange={handleChange}></input>
                <label>Enter description:</label>
                <input className="form-control my-2" name="description" type="text" onChange={handleChange}></input>
                <label>Add Photo:</label>
                <input className="form-control my-2" name="file" type="file" accept="image/png, image/jpg, image/jpeg" onChange={handleFileChange}></input>
                <br></br>
                <button type="submit" className="signup-btn">Submit</button>
              </div>
            </form>
          </div>
    );
};   
    
export default ItemForm;