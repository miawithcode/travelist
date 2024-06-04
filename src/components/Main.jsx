import Divider from './Divider';
import Checklist from './Checklist';
import NewSectionButton from './NewSectionButton';
import Views from './Views';
import Progress from './Progress';
import NewItemForm from './NewItemForm';

const Main = ({ items, addItem, deleteItem, toggleItem }) => {
  return (
    <main>
      <NewItemForm addItem={addItem} />

      <div className="main-header">
        <Views />
        <Progress />
      </div>
      <Divider />
      <section className="checklists-container">
        <Checklist
          items={items}
          deleteItem={deleteItem}
          toggleItem={toggleItem}
        />
        <NewSectionButton />
      </section>
    </main>
  );
};

export default Main;
