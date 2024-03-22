import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import NavigationLinks1 from './navigation-links1'

const Navbar = (props) => {
  return (
    <>
      <div className={`navbar-container ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="navbar-navbar">
          <div className="navbar-container1"></div>
          <div className="navbar-container2">
            <header data-role="Header" className="navbar-header">
              <Link href="/">
                <a className="navbar-link">
                  <img
                    alt={props.logoAlt}
                    src={props.logoSrc}
                    className="navbar-logo"
                  />
                </a>
              </Link>
              <div className="navbar-nav">
                <NavigationLinks1 rootClassName="rootClassName15"></NavigationLinks1>
              </div>
              <div data-role="BurgerMenu" className="navbar-burger-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div data-role="MobileMenu" className="navbar-mobile-menu">
                <div className="navbar-nav1">
                  <div className="navbar-container3">
                    <img
                      alt={props.imageAlt}
                      src={props.imageSrc}
                      className="navbar-image"
                    />
                    <div
                      data-role="CloseMobileMenu"
                      className="navbar-close-mobile-menu"
                    >
                      <svg viewBox="0 0 1024 1024" className="navbar-icon02">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <NavigationLinks1 rootClassName="rootClassName16"></NavigationLinks1>
                </div>
                <div>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="navbar-icon04"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="navbar-icon06"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="navbar-icon08"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </header>
          </div>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="navbar-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="navbar-nav2"
            >
              <button className="navbar-button button-clean button">
                {props.button}
              </button>
              <button className="navbar-button1 button-clean button">
                {props.button1}
              </button>
              <button className="navbar-button2 button-clean button">
                {props.button2}
              </button>
              <button className="navbar-button3 button-clean button">
                {props.button3}
              </button>
              <button className="navbar-button4 button-clean button">
                {props.button4}
              </button>
            </nav>
          </div>
          <div
            data-thq="thq-navbar-btn-group"
            className="navbar-btn-group"
          ></div>
          <div data-thq="thq-burger-menu" className="navbar-burger-menu1"></div>
          <div data-thq="thq-mobile-menu" className="navbar-mobile-menu1">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="navbar-nav3"
            >
              <div className="navbar-container4">
                <span className="navbar-logo1">{props.logo}</span>
                <div data-thq="thq-close-menu" className="navbar-menu-close">
                  <svg viewBox="0 0 1024 1024" className="navbar-icon10">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="navbar-nav4"
              >
                <span className="navbar-text">{props.text}</span>
                <span className="navbar-text1">{props.text1}</span>
                <span className="navbar-text2">{props.text2}</span>
                <span className="navbar-text3">{props.text3}</span>
                <span className="navbar-text4">{props.text4}</span>
              </nav>
              <div className="navbar-container5">
                <button className="navbar-login button">{props.login}</button>
                <button className="button">{props.register}</button>
              </div>
            </div>
            <div className="navbar-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="navbar-icon12"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="navbar-icon14"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="navbar-icon16"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navbar-container {
            width: 1166px;
            display: flex;
            position: relative;
          }
          .navbar-navbar {
            width: 1200px;
            height: 178px;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: center;
            justify-content: space-between;
          }
          .navbar-container1 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .navbar-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .navbar-header {
            width: 100%;
            height: 176px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            animation-name: fadeIn;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .navbar-link {
            display: contents;
          }
          .navbar-logo {
            width: 160px;
            height: 171px;
            object-fit: cover;
            text-decoration: none;
          }
          .navbar-nav {
            display: flex;
          }
          .navbar-burger-menu {
            display: none;
          }
          .navbar-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .navbar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .navbar-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-container3 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-image {
            height: 2rem;
          }
          .navbar-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-desktop-menu {
            display: none;
          }
          .navbar-nav2 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            color: #ffffff;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navbar-button {
            color: rgb(255, 255, 255);
          }
          .navbar-button1 {
            color: rgb(255, 255, 255);
          }
          .navbar-button2 {
            color: rgb(255, 255, 255);
          }
          .navbar-button3 {
            color: rgb(255, 255, 255);
          }
          .navbar-button4 {
            color: rgb(255, 255, 255);
          }
          .navbar-btn-group {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-burger-menu1 {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-mobile-menu1 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .navbar-nav3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-container4 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-logo1 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .navbar-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-nav4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-text1 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-text2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-text3 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-text4 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-container5 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .navbar-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-icon-group1 {
            display: flex;
          }
          .navbar-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 1200px) {
            .navbar-desktop-menu {
              display: none;
            }
            .navbar-burger-menu1 {
              display: flex;
            }
          }
          @media (max-width: 991px) {
            .navbar-container {
              width: 972px;
            }
            .navbar-navbar {
              width: 945px;
              height: 178px;
            }
            .navbar-container2 {
              width: 921px;
            }
            .navbar-header {
              width: 100%;
            }
            .navbar-icon {
              display: flex;
            }
            .navbar-btn-group {
              display: none;
            }
            .navbar-logo1 {
              color: #000000;
            }
          }
          @media (max-width: 767px) {
            .navbar-container {
              width: 746px;
            }
            .navbar-navbar {
              width: 767px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navbar-header {
              height: 172px;
              padding: var(--dl-space-space-twounits);
            }
            .navbar-logo {
              width: 114px;
              height: 101px;
            }
            .navbar-nav {
              display: none;
            }
            .navbar-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .navbar-icon {
              fill: #d9d9d9;
              width: var(--dl-size-size-medium);
              height: var(--dl-size-size-medium);
            }
          }
          @media (max-width: 479px) {
            .navbar-container {
              width: 479px;
            }
            .navbar-navbar {
              padding: var(--dl-space-space-unit);
            }
            .navbar-container2 {
              width: 479px;
            }
            .navbar-header {
              width: 469px;
              padding: var(--dl-space-space-unit);
            }
            .navbar-logo {
              width: 133px;
              height: 145px;
            }
            .navbar-icon {
              fill: #d9d9d9;
              width: var(--dl-size-size-medium);
              height: var(--dl-size-size-medium);
            }
            .navbar-mobile-menu {
              padding: 16px;
            }
            .navbar-mobile-menu1 {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  button4: 'Blog',
  logoAlt: 'image',
  text2: 'Pricing',
  logo: 'Character',
  button2: 'Pricing',
  register: 'Register',
  button: 'About',
  text4: 'Blog',
  logoSrc: '/gm%20attorneys%20logo-200h.jpeg',
  rootClassName: '',
  login: 'Login',
  text3: 'Team',
  text1: 'Features',
  text: 'About',
  imageAlt: 'image',
  button1: 'Features',
  button3: 'Team',
  imageSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
}

Navbar.propTypes = {
  button4: PropTypes.string,
  logoAlt: PropTypes.string,
  text2: PropTypes.string,
  logo: PropTypes.string,
  button2: PropTypes.string,
  register: PropTypes.string,
  button: PropTypes.string,
  text4: PropTypes.string,
  logoSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  login: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
  button1: PropTypes.string,
  button3: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Navbar
