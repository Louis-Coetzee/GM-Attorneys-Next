import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <Link href="/about">
          <a className="navigation-links-link">{props.about}</a>
        </Link>
        <Link href="/">
          <a className="navigation-links-link1">{props.home}</a>
        </Link>
        <span className="navigation-links-text">{props.contact}</span>
        <span className="navigation-links-text1">{props.team}</span>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link {
            color: #ffffff;
            text-decoration: none;
          }
          .navigation-links-link1 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links-text {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links-text1 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }

          .navigation-links-root-class-name15 {
            align-self: stretch;
          }
          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  home: 'Home',
  rootClassName: '',
  about: 'About',
  team: 'Team',
  contact: 'Contact',
}

NavigationLinks.propTypes = {
  home: PropTypes.string,
  rootClassName: PropTypes.string,
  about: PropTypes.string,
  team: PropTypes.string,
  contact: PropTypes.string,
}

export default NavigationLinks
