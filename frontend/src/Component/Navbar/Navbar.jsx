import React, { useState, useEffect } from 'react';
import style from './Navbar.module.css';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginModal from '../Login/Login'; // Import the LoginModal component
import logo from '../../Assets/logo.png'
import Sidebar from '../Sidebar/Sidebar'; // Import the Sidebar component

import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to check if the user is logged in
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (token && userId) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const pathname = location.pathname;
    switch (pathname) {
      case '/':
        setActiveIndex(0);
        break;
      case '/about':
        setActiveIndex(1);
        break;
      case '/security':
        setActiveIndex(2);
        break;
      case '/partner':
        setActiveIndex(3);
        break;
      case '/blog':
        setActiveIndex(4);
        break;
      case '/contact':
        setActiveIndex(5);
        break;
      default:
        setActiveIndex(-1);
        break;
    }
  }, [location.pathname]);

  const handleItemClick = (index) => {
    if (index === 2 || index === 6) { // Handle click for "Our Solutions" and its dropdown items
      setActiveIndex(activeIndex === index ? -1 : index);
    } else {
      setActiveIndex(index);
    }

    switch (index) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/about');
        break;
      case 3:
        navigate('/partner');
        break;
      case 4:
        navigate('/blog');
        break;
      case 5:
        navigate('/contact');
        break;
      case 7: 
        navigate('/security');
        break;
      case 8: 
        navigate('/training');
        break;
      default:
        break;
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={style.nav}>
      <h2 className={style.h2} onClick={() => navigate('/')}>
        <img className={style.logo} src={logo} alt="" />
      </h2>

      <ul className={style.Navlist}>
        <li
          className={activeIndex === 0 ? style.active : ''}
          onClick={() => handleItemClick(0)}
        >
          Home
        </li>
        <li
          className={activeIndex === 1 ? style.active : ''}
          onClick={() => handleItemClick(1)}
        >
          About Us
        </li>
        <li
          className={activeIndex === 6 ? style.activeDropdown : ''}
          onClick={() => handleItemClick(6)}
        >
          Our Solutions
          <MdOutlineKeyboardArrowDown className={style.arrowIcon} />
          {activeIndex === 6 && (
            <ul className={style.dropdown}>
              
              <li onClick={() => handleItemClick(7)}>Services Unit</li>

              {/* <li onClick={() => handleItemClick(8)}>Training Unit</li> */}

            </ul>
          )}
        </li>
        <li
          className={activeIndex === 3 ? style.active : ''}
          onClick={() => handleItemClick(3)}
        >
          Partners
        </li>
        <li
          className={activeIndex === 4 ? style.active : ''}
          onClick={() => handleItemClick(4)}
        >
          Our Blog
        </li>
        <li
          className={activeIndex === 5 ? style.active : ''}
          onClick={() => handleItemClick(5)}
        >
          Contact Us
        </li>
        <li
          className={style.hum}
          onClick={toggleSidebar} // Toggle sidebar on click
        >
          <RxHamburgerMenu />
        </li>

        <li>
          {isLoggedIn ? (
            <div className={style.loginButton} onClick={() => navigate('/blogs')}>Dashboard</div>
          ) : (
            <div className={style.loginButton} onClick={toggleModal}>Login</div>
          )}
        </li>
        
      </ul>

      {showModal && <LoginModal onClose={toggleModal} />}
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={toggleSidebar} /> {/* Pass sidebar state */}
      <ToastContainer />
    </div>
  );
}

export default Navbar;
