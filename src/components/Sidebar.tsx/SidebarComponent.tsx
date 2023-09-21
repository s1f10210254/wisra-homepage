// Sidebar.tsx
import React from 'react';
import styles from './Sidebar.module.css';

interface SidebarProps {
  selectedItem: any;
  setSelectedItem: (item: any) => void;
}
interface ItemData {
    name: string;

    description: string;
  }

  const itemData: ItemData[] = [
    {
      name: 'INDEX',

      description: 'INDEX',
    },
    {
      name: 'USE WISRA',

      description: 'USE WISRA',
    },
    {
      name: '-LED',

      description: 'LED',
    },
    {
      name: '-SERVO',

      description: 'SERVO',
    },
  ];
  
const Sidebar: React.FC<SidebarProps> = ({ selectedItem, setSelectedItem }) => {
  return (
    <aside className={styles.sidebar}>
      {itemData.map((item) => (
        <div
          key={item.name}
          className={`${styles.sidebarItem} ${selectedItem.name === item.name ? 'active' : ''}`}
          onClick={() => setSelectedItem(item)}
        >
          {item.name}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
