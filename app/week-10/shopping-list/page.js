import React, { useState, useEffect } from 'react';
import { getItems, addItem } from '../_services/shopping-list-service';

export default function ShoppingList({ user }) {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', quantity: 1, category: '' });

    useEffect(() => {
        if (user?.uid) {
            loadItems();
        }
    }, [user?.uid]);

    async function loadItems() {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
    }

    async function handleAddItem() {
        const itemId = await addItem(user.uid, newItem);
        setItems([...items, { id: itemId, ...newItem }]);
        setNewItem({ name: '', quantity: 1, category: '' });
    }

    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} ({item.category})
                    </li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    placeholder="Item Name"
                />
                <input
                    type="number"
                    value={newItem.quantity}
                    onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) || 1 })}
                    placeholder="Quantity"
                />
                <input
                    type="text"
                    value={newItem.category}
                    onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                    placeholder="Category"
                />
                <button onClick={handleAddItem}>Add Item</button>
            </div>
        </div>
    );
}

