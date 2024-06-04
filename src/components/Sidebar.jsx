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
