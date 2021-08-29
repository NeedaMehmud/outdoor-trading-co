import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_ITEM } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const ItemForm = () => {
    // genre will be drop down with given options
    // const [item, setItem] = useState({ 
    //     genre: "",
    //     name: "",
    //     location: "",
    //     description: "",
    //     condition: "",
    //     image_id: "",
    //     user: "",   
    // }); 

    // const [itemGenre, setItemGenre] = useState('');
    // const [itemName, setItemName] = useState('');
    // const [itemLocation, setItemLocation] = useState('');
    // // condition will be drop down with given options
    // const [itemCondition, setItemCondition] = useState(''); 
    // const [itemDescription, setItemDescription] = useState(''); 
    // const [itemImageId, setItemImageId] = useState(''); 



    // const [addItem, { error }] = useMutation(ADD_ITEM, {
    //     update(cache, { data: { addThought } }) {
    //       try {
    //         const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });
    
    //         cache.writeQuery({
    //           query: QUERY_THOUGHTS,
    //           data: { thoughts: [addThought, ...thoughts] },
    //         });
    //       } catch (e) {
    //         console.error(e);
    //       }
    
    //       // update me object's cache
    //       const { me } = cache.readQuery({ query: QUERY_ME });
    //       cache.writeQuery({
    //         query: QUERY_ME,
    //         data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
    //       });
    //     },
    //   });


    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    
    //     try {
    //       const { data } = await addItem({
    //         variables: {
    //           item,
    //           user: Auth.getProfile().data.username,
    //         },
    //       });
    
    //       setItem({ 
    //         genre: "",
    //         name: "",
    //         location: "",
    //         description: "",
    //         condition: "",
    //         image_id: "",
    //         user: "",   
    //     });
    //     } catch (err) {
    //       console.error(err);
    //     }
    //   };

    //   const handleChange = (event) => {
    //     const { name, value } = event.target;

    //     setItem({...item, [name]: value})
    //   }

    const [formState, setFormState] = useState({
        name: '',
        genre: '',
        location: '',
        description: '',
        image_id:'',
        condition:'',
      });
    
      // Set up our mutation with an option to handle errors
      const [addItem, { error }] = useMutation(ADD_ITEM);

      const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        // On form submit, perform mutation and pass in form data object as arguments
        // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
        try {
          const { data } = addItem({
            variables: { 
             ...formState,
             user: Auth.getProfile().data.username,
            },
          });
          console.log(formState);
        //   window.location.reload();
        } catch (err) {
          console.error(err);
        }
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
            <input name="image_id" type="text" onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </form>
    );
};   
    
export default ItemForm;