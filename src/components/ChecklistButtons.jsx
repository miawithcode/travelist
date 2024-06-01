import Button from './Button';
import ArrowReloadHorizontalIcon from './icons/ArrowReloadHorizontalIcon';
import CheckmarkCircle02Icon from './icons/CheckmarkCircle02Icon';
import Delete02Icon from './icons/Delete02Icon';
import RemoveCircleIcon from './icons/RemoveCircleIcon';

const ChecklistButtons = () => {
  return (
    <section className="btn-container">
      <Button>
        <CheckmarkCircle02Icon /> Mark all as complete
      </Button>
      <Button>
        <RemoveCircleIcon /> Mark all as incomplete
      </Button>
      <Button>
        <ArrowReloadHorizontalIcon /> Reset to initial
      </Button>
      <Button>
        <Delete02Icon /> Remove all items
      </Button>
    </section>
  );
};

export default ChecklistButtons;
