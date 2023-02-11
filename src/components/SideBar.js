import React from 'react'
import './../css/sidebar.css'

function SideBar(props) {

  const handleCategorySelection = (categoryName) => {
    props.setCategory(categoryName);
  };
  const categories = [...new Set(props.todolist.map(todo => todo.category))];

  console.log(props.todolist)
  return (
    <div className="sidebar">
        <h3>Categories</h3>
        <ul className="ul_list">
          <span >{ props.selectedCategory && <span id="showall" onClick = {() => props.setCategory(null)} >Show All</span> }</span>
          {console.log(categories)}
          {categories.map(category => (
            <li key={category}>
              <div onClick={() => handleCategorySelection(category)}>
                {category}
              </div>
            </li>
          ))}
      </ul>

    </div>
  )
}

export default SideBar