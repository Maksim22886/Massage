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
}

export const MassagePrice = () => {
    const cardsData: Record<string, Card> = {
        card1: {
          cardImg: Sertificate,
          title: 'Массаж тела',
          duration1: '45 мин',
          price1: 3100,
          duration2: '60 мин',
          price2: 4000,
          duration3: '90 мин',
          price3: 5200,
          benefits: [
            'Омоложение',
            'Подтяжка',
            'Другое',
            'Не другое',
            'nrfejknfq',
            'fenkqhfeqf',
          ],
        },
        card2: {
          cardImg: Sertificate,
          title: 'Массаж лица',
          duration1: '30 мин',
          price1: 2700,
          duration2: '45 мин',
          price2: 3200,
          duration3: '60 мин',
          price3: 4000,
          benefits: ['Омоложение', 'Подтяжка'],
        },
        card3: {
          cardImg: Sertificate,
          title: 'Обертывание',
          duration1: '60 мин',
          price1: 3500,
        },
        card4: {
          cardImg: Sertificate,
          title: 'Усиленный эффект',
          duration1: '90 мин',
          price1: 5000,
        },
      };
    
      const renderDurationPrice = (
        duration: string | undefined,
        price: number | undefined,
      ) =>
        duration &&
        price !== undefined && (
          <div>
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
              {renderDurationPrice(card.duration1, card.price1 - 500)}
              {card.duration2 &&
                card.price2 !== undefined &&
                renderDurationPrice(card.duration2, card.price2 - 500)}
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
        </div>
      ))}
    </div>
  );
};
