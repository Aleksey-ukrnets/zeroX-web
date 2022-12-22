import { useState } from 'react';
import css from './style.module.scss';
import cn from 'classnames'

export default function Tabs({ tabs = [], onTabChange, initialTab }) {

  const [activeTab, setActiveTab] = useState(initialTab || 0);

  const handleTabChange = (i) => {
    setActiveTab(i);
    onTabChange?.(i);
  };
  
  return (
    <div className={css.Tabs}>
      <div className={css.tabs}>
        {tabs.map((el, index) => {
          return (
            <div
              key={el.id}
              className={cn(css.tab, activeTab === index && css.active)}
              onClick={() => handleTabChange(index)}
            >
              {el?.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
