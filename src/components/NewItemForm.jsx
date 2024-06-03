import { useRef, useState } from 'react';
import Cancel01Icon from './icons/Cancel01Icon';

const NewItemForm = ({ addItem, isModalOpen, closeModal }) => {
  const [item, setItem] = useState('');
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

    addItem(item);
    setItem('');
    setErrorMessage('');
    inputRef.current.focus();
  };

  return (
    <div className={`new-item-form-layer ${isModalOpen ? 'show' : ''}`}>
      <div className="form-container">
        <button className="close-btn" onClick={closeModal}>
          <Cancel01Icon width={16} height={16} color={'#6b7280'} />
        </button>
        <form onSubmit={handleSubmit} className="new-item-form">
          <input
            ref={inputRef}
            value={item}
            onChange={handleChange}
            placeholder="ex. Toothpaste"
            autoFocus={true}
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="btn-add-item">
            New item
          </button>
        </form>
      </div>
    </div>
  );
};
export default NewItemForm;
