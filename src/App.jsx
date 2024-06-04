import { useEffect, useState } from 'react';
import { initialItems } from './lib/constants';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem('items')) || initialItems
  );

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
        ...items,
        {
          category,
          categoryItems: [newItem],
          color: '#EEEEEE',
        },
      ];
    }

    setItems(newItems);
  };

  const deleteItem = (id) => {
    const newItems = items.map((item) => {
      const newCategoryItems = item.categoryItems.filter(
        (item) => item.id !== id
      );
      return { ...item, categoryItems: newCategoryItems };
    });
    setItems(newItems);
  };

  const toggleItem = (id) => {
    const newItems = items.map((category) => {
      const newCategoryItems = category.categoryItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isPacked: !item.isPacked,
          };
        }
        return item;
      });
      return {
        ...category,
        categoryItems: newCategoryItems,
      };
    });
    setItems(newItems);
  };

  const markAllAsComplete = () => {
    const newItems = items.map((item) => {
      const newCategoryItems = item.categoryItems.map((categoryItem) => {
        return {
          ...categoryItem,
          isPacked: true,
        };
      });
      return { ...item, categoryItems: newCategoryItems };
    });
    setItems(newItems);
  };

  const markAllAsIncomplete = () => {
    const newItems = items.map((item) => {
      const newCategoryItems = item.categoryItems.map((categoryItem) => {
        return {
          ...categoryItem,
          isPacked: false,
        };
      });
      return { ...item, categoryItems: newCategoryItems };
    });
    setItems(newItems);
    console.log(newItems);
  };

  const resetToInitial = () => {
    setItems(initialItems);
  };

  const removeAllItems = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <>
      <Sidebar
        isFormOpen={isFormOpen}
        toggleForm={toggleForm}
        addItem={addItem}
        markAllAsComplete={markAllAsComplete}
        markAllAsIncomplete={markAllAsIncomplete}
        resetToInitial={resetToInitial}
        removeAllItems={removeAllItems}
      />
      <Main items={items} deleteItem={deleteItem} toggleItem={toggleItem} />
    </>
  );
};

export default App;
