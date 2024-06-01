import ChecklistButtons from './ChecklistButtons';
import Divider from './Divider';
import Footer from './Footer';
import GeneralButtons from './GeneralButtons';
import Logo from './Logo';

const Sidebar = () => {
  return (
    <aside>
      <Logo />
      <GeneralButtons />
      <Divider />
      <ChecklistButtons />
      <Footer />
    </aside>
  );
};

export default Sidebar;
