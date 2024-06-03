import Button from './Button';
import AddCircleIcon from './icons/AddCircleIcon';
import ArrowDataTransferVerticalIcon from './icons/ArrowDataTransferVerticalIcon';

const GeneralButtons = ({ openModal }) => {
  const generalButtons = [
    { text: 'New item', icon: <AddCircleIcon />, onClick: openModal },
    { text: 'Sort by', icon: <ArrowDataTransferVerticalIcon /> },
  ];

  return (
    <section className="btn-container">
      {generalButtons.map((button) => (
        <Button key={button.text} onClick={button.onClick}>
          {button.icon} {button.text}
        </Button>
      ))}
    </section>
  );
};

export default GeneralButtons;
