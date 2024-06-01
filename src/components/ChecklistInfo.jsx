import MoreHorizontalIcon from './icons/MoreHorizontalIcon';

const ChecklistInfo = () => {
  return (
    <div className="checklist-info">
      <div className="checklist-title-container">
        <h3 className="checklist-title">Important</h3>
        <span className="checklist-counter">3</span>
      </div>
      <button>
        <MoreHorizontalIcon />
      </button>
    </div>
  );
};

export default ChecklistInfo;
