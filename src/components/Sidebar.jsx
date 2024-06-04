import ChecklistButtons from './ChecklistButtons';
import Footer from './Footer';
import Logo from './Logo';

const Sidebar = ({
  markAllAsIncomplete,
  markAllAsComplete,
  resetToInitial,
  removeAllItems,
}) => {
  return (
    <aside>
      <Logo />

      {/* General Buttons */}
      {/* <section>
        <div className={isFormOpen && 'active'}>
          <Button onClick={toggleForm}>
            <AddCircleIcon /> New item
          </Button>
          {isFormOpen && <NewItemForm addItem={addItem} />}
        </div>

        <div>
          <Button>
            <ArrowDataTransferVerticalIcon /> Sort by
          </Button>
        </div>
      </section> */}

      {/* <Divider /> */}
      <ChecklistButtons
        markAllAsComplete={markAllAsComplete}
        markAllAsIncomplete={markAllAsIncomplete}
        resetToInitial={resetToInitial}
        removeAllItems={removeAllItems}
      />
      <Footer />
    </aside>
  );
};

export default Sidebar;
