import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../utils/mutations';
import axios from 'axios'
import Auth from '../utils/auth';

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
      <form onSubmit={handleFormSubmit}>
        <input name="name" type="text" onChange={handleChange}></input>
        <input name="genre" type="text" onChange={handleChange}></input>
        <input name="location" type="text" onChange={handleChange}></input>
        <input name="condition" type="text" onChange={handleChange}></input>
        <input name="description" type="text" onChange={handleChange}></input>
        <input name="file" type="file" accept="image/png, image/jpg, image/jpeg" onChange={handleFileChange}></input>
        <button type="submit">Submit</button>
      </form>
    );
};   
    
export default ItemForm;