import './style/Footer.scss';
import Maps from '../maps/Maps';
import TelegramIcon from '../../assets/img/telegram-icon2.svg';
import InstagramIcon from '../../assets/img/icon-instagram.svg';
import VkIcon from '../../assets/img/icon-vk2.svg';
import { Network } from './Network';
import { ReactComponent as Sculpt } from '../../assets/img/sculpOrig.svg';

function Footer(): JSX.Element {
  return (
    <>
      <Maps />
      <div className="footer">
        <div className="footer_section">
          <div className="block_title">
            <Sculpt />
          </div>
        </div>
        <div className="footer_section">
          <h4>Контакты</h4>
          <div className="footer_section-info">
            <div>
              <p>Email: info@example.com</p>
            </div>
            <div className="phone_block">
              <p>Телефон: </p>
              <a href="tel:+79123896810">+7 (982)934-80-77</a>
            </div>
            <iframe
              src="https://yandex.ru/sprav/widget/rating-badge/238287830447?type=rating&theme=dark"
              width="150"
              height="50"
              // frameborder="0"
            ></iframe>
          </div>
        </div>
        <div className="footer_section">
          <h4>Социальные сети</h4>
          <div className="block_network">
            <Network
              title="Telegram"
              img={TelegramIcon}
              link="https://t.me/massagintumen"
            />
            <Network
              title="Instagram"
              img={InstagramIcon}
              link="https://www.instagram.com/massagintumen"
            />
            <Network
              title="ВКонтакте"
              img={VkIcon}
              link="https://vk.com/massagintumen"
            />
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p>&copy; {new Date().getFullYear()} Flowbite™. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;