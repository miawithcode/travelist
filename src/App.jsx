import { useEffect, useState } from 'react';
import { emptyItems, initialItems } from './lib/constants';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

const App = () => {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem('items')) || initialItems
  );

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
    const newItems = items.map((category) => {
      const newCategoryItems = category.categoryItems.filter(
        (item) => item.id !== id
      );
      return { ...category, categoryItems: newCategoryItems };
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
    const newItems = items.map((category) => {
      const newCategoryItems = category.categoryItems.map((item) => {
        return {
          ...item,
          isPacked: true,
        };
      });
      return { ...category, categoryItems: newCategoryItems };
    });
    setItems(newItems);
  };

  const markAllAsIncomplete = () => {
    const newItems = items.map((category) => {
      const newCategoryItems = category.categoryItems.map((item) => {
        return {
          ...item,
          isPacked: false,
        };
      });
      return { ...category, categoryItems: newCategoryItems };
    });
    setItems(newItems);
  };

  const resetToInitial = () => {
    setItems(initialItems);
  };

  const removeAllItems = () => {
    setItems(emptyItems);
  };

  const calculateTotalNumberOfItems = (items) => {
    return items.reduce((accumulator, category) => {
      return accumulator + category.categoryItems.length;
    }, 0);
  };

  const calculateNumbersOfItemsPacked = (items) => {
    return items.reduce((accumulator, category) => {
      return (
        accumulator +
        category.categoryItems.filter((item) => item.isPacked).length
      );
    }, 0);
  };

  // const categories = items.map((item) => {
  //   return item.category.map((category) => {
  //     return { label: category, value: category };
  //   });
  // });

  const categories = items
    .map((item) => item.category)
    .map((category) => {
      return { label: category, value: category };
    });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <>
      <Sidebar
        addItem={addItem}
        markAllAsComplete={markAllAsComplete}
        markAllAsIncomplete={markAllAsIncomplete}
        resetToInitial={resetToInitial}
        removeAllItems={removeAllItems}
      />
      <Main
        items={items}
        addItem={addItem}
        deleteItem={deleteItem}
        toggleItem={toggleItem}
        totalNumberOfItems={calculateTotalNumberOfItems(items)}
        numbersOfItemsPacked={calculateNumbersOfItemsPacked(items)}
        categories={categories}
      />
    </>
  );
};

export default App;
