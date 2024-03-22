import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>GM Attorneys at Law</title>
          <meta
            name="description"
            content="GM Attorneys is an innovative law firm specialising in commercial litigations, collections, debts review and all other associated mercantile law."
          />
          <meta property="og:title" content="GM Attorneys at Law" />
          <meta
            property="og:description"
            content="GM Attorneys is an innovative, B-BBEE level 1, 100% black owned law firm specialising in commercial litigations, collections, debts review and all other associated mercantile law."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/686ef18e-247d-45aa-aa55-fd34c6e13646/9fb2392b-ebbd-4d59-a152-5bad1bf73d8e?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
        </Head>
        <section className="home-hero">
          <div className="home-heading">
            <h1 className="home-header">
              <span className="home-text">Providing essential legal</span>
              <br className="home-text01"></br>
              <span className="home-text02">services at rates that</span>
              <br className="home-text03"></br>
              <span className="home-text04">do you justice.</span>
              <br></br>
            </h1>
          </div>
          <p className="home-caption">
            <span>
              GM ATTORNEYS
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text07">AT LAW</span>
          </p>
          <Navbar rootClassName="navbar-root-class-name1"></Navbar>
          <div className="home-buttons">
            <a href="#services" className="home-services button">
              Our Services
            </a>
            <a
              href="https://mkhumbuzi.co.za/#team"
              target="_blank"
              rel="noreferrer noopener"
              className="home-team button-clean button"
            >
              Our Team
            </a>
          </div>
        </section>
        <section className="home-description">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fGxhd3xlbnwwfHx8fDE3MDk1NDc2Nzl8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1400"
            className="home-image"
          />
          <div className="home-container1">
            <div className="home-description1">
              <div className="home-content">
                <p className="home-paragraph">
                  GM Attorneys is an innovative, B-BBEE level 1, 100% black
                  owned law firm specialising in commercial litigations,
                  collections, debts review and all other associated mercantile
                  law.
                </p>
                <p className="home-paragraph1">
                  Our highly qualified team draws on a wide pool of knowledge in
                  the fields of asset forfeitures, foreclosures, liquidations
                  and conveyancing in order to conceptualize and execute bespoke
                  business solutions which are not only compliant to the letter
                  and the spirit of the regulatory framework but also provide
                  the most efficient, cost-effective legal results.
                </p>
              </div>
              <div className="home-links">
                <Link href="/about">
                  <a className="home-link button-link button">
                    <span>Learn more</span>
                    <img
                      alt="image"
                      src="/Icons/arrow.svg"
                      className="home-arrow"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="home-our-services">
          <div className="home-content01">
            <div className="home-heading1">
              <h2 className="home-header1">Our Services</h2>
              <p className="home-header2">
                Providing essential legal services at rates that do you justice.
              </p>
            </div>
          </div>
          <div className="home-main">
            <div className="home-card">
              <div className="home-content02">
                <h3 className="home-title">
                  <span>Legal recoveries</span>
                  <br className="home-text10"></br>
                </h3>
              </div>
            </div>
            <div className="home-card01">
              <div className="home-content03">
                <h3 className="home-title01">
                  <span>Foreclosures</span>
                  <br></br>
                </h3>
              </div>
            </div>
            <div className="home-card02">
              <div className="home-content04">
                <h3 className="home-title02">
                  <span>Debt counselling and debt rehabilitation</span>
                  <br></br>
                </h3>
              </div>
            </div>
            <div className="home-card03">
              <div className="home-content05">
                <h3 className="home-title03">
                  <span>Criminal law</span>
                  <br></br>
                </h3>
              </div>
            </div>
            <div className="home-card04">
              <div className="home-content06">
                <h3 className="home-title04">
                  <span>Labour law</span>
                  <br></br>
                </h3>
              </div>
            </div>
            <div className="home-card05">
              <div className="home-content07">
                <h3 className="home-title05">
                  <span>Compliance law</span>
                  <br></br>
                </h3>
              </div>
            </div>
            <div className="home-card06">
              <div className="home-content08">
                <h3 className="home-title06">
                  <span>Notary and conveyancing</span>
                  <br></br>
                </h3>
              </div>
            </div>
            <div className="home-card07">
              <div className="home-content09">
                <h3 className="home-title07">
                  <span>Tax law</span>
                  <br></br>
                </h3>
              </div>
            </div>
            <div className="home-card08">
              <div className="home-content10">
                <h3 className="home-title08">
                  <span>Insolvency law</span>
                  <br className="home-text26"></br>
                </h3>
              </div>
            </div>
            <div className="home-card09">
              <div className="home-content11">
                <h3 className="home-title09">
                  <span>Family law</span>
                  <br></br>
                </h3>
              </div>
            </div>
            <div className="home-card10">
              <div className="home-content12">
                <h3 className="home-title10">
                  <span>Advisory services</span>
                  <br></br>
                </h3>
              </div>
            </div>
            <div className="home-card11">
              <animate-on-reveal
                animation="fadeInDown"
                duration="300ms"
                delay="0s"
                direction="normal"
                easing="ease"
                iteration="1"
              >
                <div
                  data-thq-animate-on-reveal="true"
                  className="home-content13"
                >
                  <h3 className="home-title11">Property sales</h3>
                </div>
              </animate-on-reveal>
            </div>
            <div className="home-card12">
              <div className="home-content14">
                <h3 className="home-title12">
                  <span>Drafting of wills and contracts</span>
                  <br></br>
                </h3>
              </div>
            </div>
          </div>
        </section>
        <div id="contact" className="home-contact-us">
          <h1 className="home-text33">Contact us</h1>
          <div className="home-separator"></div>
          <div className="home-container2">
            <div className="home-container3"></div>
            <div className="home-container4">
              <ul className="home-ul list">
                <li className="home-li list-item">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                  </svg>
                  <a
                    href="https://maps.app.goo.gl/RDuFmqT9okXgyDaU7"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1"
                  >
                    105 Oxford Road, Rosebank, 2196
                  </a>
                </li>
                <a href="tel:+27632364292">
                  <li className="home-li1 list-item">
                    <svg viewBox="0 0 1024 1024" className="home-icon2">
                      <path d="M854 656q18 0 30 12t12 30v148q0 50-42 50-298 0-512-214t-214-512q0-42 50-42h148q18 0 30 12t12 30q0 78 24 150 8 26-10 44l-82 72q92 192 294 290l66-84q12-12 30-12 10 0 14 2 72 24 150 24z"></path>
                    </svg>
                    <span className="home-text34">0632364292</span>
                  </li>
                </a>
                <li className="home-li2 list-item">
                  <svg viewBox="0 0 1024 1024" className="home-icon4">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <a
                    href="mailto:admin@mkhumbuzi.ac.za?subject=Email from the website"
                    className="home-link3"
                  >
                    admin@mkhumbuzi.ac.za
                  </a>
                </li>
                <li className="home-li3">
                  <svg viewBox="0 0 1024 1024" className="home-icon6">
                    <path d="M658.744 749.256l-210.744-210.746v-282.51h128v229.49l173.256 173.254zM512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 896c-212.078 0-384-171.922-384-384s171.922-384 384-384c212.078 0 384 171.922 384 384s-171.922 384-384 384z"></path>
                  </svg>
                  <span className="home-text35">
                    <span>Mon - Friday: 08h00 - 17h00       </span>
                    <br></br>
                    <span>Not open on public holidays</span>
                    <br></br>
                  </span>
                </li>
              </ul>
              <form
                action="https://formsubmit.co/admin@mkhumbuzi.ac.za"
                method="POST"
                enctype="application/x-www-form-urlencoded"
                className="home-form"
              >
                <h1 className="home-text40">Get in touch</h1>
                <span className="home-text41">
                  Contact us today, and get a reply within 24 hours!
                </span>
                <input
                  type="text"
                  name="name"
                  required="true"
                  placeholder="Full Name"
                  className="home-name input"
                />
                <input
                  type="tel"
                  name="number"
                  required="true"
                  placeholder="Cell Number"
                  className="home-phone-number input"
                />
                <input
                  type="email"
                  name="email"
                  required="true"
                  placeholder="Email"
                  className="home-email input"
                />
                <input
                  type="text"
                  name="Subject"
                  rows="Subject"
                  placeholder="Subject"
                  className="home-subject input"
                />
                <textarea
                  name="Message"
                  placeholder="Your message"
                  className="home-your-message textarea"
                ></textarea>
              </form>
              <button
                name="Submit"
                type="submit"
                className="home-button button"
              >
                Submit
              </button>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1505547828843-176834e42154?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxsYXd8ZW58MHx8fHwxNzA5NjM2MDc1fDA&amp;ixlib=rb-4.0.3&amp;w=1000"
              className="home-image1"
            />
          </div>
        </div>
        <Footer></Footer>
        <div>
          <div className="home-container6">
            <Script
              html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .home-hero {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 932px;
            display: flex;
            max-width: 1440px;
            align-self: flex-start;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            animation-name: fadeIn;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            animation-delay: 0s;
            background-size: cover;
            background-image: url('/justice-1000h.jpg');
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-heading {
            gap: var(--dl-space-space-twounits);
            width: 723px;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header {
            color: rgb(255, 255, 255);
            font-size: 60px;
            max-width: 900px;
            align-self: flex-start;
            text-align: left;
            font-family: 'Georgia';
            font-weight: 500;
            line-height: 90px;
          }
          .home-text {
            font-weight: 300;
          }
          .home-text01 {
            font-weight: 300;
          }
          .home-text02 {
            font-weight: 300;
          }
          .home-text03 {
            font-weight: 300;
          }
          .home-text04 {
            font-weight: 300;
          }
          .home-caption {
            color: rgb(255, 255, 255);
            font-size: 34px;
            max-width: 800px;
            text-align: center;
            font-family: 'Arial';
            line-height: 36px;
            padding-left: var(--dl-space-space-twounits);
          }
          .home-text07 {
            color: #a68758;
          }
          .home-buttons {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-services {
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            background-color: #a68758;
          }
          .home-team {
            color: rgb(255, 255, 255);
            animation-name: fadeInDown;
            animation-delay: 0s;
            text-decoration: none;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-description {
            gap: 120px;
            width: 100%;
            display: flex;
            align-items: center;
            animation-name: fadeIn;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            animation-delay: 0s;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-image {
            width: var(--dl-size-size-maxwidth);
            height: 431px;
            object-fit: cover;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-description1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-content {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-paragraph {
            color: rgb(255, 255, 255);
            font-size: 40px;
            line-height: 60px;
          }
          .home-paragraph1 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            line-height: 60px;
          }
          .home-links {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .home-link {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            text-decoration: none;
            border-top-width: 0px;
          }
          .home-arrow {
            width: 25px;
            object-fit: cover;
          }
          .home-our-services {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            margin: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 1440px;
            align-self: center;
            align-items: stretch;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            animation-name: fadeIn;
            flex-direction: column;
            padding-bottom: 160px;
            animation-delay: 0s;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-content01 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header1 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
          }
          .home-header2 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-main {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            height: var(--dl-size-size-maxwidth);
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: repeat(4, 1fr);
          }
          .home-card {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-content02 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: center;
            align-items: center;
            animation-name: none;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            background-color: #a68758;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-title {
            color: rgb(255, 255, 255);
            font-size: 20px;
            align-self: center;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-text10 {
            font-size: 36px;
            line-height: 24px;
          }
          .home-card01 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-content03 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: center;
            align-items: center;
            animation-name: none;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            background-color: #a68758;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-title01 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            align-self: center;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card02 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-content04 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: center;
            align-items: center;
            animation-name: none;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            background-color: #a68758;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-title02 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card03 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-content05 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: center;
            align-items: center;
            animation-name: none;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            background-color: #a68758;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-title03 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            align-self: center;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card04 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-content06 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: center;
            align-items: center;
            animation-name: none;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            background-color: #a68758;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-title04 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            align-self: center;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card05 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-content07 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: center;
            align-items: center;
            animation-name: none;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            background-color: #a68758;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-title05 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            align-self: center;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card06 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-content08 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: center;
            align-items: center;
            animation-name: none;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            background-color: #a68758;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-title06 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card07 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-content09 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: center;
            align-items: center;
            animation-name: none;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            background-color: #a68758;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-title07 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            align-self: center;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card08 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-content10 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: center;
            align-items: center;
            animation-name: none;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            background-color: #a68758;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-title08 {
            color: rgb(255, 255, 255);
            height: 63px;
            font-size: 20px;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-weight: 500;
            line-height: 24px;
            text-transform: capitalize;
          }
          .home-text26 {
            font-size: 36px;
            line-height: 24px;
          }
          .home-card09 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-content11 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: center;
            align-items: center;
            animation-name: none;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            background-color: #a68758;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-title09 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            align-self: center;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card10 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-content12 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: center;
            align-items: center;
            animation-name: none;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            background-color: #a68758;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-title10 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            align-self: center;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card11 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-content13 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #a68758;
          }
          .home-title11 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            align-self: center;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card12 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-content14 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: center;
            align-items: center;
            animation-name: none;
            flex-direction: column;
            animation-delay: 0s;
            justify-content: center;
            background-color: #a68758;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-title12 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 24px;
          }
          .home-contact-us {
            width: 1231px;
            height: 1212px;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            animation-name: fadeIn;
            flex-direction: column;
            animation-delay: 0s;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-text33 {
            color: #ffffff;
            font-size: 4rem;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-separator {
            width: 100px;
            height: 2px;
            background-color: #a68758;
          }
          .home-container2 {
            width: 100%;
            height: 902px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            background-color: #000000;
          }
          .home-container3 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .home-container4 {
            flex: 0 0 auto;
            width: 604px;
            height: 967px;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-ul {
            width: 593px;
            height: 212px;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
          }
          .home-li {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-icon {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .home-link1 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            padding-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .home-li1 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-icon2 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .home-text34 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            padding-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .home-li2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-icon4 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .home-link3 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            padding-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .home-li3 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            padding-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .home-icon6 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .home-text35 {
            color: rgb(255, 255, 255);
          }
          .home-form {
            width: 588px;
            height: 652px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text40 {
            color: rgb(166, 135, 88);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            text-transform: uppercase;
          }
          .home-text41 {
            color: rgb(183, 180, 180);
            font-size: 20px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-name {
            width: 100%;
            height: 67px;
            margin-top: var(--dl-space-space-twounits);
          }
          .home-phone-number {
            width: 100%;
            height: 67px;
            margin-top: var(--dl-space-space-twounits);
          }
          .home-email {
            width: 100%;
            height: 67px;
            margin-top: var(--dl-space-space-twounits);
          }
          .home-subject {
            width: 100%;
            height: 67px;
            margin-top: var(--dl-space-space-twounits);
          }
          .home-your-message {
            color: #000000;
            width: 100%;
            height: 171px;
            margin-top: var(--dl-space-space-oneandhalfunits);
            background-color: #ffffff;
          }
          .home-button {
            margin-top: var(--dl-space-space-oneandhalfunits);
            margin-right: var(--dl-space-space-unit);
            background-color: rgb(166, 135, 88);
          }
          .home-image1 {
            width: 525px;
            height: 819px;
            object-fit: cover;
            flex-shrink: 0;
            object-position: left;
          }
          .home-container6 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-main {
              grid-template-columns: repeat(2, 1fr);
            }
            .home-title02 {
              text-align: center;
            }
            .home-contact-us {
              width: 100%;
              height: 1521px;
              align-items: center;
            }
            .home-container2 {
              width: 991px;
              height: 1336px;
              flex-direction: column;
            }
            .home-ul {
              width: 991px;
              align-self: center;
            }
            .home-li {
              text-align: center;
            }
            .home-li1 {
              text-align: center;
            }
            .home-li2 {
              text-align: center;
            }
            .home-li3 {
              text-align: center;
            }
            .home-text35 {
              color: rgb(255, 255, 255);
            }
            .home-form {
              width: 100%;
            }
            .home-button {
              width: 608px;
              height: 54px;
            }
            .home-image1 {
              width: 991px;
              height: 300px;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-heading {
              gap: var(--dl-space-space-unit);
            }
            .home-header {
              font-size: 36px;
              max-width: 70%;
              line-height: 43px;
            }
            .home-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .home-description {
              gap: var(--dl-space-space-threeunits);
              padding-bottom: 0px;
            }
            .home-description1 {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content {
              gap: var(--dl-space-space-unit);
            }
            .home-paragraph {
              font-size: 20px;
              line-height: 30px;
            }
            .home-paragraph1 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-our-services {
              gap: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content01 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading1 {
              gap: var(--dl-space-space-unit);
            }
            .home-header1 {
              font-size: 32px;
              letter-spacing: 0;
            }
            .home-header2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-contact-us {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text33 {
              text-align: center;
            }
            .home-container2 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              height: 821px;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .home-heading {
              width: 435px;
            }
            .home-image {
              width: 479px;
            }
            .home-main {
              grid-template-columns: repeat(1, 1fr);
            }
            .home-contact-us {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container2 {
              height: 1370px;
            }
            .home-container3 {
              grid-template-columns: 1fr;
            }
            .home-container4 {
              width: 479px;
            }
            .home-text35 {
              color: rgb(255, 255, 255);
            }
            .home-form {
              width: 447px;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .home-button {
              width: 479px;
              height: 50px;
            }
            .home-image1 {
              width: 479px;
              height: 127px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
