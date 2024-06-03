import Divider from './Divider';
import Checklist from './Checklist';
import NewSectionButton from './NewSectionButton';
import Views from './Views';
import Progress from './Progress';

const Main = ({ items }) => {
  return (
    <main>
      <div className="main-header">
        <Views />
        <Progress />
      </div>
      <Divider />
      <section className="checklists-container">
        <Checklist items={items} />
        <NewSectionButton />
      </section>
    </main>
  );
};

export default Main;
