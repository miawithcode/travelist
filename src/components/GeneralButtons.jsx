import Button from './Button';
import AddCircleIcon from './icons/AddCircleIcon';
import ArrowDataTransferVerticalIcon from './icons/ArrowDataTransferVerticalIcon';

const generalButtons = [
  { text: 'New item', icon: <AddCircleIcon /> },
  { text: 'Sort by', icon: <ArrowDataTransferVerticalIcon /> },
];

const GeneralButtons = () => {
  return (
    <section className="btn-container">
      {generalButtons.map((button) => (
        <Button key={button.text}>
          {button.icon} {button.text}
        </Button>
      ))}
    </section>
  );
};

export default GeneralButtons;
