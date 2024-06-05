export const initialItems = [
  {
    category: 'Inbox',
    categoryItems: [],
    color: '#eaf4f9',
  },
  {
    category: 'Important',
    categoryItems: [
      { id: 1, label: 'Good mood', isPacked: true },
      { id: 2, label: 'Passport', isPacked: false },
      { id: 3, label: 'Credit card', isPacked: false },
    ],
    color: '#f9eaeb',
  },
  {
    category: 'Digital Products',
    categoryItems: [{ id: 4, label: 'Phone charger', isPacked: false }],
    color: '#eaf4f9',
  },
];

export const emptyItems = [
  {
    category: 'Inbox',
    categoryItems: [],
    color: '#eaf4f9',
  },
];
