import Button from './Button';
import ArrowReloadHorizontalIcon from './icons/ArrowReloadHorizontalIcon';
import CheckmarkCircle02Icon from './icons/CheckmarkCircle02Icon';
import Delete02Icon from './icons/Delete02Icon';
import RemoveCircleIcon from './icons/RemoveCircleIcon';

const checklistButtons = [
  { text: 'Mark all as complete', icon: <CheckmarkCircle02Icon /> },
  { text: 'Mark all as incomplete', icon: <RemoveCircleIcon /> },
  { text: 'Reset to initial', icon: <ArrowReloadHorizontalIcon /> },
  { text: 'Remove all items', icon: <Delete02Icon /> },
];

const ChecklistButtons = () => {
  return (
    <section className="btn-container">
      {checklistButtons.map((button) => (
        <Button key={button.text}>
          {button.icon} {button.text}
        </Button>
      ))}
    </section>
  );
};

export default ChecklistButtons;
