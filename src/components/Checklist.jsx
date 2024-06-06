import useItemsContext from '../hooks/useItemsContext';
import EmptyView from './EmptyView';
import Cancel01Icon from './icons/Cancel01Icon';
import MoreHorizontalIcon from './icons/MoreHorizontalIcon';

const Checklist = ({ items }) => {
  return (
    <>
      {items.length === 0 && <EmptyView />}

      {items.map((section) => {
        return <Section key={section.category} {...section} />;
      })}
    </>
  );
};

const Section = ({ category, categoryItems, color }) => {
  return (
    <section key={category} className="checklist">
      <div className="checklist-header">
        <div className="checklist-title-container">
          <h3 className="checklist-title" style={{ backgroundColor: color }}>
            {category}
          </h3>
          <p className="checklist-counter">{categoryItems.length}</p>
        </div>
        <button>
          <MoreHorizontalIcon />
        </button>
      </div>

      <ul className="item-container">
        {categoryItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>

      {/* <NewItemButton /> */}
    </section>
  );
};

const Item = ({ id, label, isPacked }) => {
  const { deleteItem, toggleItem } = useItemsContext();

  return (
    <li className="item">
      <label style={{ color: `${isPacked ? '#6b7280' : ''}` }}>
        <input
          type="checkbox"
          checked={isPacked}
          onChange={() => toggleItem(id)}
        />
        {label}
      </label>

      <button onClick={() => deleteItem(id)}>
        <Cancel01Icon className="delete-item-icon" />
      </button>
    </li>
  );
};

export default Checklist;
