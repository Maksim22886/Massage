import styles from './style/PriceList.module.scss';
import Sertificate from '../../assets/img/classic.jpg';

interface Card {
  cardImg: string;
  title: string;
  duration1: string;
  price1: number;
  duration2?: string;
  price2?: number;
  duration3?: string;
  price3?: number;
  duration4?: string;
  price5?: number;
  benefits?: string[];
  description?: string;
}

export const ProgramPrice = () => {
  const cardsData: Record<string, Card> = {
    card1: {
      cardImg: Sertificate,
      title: 'Массаж тела 5 + 5',
      duration1: '90 мин',
      price1: 15000,
      benefits: ['Омоложение', 'Подтяжка', 'Другое'],
      description:
        '5 сеансов коррекции фигуры по 60 минут 5 жиросжигающих и/или лифтинг-обертываний',
    },
    card2: {
      cardImg: Sertificate,
      title: 'Массаж лица 10 + 10',
      duration1: '90 мин',
      price1: 30000,
      benefits: ['Омоложение', 'Подтяжка'],
    },
    card3: {
      cardImg: Sertificate,
      title: 'Обертывание 2 + 2',
      duration1: '60 мин',
      price1: 3500,
    },
  };

  const renderDurationPrice = (
    duration: string | undefined,
    price: number | undefined,
  ) =>
    duration &&
    price !== undefined && (
      <div className={styles.price}>
        {duration} .... {`${price}руб`}
      </div>
    );
  return (
    <div className={styles.cardContainer}>
      {Object.entries(cardsData).map(([key, card]) => (
        <div
          key={key}
          className={styles.cardImg}
          style={{ backgroundImage: `url(${card.cardImg})` }}
        >
          <h2>{card.title}</h2>
          <div className={styles.desc}>
            <div className={styles.descriptions}>
              {renderDurationPrice(card.duration1, card.price1)}
              {renderDurationPrice(card.duration2, card.price2)}
              {renderDurationPrice(card.duration3, card.price3)}
            </div>
            <div className={styles.descriptions}>
              <div>Для пенсионеров</div>
              {renderDurationPrice(card.duration1, card.price1 - 2000)}
              {card.duration2 &&
                card.price2 !== undefined &&
                renderDurationPrice(card.duration2, card.price2 - 5000)}
              {card.duration3 &&
                card.price3 !== undefined &&
                renderDurationPrice(card.duration3, card.price3 - 500)}
            </div>
          </div>
          <div className={styles.benefits}>
            {card.benefits?.map((benefit, index) => (
              <div key={index} className={styles.block_benifit}>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
          {card.description && (
            <div className={styles.program_block}>
              <div className={styles.program}>Программа:</div>
              <div className={styles.description}>
                5 сеансов коррекции фигуры по 60 минут 5 жиросжигающих и/или
                лифтинг-обертываний
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
