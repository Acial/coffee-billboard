import React, { useState } from "react";
import useForm from "../../hooks/FormHook";
import { useDispatch } from "react-redux";
import { addCoffee } from '../../actions/coffee';

const AddCoffee = () => {
  const dispatch = useDispatch();
  const { inputs, handleInputChange, handleSubmit } = useForm(
    {
      title: "",
      imageUrl: "",
      price: ""
    }, () => dispatch(addCoffee(inputs))
  );

  const content = (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          required
          onChange={handleInputChange}
          value={inputs.title}
        />
        <label>Image Url</label>
        <input
          type="text"
          name="imageUrl"
          required
          onChange={handleInputChange}
          value={inputs.imageUrl}
        />
        <label>Price</label>
        <input
          type="number"
          name="price"
          required
          onChange={handleInputChange}
          value={inputs.price}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );

  return content;
};

export default AddCoffee;
