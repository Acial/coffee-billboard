import { useState } from 'react';

const useForm = (fields, submitCallback) => {
  const [inputs, setInputs] = useState({
    ...fields
  });

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    submitCallback();
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useForm;
