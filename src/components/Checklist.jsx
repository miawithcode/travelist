import { useState } from 'react';
import { initialItems } from '../lib/constants';
import ChecklistInfo from './ChecklistInfo';
import NewItemButton from './NewItemButton';
import Cancel01Icon from './icons/Cancel01Icon';

const Checklist = () => {
  const [items, setItems] = useState(initialItems);

  return (
    <div className="checklist">
      <ChecklistInfo />
      <ul className="item-container">
        {items.map((item) => (
          <Item key={item.label} {...item} />
        ))}
        <NewItemButton />
      </ul>
    </div>
  );
};

const Item = ({ label, isPacked }) => {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={isPacked} />
        {label}
      </label>

      <button>
        <Cancel01Icon className="delete-item-icon" />
      </button>
    </li>
  );
};

export default Checklist;
