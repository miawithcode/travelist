import Progress from './Progress';
import Views from './Views';

const ChecklistHeader = () => {
  return (
    <div className="checklist-header">
      <Views />
      <Progress />
    </div>
  );
};

export default ChecklistHeader;
