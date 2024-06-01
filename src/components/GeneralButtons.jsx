import Button from './Button';
import AddCircleIcon from './icons/AddCircleIcon';
import ArrowDataTransferVerticalIcon from './icons/ArrowDataTransferVerticalIcon';

const GeneralButtons = () => {
  return (
    <section className="btn-container">
      <Button>
        <AddCircleIcon /> New item
      </Button>
      <Button>
        <ArrowDataTransferVerticalIcon /> Sort by
      </Button>
    </section>
  );
};

export default GeneralButtons;
