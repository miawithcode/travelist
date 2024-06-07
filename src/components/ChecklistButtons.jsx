import ArrowReloadHorizontalIcon from './icons/ArrowReloadHorizontalIcon';
import CheckmarkCircle02Icon from './icons/CheckmarkCircle02Icon';
import Delete02Icon from './icons/Delete02Icon';
import RemoveCircleIcon from './icons/RemoveCircleIcon';
import Button from './Button';
import { useItemsStore } from '../stores/itemsStore';

const ChecklistButtons = () => {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  const checklistButtons = [
    {
      text: 'Mark all as complete',
      icon: <CheckmarkCircle02Icon />,
      onClick: markAllAsComplete,
    },
    {
      text: 'Mark all as incomplete',
      icon: <RemoveCircleIcon />,
      onClick: markAllAsIncomplete,
    },
    {
      text: 'Reset to initial',
      icon: <ArrowReloadHorizontalIcon />,
      onClick: resetToInitial,
    },
    {
      text: 'Remove all items',
      icon: <Delete02Icon />,
      onClick: removeAllItems,
    },
  ];

  return (
    <section className="btn-container">
      {checklistButtons.map((button) => (
        <Button key={button.text} onClick={button.onClick}>
          {button.icon} {button.text}
        </Button>
      ))}
    </section>
  );
};

export default ChecklistButtons;
