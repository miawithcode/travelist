import AlignTopIcon from './icons/AlignTopIcon';
import LeftToRightListBulletIcon from './icons/LeftToRightListBulletIcon';

const Views = () => {
  return (
    <div className="view-btn-container">
      <button className="view-btn active">
        <AlignTopIcon className="view-icon" />
      </button>
      <button className="view-btn">
        <LeftToRightListBulletIcon className="view-icon" />
      </button>
    </div>
  );
};

export default Views;
