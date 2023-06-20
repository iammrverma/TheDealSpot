import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import './CategoryComponent.css';

const CategoryComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const categoryItems = [
    { id: 1, name: 'Category 1', items: ['Item 1', 'Item 2', 'Item 3'] },
    { id: 2, name: 'Category 2', items: ['Item 4', 'Item 5', 'Item 6'] },
    { id: 3, name: 'Category 3', items: ['Item 7', 'Item 8', 'Item 9'] },
  ];

  const handleDropdownToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="category-component">
      <div className="category-items">
        {categoryItems.map((item, index) => (
          <div className="category-item" key={item.id}>
            <img src={process.env.PUBLIC_URL + `assets/navbar/image${item.id}.png`} alt={item.name} />
            <span onClick={() => handleDropdownToggle(index)}>{item.name}
              <FaAngleDown
                className={`angle-down-icon ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleDropdownToggle(index)}
              />
            </span>
            {activeIndex === index && (
              <ul className="dropdown-list">
                {item.items.map((dropdownItem, i) => (
                  <li key={i}>{dropdownItem}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="rectangular-image">
        <img 
        src={process.env.PUBLIC_URL+`assets/navbar/image4.png`} 
        alt="" />
      </div>
    </div>
  );
};

export default CategoryComponent;
