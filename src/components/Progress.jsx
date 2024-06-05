// import Progressbar from './Progressbar';

const Progress = ({ numbersOfItemsPacked, totalNumberOfItems }) => {
  return (
    <div className="progress">
      {/* <Progressbar /> */}
      <p>
        <span className="emphasis-color">{numbersOfItemsPacked}</span> /{' '}
        {totalNumberOfItems} items packed
      </p>
    </div>
  );
};

export default Progress;
