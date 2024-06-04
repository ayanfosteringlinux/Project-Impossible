import React, { useState } from 'react';
import { InternOptions } from "../constants/internOptions";

interface Item {
  id: number;
  name: string;
}

const Foxian: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItemName, setNewItemName] = useState<string>('');
  const [editItemId, setEditItemId] = useState<number | null>(null);
  const [editedItemName, setEditedItemName] = useState<string>('');

  const handleAddItem = () => {
    if (newItemName.trim() !== '') {
      const newItem: Item = {
        id: Date.now(),
        name: newItemName.trim()
      };
      setItems([...items, newItem]);
      setNewItemName('');
      updateInternOptions(newItemName.trim()); // Call updateInternOptions
    }
  };

  const handleDeleteItem = (id: number) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  const handleEditItem = (id: number) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, name: editedItemName };
      }
      return item;
    });
    setItems(updatedItems);
    setEditItemId(null); // Exit editing mode
  };

  const updateInternOptions = (newName: string) => {
    // Function to update InternOptions based on the newName
    // You need to implement this function based on your requirements
  };

  return (
    <div>
      <h1>Foxian Management</h1>
      <div>
        <input
          type="text"
          value={newItemName}
          onChange={e => setNewItemName(e.target.value)}
          placeholder="Enter foxian name"
        />
        <button onClick={handleAddItem}>Add Foxian</button>
      </div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <div>
              {editItemId === item.id ? (
                <>
                  <input
                    type="text"
                    value={editedItemName}
                    onChange={e => setEditedItemName(e.target.value)}
                    onBlur={() => handleEditItem(item.id)}
                  />
                  <button onClick={() => handleEditItem(item.id)}>Save</button>
                </>
              ) : (
                <>
                  {item.name}
                  <button onClick={() => {
                    setEditedItemName(item.name);
                    setEditItemId(item.id);
                  }}>Edit</button>
                  <button onClick={() => handleDeleteItem(item.id)} style={{ marginLeft: '5px' }}>Delete</button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Foxian;

