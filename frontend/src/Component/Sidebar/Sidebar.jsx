import React, { useState, useEffect } from "react";
import style from "./Sidebar.module.css";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import LoginModal from '../Login/Login';

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  const navigate = useNavigate();
  const [submenus, setSubmenus] = useState({
    Recommendations: false,
    News: false,
    Gaming: false,
    Browse: false,
    More: false,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleSubmenu = (menu) => {
    setSubmenus((prev) => {
      const updatedSubmenus = Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === menu ? !prev[key] : false;
        return acc;
      }, {});
      return updatedSubmenus;
    });
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (token && userId) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className={`${style.sidebar} ${isSidebarOpen ? style.open : ""}`}>
        {isSidebarOpen && (
          <div className={style.close} onClick={closeSidebar}>
            <ImCross />
          </div>
        )}
        <h2 className={`${style.mainMenu} text-white-100  text-xl`}>Main Menu</h2>
        <hr className={style.line} />

        <ul className={style.sidebarMenu}>

          <li className={style.li} onClick={() => navigate('/')}>
            Home
          </li>

          <hr className={style.line} />

          <li onClick={() => navigate('/about')}>
            About Us

          </li>

          <hr className={style.line} />

          <li onClick={() => toggleSubmenu("Gaming")}>
            Our Solution
            <span
              className={`${style.arrow} ${submenus.Gaming ? style.rotateArrow : ""
                }`}
            >
              +
            </span>

            <ul
              className={`${style.submenu} ${submenus.Gaming ? style.open : ""
                }`}
            >
              <li
                onClick={() => navigate('/security')}
              >
                Security Unit
              </li>

              <li
                onClick={() => navigate('/training')}
              >
                Training Unit
              </li>
            </ul>
          </li>

          <hr className={style.line} />

          <li onClick={() => navigate('/partner')}>
            Partners


          </li>

          <hr className={style.line} />

          <li onClick={() => navigate('/blog')}>
            Our Blog


          </li>

          <hr className={style.line} />

          <li onClick={() => navigate('/contact')}>
            Contact Us

          </li>

          <li>
            {isLoggedIn ? (
              <div className={style.loginButton} onClick={() => navigate('/blogs')}>Dashboard</div>
            ) : (
              <div className={style.loginButton} onClick={toggleModal}>Login</div>
            )}
          </li>

          {showModal && <LoginModal onClose={toggleModal} />}

        </ul>
      </div>
    </>
  );
};

export default Sidebar;
