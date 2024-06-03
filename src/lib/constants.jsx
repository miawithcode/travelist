import ArrowReloadHorizontalIcon from '../components/icons/ArrowReloadHorizontalIcon';
import CheckmarkCircle02Icon from '../components/icons/CheckmarkCircle02Icon';
import Delete02Icon from '../components/icons/Delete02Icon';
import RemoveCircleIcon from '../components/icons/RemoveCircleIcon';

export const initialItems = [
  {
    category: 'Importants',
    categoryItems: [
      { id: 1, label: 'Good mood', isPacked: true },
      { id: 2, label: 'Passport', isPacked: false },
      { id: 3, label: 'Credit card', isPacked: false },
    ],
    color: '#f9eaeb',
  },
  {
    category: 'Toiletries',
    categoryItems: [
      { id: 4, label: 'Toothbrush', isPacked: false },
      { id: 6, label: 'Toothpaste', isPacked: false },
      { id: 7, label: 'Razor', isPacked: false },
      { id: 8, label: 'Nail clipper', isPacked: false },
    ],
    color: '#eaf4f9',
  },
  {
    category: 'Digital Products',
    categoryItems: [{ id: 9, label: 'Phone charger', isPacked: false }],
    color: '#eaf9f3',
  },
];

export const checklistButtons = [
  { text: 'Mark all as complete', icon: <CheckmarkCircle02Icon /> },
  { text: 'Mark all as incomplete', icon: <RemoveCircleIcon /> },
  { text: 'Reset to initial', icon: <ArrowReloadHorizontalIcon /> },
  { text: 'Remove all items', icon: <Delete02Icon /> },
];
