import { useRef, useState } from 'react';

const NewItemForm = ({ addItem, categories }) => {
  const [item, setItem] = useState('');
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const inputRef = useRef();

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
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
          <select value={category} onChange={handleCategoryChange}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

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
