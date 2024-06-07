import { create } from 'zustand';
import { emptyItems, initialItems } from '../lib/constants';
import { persist } from 'zustand/middleware';

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      addItem: (category, newItemLabel) => {
        set((state) => {
          const newItem = {
            id: new Date().getTime(),
            label: newItemLabel,
            isPacked: false,
          };

          const isCategoryExist = state.items.some(
            (item) => item.category === category
          );

          let newItems;

          if (isCategoryExist) {
            newItems = state.items.map((item) => {
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
              ...state.items,
              {
                category,
                categoryItems: [newItem],
                color: '#EEEEEE',
              },
            ];
          }
          return { items: newItems };
        });
      },
      deleteItem: (id) => {
        set((state) => {
          const newItems = state.items.map((category) => {
            const newCategoryItems = category.categoryItems.filter(
              (item) => item.id !== id
            );
            return { ...category, categoryItems: newCategoryItems };
          });
          return { items: newItems };
        });
      },
      toggleItem: (id) => {
        set((state) => {
          const newItems = state.items.map((category) => {
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
          return { items: newItems };
        });
      },
      markAllAsComplete: () => {
        set((state) => {
          const newItems = state.items.map((category) => {
            const newCategoryItems = category.categoryItems.map((item) => {
              return {
                ...item,
                isPacked: true,
              };
            });
            return { ...category, categoryItems: newCategoryItems };
          });
          return { items: newItems };
        });
      },
      markAllAsIncomplete: () => {
        set((state) => {
          const newItems = state.items.map((category) => {
            const newCategoryItems = category.categoryItems.map((item) => {
              return {
                ...item,
                isPacked: false,
              };
            });
            return { ...category, categoryItems: newCategoryItems };
          });
          return { items: newItems };
        });
      },
      resetToInitial: () => {
        set(() => ({ items: initialItems }));
      },
      removeAllItems: () => {
        set(() => ({ items: emptyItems }));
      },
      calculateTotalNumberOfItems: (items) => {
        return items.reduce((accumulator, category) => {
          return accumulator + category.categoryItems.length;
        }, 0);
      },
      calculateNumbersOfItemsPacked: (items) => {
        return items.reduce((accumulator, category) => {
          return (
            accumulator +
            category.categoryItems.filter((item) => item.isPacked).length
          );
        }, 0);
      },
    }),
    { name: 'items' }
  )
);
