import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(['all', 
          ...new Set(items.map(item => item.category))]);
  const filterItems = (category) => {
    /* if category is 'all' return all items else item belonging
        to that category
     */
    category === 'all' ? setMenuItems(items) : 
          setMenuItems(items.filter(item => item.category === category))
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
