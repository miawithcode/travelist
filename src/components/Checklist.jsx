import ChecklistInfo from './ChecklistInfo';
import Item from './Item';
import NewItemButton from './NewItemButton';

const Checklist = () => {
  return (
    <div className="checklist">
      <ChecklistInfo />
      <ul className="item-container">
        <Item />
        <NewItemButton />
      </ul>
    </div>
  );
};

export default Checklist;
