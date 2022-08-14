import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
    >
      Home
    </NavLink>

    <NavLink
      to="/contacts"
      className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
