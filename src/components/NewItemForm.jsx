import { useRef, useState } from 'react';

const NewItemForm = ({ addItem }) => {
  const [item, setItem] = useState('');
  // const [category, setCategory] = useState('Untitled');
  const category = 'Untitled';
  const [errorMessage, setErrorMessage] = useState('');
  const inputRef = useRef();

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item) {
      setErrorMessage('New item can not be empty.');
      inputRef.current.focus();
      return;
    }

    addItem(category, item);
    setItem('');
    setErrorMessage('');
    inputRef.current.focus();
  };

  return (
    <div className="new-item-form-container">
      <form onSubmit={handleSubmit} className="new-item-form">
        <input
          ref={inputRef}
          value={item}
          onChange={handleChange}
          placeholder="ex. Toothbrush"
          autoFocus={true}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="btn-add-item">
          Add
        </button>
      </form>
    </div>
  );
};
export default NewItemForm;
