import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../utils/mutations';
import axios from 'axios'
import Auth from '../utils/auth';
import "../style/Signup.css";
import bearImg from "../assets/images/Walter.png";
// import necessary items, files, libraries, etc


const ItemForm = () => {

  // set state to empty array
  const [fileState, setFileState] = useState([]);
  // set state to empty strings
  const [formState, setFormState] = useState({
    name: '',
    genre: '',
    location: '',
    description: '',
    condition: '',
  });

  // takes in add item mutation
  const [addItem, { error }] = useMutation(ADD_ITEM);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // creates new Form Data using updated file state and cloudinary preferences
    const formData = new FormData();
    formData.append('file', fileState);
    formData.append('upload_preset', 'ml_default');

    // posts the form(item)(photo) to cloudinary
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/outdoor-trading-co/image/upload`,
      formData
    )
    try {
      // utilize response from cloudinary upload as well as updated form state to assign variables to document
      const { data } = addItem({
        variables: {
          ...formState,
          image_id: response.data.public_id,
          user: Auth.getProfile().data.username,
        },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };
  // on change, update file state to match input
  const handleFileChange = (event) => {
    setFileState(event.target.files[0]);
    console.log(fileState);
  };
  // on change update form state to match input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };
  // display form
  return (
    <div className="container p-3">
      <form onSubmit={handleFormSubmit}>
        <div className="walter-says">
          <h2>Have you got outdoor items for people to rent or borrow?</h2>
          <p>Post them here to allow other users to request them!</p>
        </div>
        <img src={bearImg} className="walter" alt="An illustration of a bear named Walter with a backpack."></img>
        <div className="form-control p-3">
          <label>Item Name:</label>
          <input className="form-control my-2" name="name" type="text" onChange={handleChange}></input>
          <label>Item Genre:</label>
          <Form.Select aria-label="Default select example" name="genre" type="text" onChange={handleChange}>
            <option>Select Item Genre</option>
            <option value="Hiking">Hiking</option>
            <option value="Climbing">Climbing</option>
            <option value="Water">Water</option>
            <option value="Misc">Misc</option>
            <option value="Snow">Snow</option>
            <option value="Camping">Camping</option>
          </Form.Select>
          <label>Location:</label>
          <input className="form-control my-2" name="location" type="text" onChange={handleChange}></input>
          <label>Condition:</label>
          <Form.Select aria-label="Default select example" name="condition" type="text" onChange={handleChange}>
            <option>Select Item Condition</option>
            <option value="Like New">Like New</option>
            <option value="Good">Good</option>
            <option value="Ok">Ok</option>
            <option value="Poor">Poor</option>
          </Form.Select>
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