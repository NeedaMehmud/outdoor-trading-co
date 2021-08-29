import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../utils/mutations';
import axios from 'axios'
import Auth from '../utils/auth';

const ItemForm = () => {
    const [fileState, setFileState] = useState({
      file: [0]
    });

    const formData = new FormData();
    formData.append('file', fileState);

    const handleFormSubmit = async (event) => {
          event.preventDefault();

      const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
      formData,
    )
    console.log(response);};

    return (
      <form onSubmit={handleFormSubmit}>
        <input name="image_id" type="file" accept="image/png, image/jpg, image/jpeg"></input>
        <button type="submit">Submit</button>
      </form>
    );

    // const [formState, setFormState] = useState({
    //     name: '',
    //     genre: '',
    //     location: '',
    //     description: '',
    //     image_id:'',
    //     condition:'',
    // });
    
    //   // Set up our mutation with an option to handle errors
    //   const [addItem, { error }] = useMutation(ADD_ITEM);

    //   const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    
    //     // On form submit, perform mutation and pass in form data object as arguments
    //     // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
    //     try {
    //       const { data } = addItem({
    //         variables: { 
    //          ...formState,
    //          user: Auth.getProfile().data.username,
    //         },
    //       });
    //       console.log(formState);
    //     //   window.location.reload();
    //     } catch (err) {
    //       console.error(err);
    //     }
    //   };
    
    //   const handleChange = (event) => {
    //     const { name, value } = event.target;
    //       setFormState({ ...formState, [name]: value });
    //   };
    
    

    // return (
    //     <form onSubmit={handleFormSubmit}>
    //         <input name="name" type="text" onChange={handleChange}></input>
    //         <input name="genre" type="text" onChange={handleChange}></input>
    //         <input name="location" type="text" onChange={handleChange}></input>
    //         <input name="condition" type="text" onChange={handleChange}></input>
    //         <input name="description" type="text" onChange={handleChange}></input>
    //         <input name="image_id" type="text" onChange={handleChange}></input>
    //         <button type="submit">Submit</button>
    //     </form>
    // );
};   
    
export default ItemForm;