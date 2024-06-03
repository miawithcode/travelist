import ChecklistButtons from './ChecklistButtons';
import Divider from './Divider';
import Footer from './Footer';
import Logo from './Logo';
import Button from './Button';
import AddCircleIcon from './icons/AddCircleIcon';
import ArrowDataTransferVerticalIcon from './icons/ArrowDataTransferVerticalIcon';
import NewItemForm from './NewItemForm';

const Sidebar = ({ isFormOpen, toggleForm, addItem }) => {
  return (
    <aside>
      <Logo />

      {/* General Buttons */}
      <section>
        {/* New Item Button */}
        <div className={isFormOpen && 'active'}>
          <Button onClick={toggleForm}>
            <AddCircleIcon /> New item
          </Button>
          {isFormOpen && <NewItemForm addItem={addItem} />}
        </div>

        {/* Sort Button */}
        <div>
          <Button>
            <ArrowDataTransferVerticalIcon /> Sort by
          </Button>
        </div>
      </section>

      <Divider />
      <ChecklistButtons />
      <Footer />
    </aside>
  );
};

export default Sidebar;
