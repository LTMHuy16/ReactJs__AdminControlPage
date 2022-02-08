import React from 'react';

import { Link, useParams } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import sidebarItem from '../../assets/JsonData/sidebar_routes.json';


import './sidebar.css'

const SidebarItem = props => {

  const active = props.active ? 'active' : ''

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  )
}


const Sidebar = props => {

  let params = useParams();
  
  const activeItem =  sidebarItem.findIndex(item => item.route === ('/' + params['*']))


  return (
    <div className='sidebar'>
      <div className="sidebar__logo">
        <img src={logo} alt="company logo" />
      </div>

      {sidebarItem?.map((item, i) => (
        <Link to={item.route} key={i}>
          <SidebarItem 
            title={item.display_name} 
            icon={item.icon}
            active={i === activeItem}
          />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
