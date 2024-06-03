import ChecklistHeader from './ChecklistHeader';
import Divider from './Divider';
import Checklist from './Checklist';
import NewSectionButton from './NewSectionButton';

const Main = ({ items }) => {
  return (
    <main>
      <ChecklistHeader />
      <Divider />
      <section className="checklists-container">
        <Checklist items={items} />
        <NewSectionButton />
      </section>
    </main>
  );
};

export default Main;
