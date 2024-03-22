import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard3 = (props) => {
  return (
    <>
      <div className={`feature-card3-feature-card ${props.rootClassName} `}>
        <h2 className="feature-card3-text">{props.title}</h2>
        <span className="feature-card3-text1">{props.discription}</span>
        <div className="feature-card3-feature-card1">
          <h2 className="feature-card3-text2">{props.value2}</h2>
          <span className="feature-card3-text3">{props.description2}</span>
        </div>
        <div className="feature-card3-feature-card2">
          <h2 className="feature-card3-text4">{props.value3}</h2>
          <span className="feature-card3-text5">{props.description3}</span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card3-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
          }
          .feature-card3-text {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card3-text1 {
            color: var(--dl-color-gray-700);
            text-align: center;
          }
          .feature-card3-feature-card1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
          }
          .feature-card3-text2 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card3-text3 {
            color: var(--dl-color-gray-700);
            text-align: center;
          }
          .feature-card3-feature-card2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
          }
          .feature-card3-text4 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card3-text5 {
            color: var(--dl-color-gray-700);
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

FeatureCard3.defaultProps = {
  description2:
    'To provide our clients with quality customer service, we handle our work in a timely and efficient manner.',
  discription:
    'We set the greatest standards of integrity, driven by a dedication to fairness and truth.',
  value3: 'Accountability & commitment',
  value2: 'Service',
  title: 'Trust and integrity',
  rootClassName: '',
  rootClassName11: '',
  value1: 'SEE MORE',
  rootClassName1: '',
  description3:
    'We undertake to abide by the reasonable standards and expectations outlined in the core values. Our clients come first and we strive to give them the best experience possible while meeting their needs. Service To provide our clients with quality customer service, we handle our work in a timely and efficient manner.',
}

FeatureCard3.propTypes = {
  description2: PropTypes.string,
  discription: PropTypes.string,
  value3: PropTypes.string,
  value2: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  rootClassName11: PropTypes.string,
  value1: PropTypes.string,
  rootClassName1: PropTypes.string,
  description3: PropTypes.string,
}

export default FeatureCard3
