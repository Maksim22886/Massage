import { useState } from 'react';
import { MassagePrice } from './MassagePrice';
import { ProgramPrice } from './ProgramPrice';
import styles from './style/PriceList.module.scss';

export const PriceList = () => {
  const [isMassageOpen, setIsMassageOpen] = useState(true);

  const toggleContent = (isMassage: boolean) => {
    setIsMassageOpen(isMassage);
  };

  return (
    <div className={styles.main}>
      <div className={styles.button_block}>
        <button
          type="button"
          className={`${styles.buttonTogle} ${
            isMassageOpen ? styles.active : ''
          }`}
          onClick={() => toggleContent(true)}
        >
          Массаж
        </button>
        <button
          type="button"
          className={`${styles.buttonTogle} ${
            !isMassageOpen ? styles.active : ''
          }`}
          onClick={() => toggleContent(false)}
        >
          Программы
        </button>
      </div>
      <div className={styles.container}>
        <div
          className={`${styles.content} ${
            isMassageOpen ? styles.massageEnter : styles.massageExit
          }`}
        >
          {isMassageOpen && <MassagePrice />}
        </div>
        <div
          className={`${styles.content} ${
            !isMassageOpen ? styles.programEnter : styles.programExit
          }`}
        >
          {!isMassageOpen && <ProgramPrice />}
        </div>
      </div>
    </div>
  );
};
