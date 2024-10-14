import styles from './style/MassageTypes.module.scss';
import React from 'react';

type ModalCard = {
  id: number;
  imgSrc: string;
  title: string;
  alt: string;
  description: string;
  benefit?: string[];
  key?: number;
};

type ModalCards = {
  card: ModalCard;
  ref?: any;
};

export const ModalCardComponent: React.FC<ModalCards> = ({ card, ref }) => {
  return (
    <div key={card.id} ref={ref}>
      <img src={card.imgSrc} alt={card.alt} className={styles.modal_image} />
      <div className={styles.block_descriptionCard}>
        <h3 className={styles.title_description}>{card.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: card.description }} />
        <div className={styles.block_benifits}>
          {card.benefit?.map((benefit, index) => (
            <div key={index} className={styles.block_benifit}>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
