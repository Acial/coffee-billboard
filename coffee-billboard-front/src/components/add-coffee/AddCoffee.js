import React from 'react';
import useForm from '../../hooks/FormHook';
import { useDispatch } from 'react-redux';
import { addCoffee } from '../../actions/coffee';

const AddCoffee = () => {
  const dispatch = useDispatch();
  const { inputs, handleInputChange, handleSubmit } = useForm(
    {
      title: '',
      imageUrl: '',
      price: ''
    },
    () => dispatch(addCoffee(inputs))
  );

  const content = (
    <div className='container'>
      <div className='row' />
      <div className='row'>
        <div className='col-md-4 offset-md-4'>
          <h1 className='center'>Add new coffee</h1>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>Title</label>
              <input
                className='form-control'
                type='text'
                name='title'
                required
                onChange={handleInputChange}
                value={inputs.title}
              />
            </div>

            <div className='form-group'>
              <label>Image Url</label>
              <input
                className='form-control'
                type='text'
                name='imageUrl'
                required
                onChange={handleInputChange}
                value={inputs.imageUrl}
              />
            </div>
            <div className='form-group'>
              <label>Price</label>
              <input
                className='form-control'
                type='number'
                name='price'
                required
                onChange={handleInputChange}
                value={inputs.price}
              />
            </div>
            <div className='form-group'>
              <button
                className='btn btn-primary form-control col-4'
                type='submit'
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return content;
};

export default AddCoffee;
