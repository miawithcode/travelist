import AlignTopIcon from './icons/AlignTopIcon';
import LeftToRightListBulletIcon from './icons/LeftToRightListBulletIcon';

const Views = () => {
  return (
    <div className="view-btn-container">
      <button className="view-btn active">
        <AlignTopIcon width={20} height={20} />
      </button>
      <button className="view-btn">
        <LeftToRightListBulletIcon width={20} height={20} />
      </button>
    </div>
  );
};

export default Views;
