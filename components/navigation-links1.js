import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks1 = (props) => {
  return (
    <>
      <nav className={`navigation-links1-nav ${props.rootClassName} `}>
        <Link href="/">
          <a className="navigation-links1-link">{props.home}</a>
        </Link>
        <Link href="/about">
          <a className="navigation-links1-link1">{props.about}</a>
        </Link>
        <a href="#team" className="navigation-links1-link2">
          {props.team}
        </a>
        <a href="#contact" className="navigation-links1-link3">
          {props.contact}
        </a>
      </nav>
      <style jsx>
        {`
          .navigation-links1-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links1-link {
            color: #ffffff;
            font-size: 20px;
            text-decoration: none;
          }
          .navigation-links1-link1 {
            color: #ffffff;
            font-size: 20px;
            padding-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links1-link2 {
            color: #ffffff;
            font-size: 20px;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links1-link3 {
            color: #ffffff;
            font-size: 20px;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }

          @media (max-width: 991px) {
            .navigation-links1-link {
              font-size: 20px;
            }
            .navigation-links1-link1 {
              font-size: 20px;
            }
            .navigation-links1-link2 {
              font-size: 20px;
            }
            .navigation-links1-link3 {
              font-size: 20px;
            }
          }
          @media (max-width: 767px) {
            .navigation-links1-nav {
              width: 636px;
              align-items: flex-end;
              flex-direction: column;
            }
            .navigation-links1-link {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-link1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .navigation-links1-nav {
              width: 362px;
              align-items: flex-end;
              flex-direction: column;
              justify-content: space-between;
            }
            .navigation-links1-link1 {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks1.defaultProps = {
  rootClassName: '',
  contact: 'Contact',
  home: 'Home',
  team: 'Team',
  about: 'About',
}

NavigationLinks1.propTypes = {
  rootClassName: PropTypes.string,
  contact: PropTypes.string,
  home: PropTypes.string,
  team: PropTypes.string,
  about: PropTypes.string,
}

export default NavigationLinks1
