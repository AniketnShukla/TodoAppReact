import React, { useState } from 'react';

const categories = [
  {
    id: 1,
    name: 'Work'
  },
  {
    id: 2,
    name: 'Personal'
  },
  {
    id: 3,
    name: 'Shopping'
  }
];

const tasks = [
  {
    id: 1,
    name: 'Write a report',
    category: 1
  },
  {
    id: 2,
    name: 'Buy groceries',
    category: 3
  },
  {
    id: 3,
    name: 'Go for a walk',
    category: 2
  }
];

function Test() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelection = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div>
      <h1>To-Do App</h1>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <button onClick={() => handleCategorySelection(category.id)}>
              {category.name}
            </button>
          </li>
        ))}
      </ul>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => {
          if (selectedCategory === null || task.category === selectedCategory) {
            return (
              <li key={task.id}>{task.name}</li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}

export default Test;