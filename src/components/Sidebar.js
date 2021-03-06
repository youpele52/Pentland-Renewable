import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import company from '../assets/img/company.png'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import { useSidebarContext } from '../context/sidebar_context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarContext()

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <img src={company} alt='company' className='logo' />
          <button className='close-btn' type='button' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            )
          })}{' '}
          <div className='' onClick={closeSidebar}></div>
          <li></li>
        </ul>
      </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  text-align: center;

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    // color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    // color: var(--clr-red-dark);
    color: var(--clr-the-green);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
    color: var(--clr-the-green);
  }
  .logo {
    justify-self: center;
    height: 45px;
    // border-radius: 50%;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-normal-text);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    // background: var(--clr-grey-10);
    color: var(--clr-grey-2);
    color: var(--clr-the-green);
    color: greenyellow;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    background: var(--clr-sidebar);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
