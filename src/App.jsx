import { useState } from 'react';
import { initialItems } from './lib/constants';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [items, setItems] = useState(initialItems);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const addItem = (category, newItemLabel) => {
    const newItem = {
      id: new Date().getTime(),
      label: newItemLabel,
      isPacked: false,
    };

    const isCategoryExist = items.some((item) => item.category === category);

    let newItems;

    if (isCategoryExist) {
      newItems = items.map((item) => {
        if (item.category === category) {
          return {
            ...item,
            categoryItems: [...item.categoryItems, newItem],
          };
        }

        return item;
      });
    } else {
      newItems = [
        {
          category,
          categoryItems: [newItem],
          color: '#EEEEEE',
        },
        ...items,
      ];
    }

    setItems(newItems);
  };

  return (
    <>
      <Sidebar
        isFormOpen={isFormOpen}
        toggleForm={toggleForm}
        addItem={addItem}
      />
      <Main items={items} />
    </>
  );
};

export default App;
