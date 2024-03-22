import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - GM Attorneys at Law</title>
          <meta
            name="description"
            content="GM Attorneys is an innovative law firm specialising in commercial litigations, collections, debts review and all other associated mercantile law."
          />
          <meta property="og:title" content="About - GM Attorneys at Law" />
          <meta
            property="og:description"
            content="GM Attorneys is an innovative, B-BBEE level 1, 100% black owned law firm specialising in commercial litigations, collections, debts review and all other associated mercantile law."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/686ef18e-247d-45aa-aa55-fd34c6e13646/9fb2392b-ebbd-4d59-a152-5bad1bf73d8e?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
        </Head>
        <div className="about-heading">
          <Navbar rootClassName="navbar-root-class-name"></Navbar>
          <h1 className="about-text">About us</h1>
          <p className="about-caption">
            <span>
              GM ATTORNEYS
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="about-text02">AT LAW</span>
          </p>
          <div className="about-btn-group">
            <a href="#team" className="about-link button">
              Our Team
            </a>
            <a
              href="https://mkhumbuzi.co.za/#contact"
              target="_blank"
              rel="noreferrer noopener"
              className="about-link1 button"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="about-feature-card">
          <div className="about-container01">
            <p className="about-paragraph">
              GM Attorneys is an innovative, B-BBEE level 1, 100% black owned
              law firm specialising in commercial litigations, collections,
              debts review and all other associated mercantile law. Our highly
              qualified team draws on a wide pool of knowledge in the fields of
              asset forfeitures, foreclosures, liquidations and conveyancing in
              order to conceptualize and execute bespoke business solutions
              which are not only compliant to the letter and the spirit of the
              regulatory framework but also provide the most efficient,
              cost-effective legal results.
            </p>
          </div>
        </div>
        <div className="about-banner">
          <div className="about-container02">
            <h1 className="about-text03">Our Mission and Vision</h1>
            <span className="about-text04">
              <span>
                Our guiding principles are honesty, cooperation, diligence, and
                dedication to the firm’s ongoing expansion, in order to give our
                clients the best possible service. The primary goal is to
                protect the rights of our clients.
              </span>
              <br></br>
              <br></br>
              <span>
                Our service is centred on time and quality. We always respond to
                our client’s instructions and finalise our matters timeously.
              </span>
            </span>
          </div>
        </div>
        <div className="about-features">
          <h1 className="about-text09">
            <span>Our Values</span>
            <br></br>
          </h1>
          <div className="about-container03">
            <div className="about-container04">
              <h1 className="about-text12">Trust and integrity</h1>
              <span>
                We set the greatest standards of integrity, driven by a
                dedication to fairness and truth.
              </span>
            </div>
            <div className="about-container05">
              <div className="about-container06">
                <h1>Service</h1>
              </div>
              <span>
                To provide our clients with quality customer service, we handle
                our work in a timely and efficient manner.
              </span>
            </div>
            <div className="about-container07">
              <div className="about-container08">
                <h1>Accountability &amp; commitment</h1>
                <span className="about-text17">
                  We undertake to abide by the reasonable standards and
                  expectations outlined in the core values. Our clients come
                  first and we strive to give them the best experience possible
                  while meeting their needs.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-container09">
          <section id="team" className="about-team">
            <h2 className="about-header">Meet the Team</h2>
            <div className="about-gugu-mkhumbuzi">
              <div className="about-content">
                <span className="about-caption1"> DIRECTOR</span>
                <div className="about-heading1">
                  <h2 className="about-header01">Gugu Mkhumbuzi</h2>
                  <p className="about-header02">
                    <span>
                      The visionary behind GM Attorneys Inc. is Gugu Mkhumbuzi.
                      She graduated from the University of Zululand with an LLB.
                      After completing her Practical Legal Training program at
                      the University of Kwa Zulu-Natal, she began her articles,
                      gaining invaluable experience in RAF, divorce,
                      maintenance, labour, debt review, and drafting wills and
                      commercial contracts. Following her admission as an
                      attorney, she worked as a professional assistant for more
                      than four years at DRSM attorneys, primarily focussed on
                      the debt collections department, where she fulfilled her
                      role at the reigns of the debt review department,
                      eventually earning a management role with the foreclosures
                      department, and was part of the MFC Vehicle asset
                      recoveries team which was ranked and awarded third place
                      out of twenty five attorneys on the bank&apos;s panels in
                      2022, leading to an award at the 2022 Nedbank Achievers
                      ceremony. She is presently enrolled in the University of
                      South Africa&apos;s master&apos;s program in banking law.
                      She executed her role as a head of department, which sees
                      her supervise and oversee a defended litigations portfolio
                      with a book size in excess of R70 million rands, a debt
                      review portfolio with a book size in excess of R50 million
                      rands, a vehicle collections portfolio with a book value
                      well in excess of R100 million rands, as well as various
                      ancillary departments such as credit cards and deceased
                      estates,
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                  </p>
                </div>
              </div>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGxhd3xlbnwwfHx8fDE3MDk5MTU0NTd8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="about-image"
              />
              <svg viewBox="0 0 1024 1024" className="about-icon">
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
            </div>
            <div className="about-tina-muthivhi">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxsYXd8ZW58MHx8fHwxNzA5OTE1NDU3fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="about-image1"
              />
              <div className="about-content1">
                <span className="about-caption2">admitted attorneys</span>
                <div className="about-heading2">
                  <h2 className="about-header03">Tina Muthivhi</h2>
                  <p className="about-header04">
                    <span>
                      Tina Muthivhi completed her LLB degree at the University
                      of Limpopo and holds a postgraduate certificate in
                      compliance management from the University of Cape Town.
                      Tina’s practise focuses on corporate debt recoveries and
                      litigation. She has worked on different legal recoveries
                      portfolio for prominent financial institutions/ public
                      sectors on different lending products, for both early and
                      late-stage collections with over 50 million book value.
                      Tina is self motivated, highly reliable, ambitious and
                      passionate about the corporate debt recoveries industry.
                    </span>
                    <br></br>
                    <br></br>
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
            <div className="about-shariz-rajin">
              <div className="about-content2">
                <span className="about-caption3">admitted attorneys</span>
                <div className="about-heading3">
                  <h2 className="about-header05">Shariz Rajin</h2>
                  <p className="about-header06">
                    <span>
                      Shariz Rajin has 9 years’ experience working in the legal
                      department of a leading credit bureau, she completed her
                      LLB degree as the University of South Africa, after
                      obtaining her LLB degree she commenced her articles of
                      clerkship at a boutique firm in Johannesburg South, she
                      thereafter got admitted as an attorney. She also has
                      experience in court appearances, drafting legal pleadings,
                      general litigation including debt review law as she works
                      as a correspondent attorney for numerous debt review law
                      firms. As an admitted attorney she aspires to be one of
                      the young successful female attorneys who will transform
                      the legal profession through hard work, dedication and
                      inspire other young females.
                    </span>
                    <br></br>
                  </p>
                </div>
              </div>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1524633712235-22da046738b4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxsYXd8ZW58MHx8fHwxNzA5OTE1NDU3fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="about-image2"
              />
              <svg viewBox="0 0 1024 1024" className="about-icon2">
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
            </div>
            <div className="about-tasneem-vally">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ5fHxsYXd8ZW58MHx8fHwxNzA5OTcwODk4fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="about-image3"
              />
              <div className="about-content3">
                <span className="about-caption4">admitted attorneys</span>
                <div className="about-heading4">
                  <h2 className="about-header07">Tasneem Vally</h2>
                  <p className="about-header08">
                    <span>
                      Tasneem Vally has been in the legal profession for more
                      than ten years in the legal field. She is an admitted
                      attorney and recently got admitted as a notary. Her areas
                      of expertise include conveyancing, notaries, tax law, and
                      insolvency law. She is dedicated to giving our clients the
                      best possible legal representation. She values building
                      long-term relationships with our clients and collaborates
                      closely with them to offer specialized legal solutions.
                    </span>
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
            <div className="about-rhulani-shirindzi">
              <div className="about-content4">
                <span className="about-caption5">admitted attorneys</span>
                <div className="about-heading5">
                  <h2 className="about-header09">Rhulani Shirindzi</h2>
                  <p className="about-header10">
                    <span>
                      Rhulani Shirindzi began his career volunteering at Legal
                      Aid South Africa at the age of 20, and he continued to
                      volunteer while studying for his LLB. He is presently an
                      admitted attorney with a Paralegal certificate from Boston
                      Business College and an LLB from Northwest University.
                      Rhulani has extensive experience in criminal law, labour
                      law, family law, contract and commercial law, and has
                      worked on urgent cases in both the private and public
                      sectors.
                    </span>
                    <br></br>
                  </p>
                </div>
              </div>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1555374018-13a8994ab246?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY5fHxsYXd8ZW58MHx8fHwxNzA5OTcwODk4fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="about-image4"
              />
              <svg viewBox="0 0 1024 1024" className="about-icon4">
                <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              </svg>
            </div>
          </section>
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .about-heading {
            width: 100%;
            height: 741px;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: 80vh;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: column;
            animation-delay: 0s;
            background-size: cover;
            justify-content: space-between;
            background-image: url('https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIwfHxsYXd8ZW58MHx8fHwxNzA5OTE1NDU3fDA&ixlib=rb-4.0.3&h=1500');
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .about-text {
            color: #ffffff;
            font-size: 5rem;
            max-width: 450px;
          }
          .about-caption {
            color: rgb(255, 255, 255);
            font-size: 34px;
            max-width: 800px;
            text-align: center;
            font-family: 'Arial';
            line-height: 36px;
          }
          .about-text02 {
            color: #a68758;
          }
          .about-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .about-link {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: #a68758;
          }
          .about-link:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .about-link1 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: transparent;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: #a68758;
          }
          .about-link1:hover {
            border-color: var(--dl-color-gray-black);
          }
          .about-feature-card {
            width: 100%;
            height: 501px;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            animation-name: fadeIn;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: flex-start;
            background-color: #000000;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .about-container01 {
            width: 100%;
            height: 508px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-paragraph {
            color: #a68758;
            width: 1200px;
            height: 424px;
            font-size: 30px;
            align-self: center;
            text-align: center;
            line-height: 60px;
          }
          .about-banner {
            width: 100%;
            height: 470px;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            animation-name: fadeIn;
            flex-direction: column;
            animation-delay: 0s;
            background-size: cover;
            justify-content: space-between;
            background-image: url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGxhd3xlbnwwfHx8fDE3MDk2MzYwNzV8MA&ixlib=rb-4.0.3&w=1500');
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .about-container02 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 100%;
            height: 375px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.89);
          }
          .about-text03 {
            color: rgb(166, 135, 88);
            font-size: 3rem;
            text-align: center;
          }
          .about-text04 {
            color: #ffffff;
            font-size: 34px;
            align-self: center;
            text-align: center;
          }
          .about-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            animation-name: fadeIn;
            flex-direction: column;
            animation-delay: 0s;
            background-color: #d9d9d9;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .about-text09 {
            color: #a68758;
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .about-container03 {
            gap: var(--dl-space-space-sixunits);
            width: 1125px;
            height: 229px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: center;
          }
          .about-container04 {
            flex: 1;
            width: 200px;
            height: 100px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .about-container05 {
            flex: 1;
            width: 200px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-container06 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-container07 {
            flex: 1;
            width: 200px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-container08 {
            flex: 0 0 auto;
            width: 351px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-container09 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            animation-name: fadeIn;
            animation-delay: 0s;
            justify-content: center;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .about-team {
            gap: 120px;
            width: 100%;
            display: flex;
            max-width: 1440px;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .about-header {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
          }
          .about-gugu-mkhumbuzi {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .about-content {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-caption1 {
            color: #a68758;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .about-heading1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-header01 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
          }
          .about-header02 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .about-image {
            width: 388px;
            height: 644px;
            object-fit: cover;
          }
          .about-icon {
            width: 24px;
            height: 24px;
          }
          .about-tina-muthivhi {
            gap: 130px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .about-image1 {
            width: 332px;
            height: 420px;
            object-fit: cover;
          }
          .about-content1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-caption2 {
            color: #a68758;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .about-heading2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-header03 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
          }
          .about-header04 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .about-shariz-rajin {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .about-content2 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-caption3 {
            color: #a68758;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .about-heading3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-header05 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
          }
          .about-header06 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .about-image2 {
            width: 480px;
            object-fit: cover;
          }
          .about-icon2 {
            width: 24px;
            height: 24px;
          }
          .about-tasneem-vally {
            gap: 130px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .about-image3 {
            width: 510px;
            object-fit: cover;
          }
          .about-content3 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-caption4 {
            color: #a68758;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .about-heading4 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-header07 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
          }
          .about-header08 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .about-rhulani-shirindzi {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .about-content4 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-caption5 {
            color: #a68758;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .about-heading5 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-header09 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
          }
          .about-header10 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .about-image4 {
            width: 480px;
            object-fit: cover;
          }
          .about-icon4 {
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .about-heading {
              flex-direction: column;
            }
            .about-text {
              text-align: center;
            }
            .about-feature-card {
              height: 564px;
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .about-container01 {
              width: 955px;
              height: 537px;
            }
            .about-paragraph {
              width: 974px;
              padding-top: var(--dl-space-space-unit);
            }
            .about-banner {
              height: 555px;
            }
            .about-container02 {
              height: 458px;
            }
            .about-features {
              width: 100%;
            }
            .about-text09 {
              text-align: center;
            }
            .about-container03 {
              gap: 0;
              width: 942px;
              align-self: center;
              align-items: center;
              justify-content: space-between;
            }
            .about-text17 {
              text-align: left;
            }
            .about-container09 {
              align-self: flex-end;
              align-items: center;
              justify-content: flex-start;
            }
            .about-team {
              flex: 1;
              width: 991px;
              height: 5008px;
              max-width: 100%;
              align-self: stretch;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .about-gugu-mkhumbuzi {
              align-items: center;
              flex-direction: column;
            }
            .about-image {
              height: 215px;
            }
            .about-tina-muthivhi {
              flex-direction: column-reverse;
            }
            .about-image1 {
              height: 200px;
            }
            .about-shariz-rajin {
              align-items: center;
              flex-direction: column;
            }
            .about-image2 {
              height: 234px;
            }
            .about-tasneem-vally {
              flex-direction: column-reverse;
            }
            .about-image3 {
              height: 281px;
            }
            .about-rhulani-shirindzi {
              height: 653px;
              align-items: center;
              flex-direction: column;
            }
            .about-image4 {
              height: 273px;
            }
          }
          @media (max-width: 767px) {
            .about-heading {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .about-feature-card {
              height: 331px;
              flex-direction: row;
            }
            .about-container01 {
              flex-direction: column;
            }
            .about-paragraph {
              width: 721px;
              font-size: 20px;
              line-height: 30px;
            }
            .about-banner {
              height: 565px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-container02 {
              height: 472px;
            }
            .about-text03 {
              width: 192px;
              height: 229px;
            }
            .about-text04 {
              color: rgb(255, 255, 255);
              font-size: 24px;
            }
            .about-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-text09 {
              text-align: center;
            }
            .about-container03 {
              width: 678px;
              height: 628px;
              align-self: flex-start;
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .about-text12 {
              width: 331px;
            }
            .about-container09 {
              width: 100%;
            }
            .about-team {
              gap: var(--dl-space-space-threeunits);
              width: 368px;
              height: 5575px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .about-header {
              font-size: 32px;
              letter-spacing: 0;
            }
            .about-gugu-mkhumbuzi {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .about-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .about-heading1 {
              gap: var(--dl-space-space-unit);
            }
            .about-header01 {
              font-size: 32px;
              letter-spacing: 0;
            }
            .about-header02 {
              font-size: 14px;
              line-height: 21px;
            }
            .about-image {
              width: 100%;
            }
            .about-tina-muthivhi {
              gap: var(--dl-space-space-fourunits);
            }
            .about-image1 {
              width: 100%;
            }
            .about-content1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .about-heading2 {
              gap: var(--dl-space-space-unit);
            }
            .about-header03 {
              font-size: 32px;
              letter-spacing: 0;
            }
            .about-header04 {
              font-size: 14px;
              line-height: 21px;
            }
            .about-shariz-rajin {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .about-content2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .about-heading3 {
              gap: var(--dl-space-space-unit);
            }
            .about-header05 {
              font-size: 32px;
              letter-spacing: 0;
            }
            .about-header06 {
              font-size: 14px;
              line-height: 21px;
            }
            .about-image2 {
              width: 100%;
            }
            .about-tasneem-vally {
              gap: var(--dl-space-space-fourunits);
            }
            .about-image3 {
              width: 100%;
            }
            .about-content3 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .about-heading4 {
              gap: var(--dl-space-space-unit);
            }
            .about-header07 {
              font-size: 32px;
              letter-spacing: 0;
            }
            .about-header08 {
              font-size: 14px;
              line-height: 21px;
            }
            .about-rhulani-shirindzi {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .about-content4 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .about-heading5 {
              gap: var(--dl-space-space-unit);
            }
            .about-header09 {
              font-size: 32px;
              letter-spacing: 0;
            }
            .about-header10 {
              font-size: 14px;
              line-height: 21px;
            }
            .about-image4 {
              width: 100%;
              height: 571px;
            }
          }
          @media (max-width: 479px) {
            .about-heading {
              padding: var(--dl-space-space-unit);
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .about-text {
              padding-left: var(--dl-space-space-unit);
            }
            .about-caption {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
            .about-btn-group {
              flex-direction: column;
            }
            .about-link1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-feature-card {
              height: 509px;
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .about-container01 {
              width: 445px;
              height: 424px;
              flex-direction: column;
            }
            .about-paragraph {
              width: 460px;
            }
            .about-banner {
              height: 933px;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-container02 {
              height: 898px;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .about-features {
              align-items: center;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-container03 {
              width: 424px;
              height: 610px;
              align-items: center;
              flex-direction: column;
            }
            .about-container09 {
              width: 100%;
              align-self: stretch;
              align-items: center;
              justify-content: center;
            }
            .about-team {
              width: 279px;
              height: 3671px;
              align-items: center;
            }
            .about-header02 {
              width: 429px;
              text-align: justify;
            }
            .about-image {
              height: 277px;
            }
            .about-image1 {
              height: 221px;
            }
            .about-header04 {
              text-align: justify;
            }
            .about-header06 {
              text-align: justify;
            }
            .about-image2 {
              height: 208px;
            }
            .about-image3 {
              height: 251px;
            }
            .about-header08 {
              text-align: justify;
            }
            .about-header10 {
              text-align: justify;
            }
            .about-image4 {
              height: 220px;
            }
          }
        `}
      </style>
    </>
  )
}

export default About
