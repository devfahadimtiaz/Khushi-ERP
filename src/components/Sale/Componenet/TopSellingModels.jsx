import React from 'react';
import { TrendingUp } from 'lucide-react';
import styles from './TopSellingModels.module.css';

const TopSellingModels = ( {models}) => {

  return (
    <div className={styles.container}>
      {models.map((model, index) => (
        <div key={index} className={styles.card}>
          <div>
            <h4 className={styles.title}>{model.make} {model.model}</h4>
            <p className={styles.subtitle}>{model.unitsSold} units sold</p>
          </div>
          <div className="flex items-center gap-2">
            <span className={`${styles.growth} ${model.colorClass}`}>{model.growth}</span>
            <TrendingUp className={`${styles.growthIcon} ${model.colorClass}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopSellingModels;
