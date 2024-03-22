import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className={`footer-footer ${props.rootClassName} `}>
        <div className="footer-main">
          <div className="footer-branding">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer-logo"
            />
          </div>
          <div className="footer-container">
            <div className="footer-links">
              <div className="footer-list">
                <h3 className="footer-heading">{props.heading}</h3>
                <div className="footer-items">
                  <Link href="/about">
                    <a className="footer-link1 button-clean button">
                      {props.link}
                    </a>
                  </Link>
                  <a
                    href="#contact"
                    className="footer-link2 button-clean button"
                  >
                    {props.link1}
                  </a>
                </div>
              </div>
              <div className="footer-list1">
                <h3 className="footer-heading1">{props.heading1}</h3>
                <div className="footer-items1">
                  <a href="#team" className="footer-link3 button-clean button">
                    {props.link2}
                  </a>
                  <a
                    href="#services"
                    className="footer-link4 button-clean button"
                  >
                    {props.link3}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="footer-copyright">{props.copyright}</span>
      </footer>
      <style jsx>
        {`
          .footer-footer {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .footer-main {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-branding {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-logo {
            width: 200px;
            object-fit: cover;
          }
          .footer-container {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .footer-links {
            gap: 120px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .footer-list {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-heading {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
          }
          .footer-items {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-link1 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .footer-link2 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .footer-list1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-heading1 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
          }
          .footer-items1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-link3 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .footer-link4 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .footer-copyright {
            color: rgb(255, 255, 255);
            font-size: 12px;
            align-self: center;
          }

          @media (max-width: 767px) {
            .footer-footer {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .footer-main {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .footer-links {
              gap: var(--dl-space-space-fourunits);
              width: 100%;
              justify-content: flex-start;
            }
            .footer-list {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .footer-list1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .footer-main {
              align-self: center;
              align-items: center;
            }
            .footer-list {
              align-items: center;
            }
            .footer-items {
              align-items: center;
            }
            .footer-heading1 {
              align-self: center;
              text-align: center;
            }
            .footer-items1 {
              align-items: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  link1: 'Contact us',
  linkTwitter: 'https://twitter.com',
  imageSrc: '3ba1b72a-2201-4ceb-a4d4-4d13e0a4b292',
  link: 'About',
  heading: 'Site',
  logoAlt: 'image',
  copyright: '© 2024 Refresh Tech. All Rights Reserved.',
  linkDiscord: 'https://discord.com',
  imageAlt1: 'image',
  link3: 'Services',
  imageAlt: 'image',
  rootClassName: '',
  link2: 'Team',
  heading1: 'Company',
  logoSrc: '/gm%20attorneys%20logo-200h.jpeg',
  imageSrc1: 'c0e4ac5c-39a4-4c07-9115-3b6ad693a75a',
}

Footer.propTypes = {
  link1: PropTypes.string,
  linkTwitter: PropTypes.string,
  imageSrc: PropTypes.string,
  link: PropTypes.string,
  heading: PropTypes.string,
  logoAlt: PropTypes.string,
  copyright: PropTypes.string,
  linkDiscord: PropTypes.string,
  imageAlt1: PropTypes.string,
  link3: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
  heading1: PropTypes.string,
  logoSrc: PropTypes.string,
  imageSrc1: PropTypes.string,
}

export default Footer
