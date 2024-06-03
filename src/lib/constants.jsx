import ArrowReloadHorizontalIcon from '../components/icons/ArrowReloadHorizontalIcon';
import CheckmarkCircle02Icon from '../components/icons/CheckmarkCircle02Icon';
import Delete02Icon from '../components/icons/Delete02Icon';
import RemoveCircleIcon from '../components/icons/RemoveCircleIcon';

export const initialItems = [
  { id: 1, label: 'Good mood', isPacked: true },
  { id: 2, label: 'Passport', isPacked: false },
  { id: 3, label: 'Credit card', isPacked: false },
];

export const checklistButtons = [
  { text: 'Mark all as complete', icon: <CheckmarkCircle02Icon /> },
  { text: 'Mark all as incomplete', icon: <RemoveCircleIcon /> },
  { text: 'Reset to initial', icon: <ArrowReloadHorizontalIcon /> },
  { text: 'Remove all items', icon: <Delete02Icon /> },
];
