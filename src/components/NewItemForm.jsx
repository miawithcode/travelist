import { useRef, useState } from 'react';
import Select from 'react-select';

const NewItemForm = ({ addItem, categories }) => {
  const [item, setItem] = useState('');
  const [category, setCategory] = useState('Important');
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
        <div className="new-item-input">
          <div className="section-select">
            <Select
              defaultValue={categories[0]}
              options={categories}
              onChange={(option) => setCategory(option.value)}
            />
          </div>
          <input
            ref={inputRef}
            value={item}
            onChange={handleChange}
            placeholder="e.g. Toothbrush"
            autoFocus={true}
          />
          <button type="submit" className="btn-add-item">
            Add to list
          </button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};
export default NewItemForm;
