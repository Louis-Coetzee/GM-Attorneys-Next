import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard4 = (props) => {
  return (
    <>
      <div className={`feature-card4-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card4-icon">
          <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
        </svg>
        <h2 className="feature-card4-text">{props.address}</h2>
        <span className="feature-card4-text1">{props.description}</span>
      </div>
      <style jsx>
        {`
          .feature-card4-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #a68758;
          }
          .feature-card4-icon {
            width: 24px;
            height: 24px;
          }
          .feature-card4-text {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card4-text1 {
            color: #ffffff;
          }
          .feature-card4-root-class-name {
            width: 100%;
          }
          @media (max-width: 479px) {
            .feature-card4-text {
              font-style: normal;
              font-weight: 600;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard4.defaultProps = {
  rootClassName: '',
  description: '105 Oxford Road, Rosebank, 2196',
  address: 'Address',
}

FeatureCard4.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  address: PropTypes.string,
}

export default FeatureCard4
