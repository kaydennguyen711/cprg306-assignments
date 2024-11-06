'use client';
import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a unique ID for each new item
    const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Create a new item object with converted quantity and unique ID
    const item = { id, name, quantity: Number(quantity), category };

    // Add the new item to the list
    onAddItem(item);

    // Reset form fields
    setName('');
    setQuantity('');
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Item Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          min="1"
        />
      </label>
      <label>
        Category:
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="household">Household</option>
          {/* Add other categories as needed */}
        </select>
      </label>
      <button type="submit">Add Item</button>
    </form>
  );
}


