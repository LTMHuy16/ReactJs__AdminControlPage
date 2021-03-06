import React from 'react';

import { Link } from 'react-router-dom';

import Dropdown from '../dropdown/Dropdown';

import notifications from '../../assets/JsonData/notification.json';

import userMenu from '../../assets/JsonData/user_menus.json';

import userIcon from '../../assets/images/userIcon.png';

import './topnav.css'


const currentUser = {
  display__name: 'Minh Huy',
  image: userIcon
}

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
)



const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={currentUser.image} alt="" />
    </div>
    <div className="topnav__right-user__name">
      {currentUser.display__name}
    </div>
  </div>
)


const renderUserMenu = (item, index) => (
  <Link to='/' key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
)



const TopNav = () => {
  return (
    <div className='topnav'>
      <div className="topnav__search">
        <input type="text" placeholder='Search here ...' />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown 
            customToggle={() => renderUserToggle(currentUser)}
            contentData={userMenu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        <div className="topnav__right-item">
          <Dropdown 
            icon='bx bx-bell'
            badge='5'
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to='/'>View All</Link>}
          />
        </div>
        <div className="topnav__right-item">
          <Dropdown />
        </div>
      </div>
    </div>
  )
};

export default TopNav;
