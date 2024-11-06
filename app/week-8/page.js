'use client';

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(Array.isArray(itemsData) ? itemsData : []);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    if (newItem && typeof newItem === 'object') {
      setItems((prevItems) => [...prevItems, newItem]);
    } else {
      console.error("Invalid item added:", newItem);
    }
  };

  const handleItemSelect = (name) => {
    const cleanedName = name
      .split(',')[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '')
      .trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="p-6 flex space-x-4">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
