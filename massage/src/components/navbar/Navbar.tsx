import './style/Navbar.scss';
import Main_img from '../../assets/img/hederImg.jpg';
import { NavLink, Outlet } from 'react-router-dom';

function Navbar(): JSX.Element {
  return (
    <div className="navbar_container">
      <div className="navbar_block">
        <div className="navbar_block-content">
          <p className="navbar_button">Услуги</p>
          <p className="navbar_button">Акции</p>
          <p className="navbar_button">Контакты</p>
        </div>
        {/* <img className="main_img" src={Main_img} alt="" />   */}
      </div>
      <div className="container">
        <div className="text">
          <p>
            Вы можете записаться онлайн прямо сейчас, просто оставьте заявку и
            мы перезвоним вам
          </p>
          <a href='https://yandex.ru/business/widget/request/company/238287830447'>
            <button>Оставить заявку</button>
          </a>
        </div>
        <img className="img_heder" src={Main_img} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
