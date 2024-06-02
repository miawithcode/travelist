import Cancel01Icon from './icons/Cancel01Icon';

const NewItemForm = () => {
  return (
    <div className="new-item-form-layer">
      <form className="new-item-form">
        <button className="close-btn">
          <Cancel01Icon width={16} height={16} color={'#6b7280'} />
        </button>
        <input type="text" placeholder="ex. Toothpaste" />
        <button className="btn-add-item">New item</button>
      </form>
    </div>
  );
};
export default NewItemForm;
