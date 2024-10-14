import './style/Navbar.scss';
import Main_img from '../../assets/img/photo.png';
import { NavLink, Outlet } from 'react-router-dom';

function Navbar(): JSX.Element {
  return (
    <>
      <div className="navbar_block">
        <div className="navbar_block-content">
          <p className="navbar_button">Услуги</p>
          <p className="navbar_button">Акции</p>
          <p className="navbar_button">Контакты</p>
        </div>
        {/* <img className="main_img" src={Main_img} alt="" />   */}
      </div>
    </>
  );
}

export default Navbar;
