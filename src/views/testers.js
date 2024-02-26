import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Features from '../components/features'
import Practice from '../components/practice'
import Doctor from '../components/doctor'
import './testers.css'

const Testers = (props) => {
  return (
    <div className="testers-container">
      <Helmet>
        <title>Into-Tutoring Website</title>
        <meta property="og:title" content="Into-Tutoring Website" />
      </Helmet>
      <div data-modal="practices" className="testers-modal">
        <div className="testers-practices">
          <div className="testers-heading">
            <span className="testers-header">Our practices</span>
            <svg
              viewBox="0 0 1024 1024"
              data-close="practices"
              className="testers-close"
            >
              <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
          <div className="testers-grid">
            <div className="testers-section">
              <div className="testers-heading01">
                <span className="testers-header01">Cardiology</span>
                <span className="testers-caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="testers-text">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="testers-image"
                />
              </div>
            </div>
            <div className="testers-section1">
              <div className="testers-heading02">
                <span className="testers-header02">Orthopedics</span>
                <span className="testers-caption1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="testers-text01">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="testers-image01"
                />
              </div>
            </div>
            <div className="testers-section2">
              <div className="testers-heading03">
                <span className="testers-header03">Ophtalmology</span>
                <span className="testers-caption2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="testers-text02">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="testers-image02"
                />
              </div>
            </div>
            <div className="testers-section3">
              <div className="testers-heading04">
                <span className="testers-header04">Pediatrics</span>
                <span className="testers-caption3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="testers-text03">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="testers-image03"
                />
              </div>
            </div>
            <div className="testers-section4">
              <div className="testers-heading05">
                <span className="testers-header05">Nutrition</span>
                <span className="testers-caption4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="testers-text04">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="testers-image04"
                />
              </div>
            </div>
            <div className="testers-section5">
              <div className="testers-heading06">
                <span className="testers-header06">General</span>
                <span className="testers-caption5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="testers-text05">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="testers-image05"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="testers-hero">
        <header data-thq="thq-navbar" className="testers-navbar">
          <div className="testers-left">
            <img
              alt="image"
              src="/Branding/logo-1500h.png"
              className="testers-logo"
            />
            <nav className="testers-links">
              <a href="#features" className="testers-link">
                Features
              </a>
              <a href="#how-it-works" className="testers-link01">
                How it works
              </a>
              <span className="testers-link02">Prices</span>
              <a href="#schedule" className="testers-link03">
                Contact
              </a>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="testers-right">
            <button className="testers-phone button">
              <img
                alt="image"
                src="/Icons/phone.svg"
                className="testers-image06"
              />
              <span className="testers-text06">+0 123-456-789</span>
            </button>
            <a href="#book" className="testers-book button button-main">
              <img
                alt="image"
                src="/Icons/calendar.svg"
                className="testers-image07"
              />
              <span className="testers-text07">Book an appointment</span>
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="testers-burger-menu">
            <svg viewBox="0 0 1024 1024" className="testers-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="testers-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="testers-nav"
            >
              <div className="testers-container1">
                <img
                  alt="image"
                  src="/Branding/logo-1500h.png"
                  className="testers-image08"
                />
                <div data-thq="thq-close-menu" className="testers-menu-close">
                  <svg viewBox="0 0 1024 1024" className="testers-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="testers-nav1"
              >
                <span className="testers-text08">Features</span>
                <span className="testers-text09">How it works</span>
                <span className="testers-text10">Prices</span>
                <span className="testers-text11">Contact</span>
                <a href="#book" className="testers-book1 button button-main">
                  <img
                    alt="image"
                    src="/Icons/calendar.svg"
                    className="testers-image09"
                  />
                  <span className="testers-text12">Book an appointment</span>
                </a>
              </nav>
            </div>
          </div>
        </header>
        <div className="testers-main">
          <div className="testers-content">
            <div className="testers-heading07">
              <h1 className="testers-header07">
                <span className="testers-text13">Into-Tutoring</span>
                <br></br>
              </h1>
              <p className="testers-caption6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <button className="button button-main testers-book2">
              <img
                alt="image"
                src="/Icons/calendar.svg"
                className="testers-image10"
              />
              <span>Book an appointment</span>
            </button>
          </div>
          <div className="testers-image11">
            <img
              alt="image"
              src="/doctor-image-1500w.png"
              className="testers-image12"
            />
          </div>
        </div>
        <div id="features" className="testers-features">
          <div className="testers-content01">
            <Features></Features>
            <Features title="Virtual Clinic"></Features>
            <Features title="Clinical results"></Features>
          </div>
        </div>
        <div className="testers-background"></div>
      </section>
      <section className="testers-practices1">
        <div className="testers-heading08">
          <h2 className="testers-text16">Our practices</h2>
          <p className="testers-text17">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="testers-content02">
          <div className="testers-grid1">
            <Link to="/">
              <div className="testers-practice-wrapper">
                <Practice></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="testers-practice-wrapper1">
                <Practice title="Orthopedics"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="testers-practice-wrapper2">
                <Practice title="Ophtalmology"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="testers-practice-wrapper3">
                <Practice title="Pediatrics"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="testers-practice-wrapper4">
                <Practice title="Nutrition"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="testers-practice-wrapper5">
                <Practice title="General"></Practice>
              </div>
            </Link>
          </div>
          <button data-open="practices" className="button button-main">
            <span>All practices</span>
          </button>
        </div>
      </section>
      <section id="how-it-works" className="testers-why">
        <div className="testers-heading09">
          <h2 className="testers-header08">Why choose us</h2>
          <p className="testers-header09">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="testers-content03">
          <div className="testers-video">
            <video
              src
              poster="/video-1500w.png"
              className="testers-video1"
            ></video>
            <div className="testers-play">
              <img
                alt="image"
                src="/Icons/play.svg"
                className="testers-image13"
              />
            </div>
          </div>
          <div className="testers-caption7">
            <h3 className="testers-header10">
              Consectetur adipiscing elit, sed do eiusmod tempor
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h3>
            <p className="testers-header11">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </section>
      <section className="testers-features1">
        <div className="testers-section6">
          <div className="testers-content04">
            <div className="testers-header12">
              <h2 className="testers-heading10">
                Dedicated doctors with the core mission to help.
              </h2>
              <p className="testers-capton">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="read-more">
              <span className="testers-text19">See our doctors</span>
              <img
                alt="image"
                src="/Icons/arrow-2.svg"
                className="testers-image14"
              />
            </div>
          </div>
          <img alt="image" src="/xray-1500w.png" className="testers-image15" />
        </div>
        <div className="testers-section7">
          <div className="testers-content05">
            <div className="testers-header13">
              <h2 className="testers-heading11">
                Get access to specialty tests and breakthrough information.
              </h2>
              <p className="testers-capton1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="read-more">
              <span className="testers-text20">Find test</span>
              <img
                alt="image"
                src="/Icons/arrow-2.svg"
                className="testers-image16"
              />
            </div>
          </div>
          <img alt="image" src="/lab-1500w.png" className="testers-image17" />
        </div>
        <div className="testers-section8">
          <div className="testers-content06">
            <div className="testers-header14">
              <h2 className="testers-heading12">
                Find out how we can help you help you.
              </h2>
              <p className="testers-capton2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <button className="button button-main testers-book3">
              <span>Book a virtual appointment</span>
            </button>
          </div>
          <img
            alt="image"
            src="/examination-1500w.png"
            className="testers-image18"
          />
        </div>
        <button className="testers-book4 button button-main">
          <span>Book a virtual appointment</span>
        </button>
      </section>
      <section id="schedule" className="testers-schedule">
        <div className="testers-content07">
          <div className="testers-header15">
            <h2 className="testers-heading13">
              Schedule an in person or virtual appointment today
            </h2>
            <p className="testers-caption8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="testers-types">
            <a
              href="#book"
              className="testers-book-person button button-main button-white"
            >
              <span>Book in person appointment</span>
            </a>
            <button className="button button-main button-white testers-book-person1">
              <span>Book virtual appointment</span>
            </button>
          </div>
        </div>
      </section>
      <div className="testers-search">
        <div className="testers-heading14">
          <h2 className="testers-text25">Search diseases &amp; conditions</h2>
          <p className="testers-text26">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="testers-content08">
          <div className="testers-type-one">
            <div className="testers-alphabet">
              <div data-letter="a" className="letter">
                <span className="testers-text27">A</span>
              </div>
              <div data-letter="b" className="letter">
                <span className="testers-text28">B</span>
              </div>
              <div data-letter="c" className="letter">
                <span className="testers-text29">C</span>
              </div>
              <div data-letter="d" className="letter">
                <span className="testers-text30">D</span>
              </div>
              <div data-letter="e" className="letter">
                <span className="testers-text31">E</span>
              </div>
              <div data-letter="f" className="letter">
                <span className="testers-text32">F</span>
              </div>
              <div data-letter="g" className="letter">
                <span className="testers-text33">G</span>
              </div>
              <div data-letter="h" className="letter">
                <span className="testers-text34">H</span>
              </div>
              <div data-letter="i" className="letter">
                <span className="testers-text35">I</span>
              </div>
              <div data-letter="j" className="letter">
                <span className="testers-text36">J</span>
              </div>
              <div data-letter="k" className="letter">
                <span className="testers-text37">K</span>
              </div>
              <div data-letter="l" className="letter">
                <span className="testers-text38">L</span>
              </div>
              <div data-letter="m" className="letter">
                <span className="testers-text39">M</span>
              </div>
              <div data-letter="n" className="letter">
                <span className="testers-text40">N</span>
              </div>
              <div data-letter="o" className="letter">
                <span className="testers-text41">O</span>
              </div>
              <div data-letter="p" className="letter">
                <span className="testers-text42">P</span>
              </div>
              <div data-letter="q" className="letter">
                <span className="testers-text43">Q</span>
              </div>
              <div data-letter="r" className="letter">
                <span className="testers-text44">R</span>
              </div>
              <div data-letter="s" className="letter">
                <span className="testers-text45">S</span>
              </div>
              <div data-letter="t" className="letter">
                <span className="testers-text46">T</span>
              </div>
              <div data-letter="u" className="letter">
                <span className="testers-text47">U</span>
              </div>
              <div data-letter="v" className="letter">
                <span className="testers-text48">V</span>
              </div>
              <div data-letter="w" className="letter">
                <span className="testers-text49">W</span>
              </div>
              <div data-letter="x" className="letter">
                <span className="testers-text50">X</span>
              </div>
              <div data-letter="y" className="letter">
                <span className="testers-text51">Y</span>
              </div>
              <div data-letter="z" className="letter">
                <span className="testers-text52">Z</span>
              </div>
            </div>
            <p className="testers-text53">
              You don’t know it’s name? Check out symptom checker below
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div data-teleport="results" className="testers-results">
              <span className="testers-heading15">Results:</span>
              <div data-results="letters" className="testers-list"></div>
            </div>
          </div>
          <div className="testers-type-two">
            <div className="testers-heading16">
              <h3 className="testers-text54">Symptom checker</h3>
              <p className="testers-text55">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="testers-symptoms">
              <div className="testers-row">
                <div className="symptom">
                  <span className="testers-text56">Abdominal pain</span>
                </div>
                <div className="symptom">
                  <span className="testers-text57">Chest pain</span>
                </div>
                <div className="symptom">
                  <span className="testers-text58">Constipation</span>
                </div>
                <div className="symptom">
                  <span className="testers-text59">Cough</span>
                </div>
                <div className="symptom">
                  <span className="testers-text60">Breath difficulty</span>
                </div>
              </div>
              <div className="testers-row1">
                <div className="symptom">
                  <span className="testers-text61">Red eye</span>
                </div>
                <div className="symptom">
                  <span className="testers-text62">Foot pain</span>
                </div>
                <div className="symptom">
                  <span className="testers-text63">Foot swelling</span>
                </div>
                <div className="symptom">
                  <span className="testers-text64">Headache</span>
                </div>
                <div className="symptom">
                  <span className="testers-text65">Heart palpitation</span>
                </div>
              </div>
              <div className="testers-row2">
                <div className="symptom">
                  <span className="testers-text66">Knee pain</span>
                </div>
                <div className="symptom">
                  <span className="testers-text67">Hip pain</span>
                </div>
                <div className="symptom">
                  <span className="testers-text68">Low back pain</span>
                </div>
                <div className="symptom">
                  <span className="testers-text69">Nasal congestion</span>
                </div>
                <div className="symptom">
                  <span className="testers-text70">Neck pain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="book" className="testers-book5">
        <div className="testers-heading17">
          <h2 className="testers-text71">Book an appointment</h2>
          <p className="testers-text72">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="testers-form">
          <div className="testers-types1">
            <div className="book-type">
              <span className="testers-text73">In person appointment</span>
            </div>
            <div className="book-type">
              <span className="testers-text74">Virtual appointment</span>
            </div>
          </div>
          <div className="testers-inputs">
            <input
              type="text"
              placeholder="Name"
              autoComplete="name"
              className="input book-input"
            />
            <input
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="input book-input"
            />
            <input
              type="tel"
              placeholder="Phone"
              autoComplete="tel"
              className="input book-input"
            />
            <div className="testers-date">
              <input
                type="date"
                placeholder="Date"
                className="input book-input"
              />
              <img
                alt="image"
                src="/Icons/calendar-2.svg"
                className="testers-image19"
              />
            </div>
            <input
              type="text"
              placeholder="Practice"
              className="input book-input"
            />
            <div className="testers-lower">
              <p className="testers-text75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <div className="testers-button">
                <button className="testers-book6 button button-main">
                  <span>Book</span>
                </button>
                <p className="testers-text77">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="testers-text79">adipiscing elit</span>
                  <span>
                    , sed do eiusmod tempor
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="testers-text81">incididunt</span>
                  <span>.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testers-meet">
        <div className="testers-heading18">
          <h2 className="testers-text83">Meet our doctors</h2>
          <p className="testers-text84">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="testers-list1">
          <div className="testers-controls">
            <img
              alt="image"
              src="/Icons/circle-arrow.svg"
              data-doctors="previous"
              className="arrow"
            />
            <img
              alt="image"
              src="/Icons/circle-arrow.svg"
              data-doctors="next"
              className="testers-forward arrow"
            />
          </div>
          <div data-teleport="doctors" className="testers-doctors">
            <Doctor></Doctor>
            <Doctor imageSrc="/Doctors/doctor-2-300w.png"></Doctor>
            <Doctor imageSrc="/Doctors/doctor-3-300w.png"></Doctor>
            <Doctor imageSrc="/Doctors/doctor-4-300w.png"></Doctor>
          </div>
        </div>
        <div className="testers-search1">
          <input
            type="text"
            placeholder="Search by name"
            className="testers-textinput5 input book-input"
          />
          <button className="button button-main testers-book7">
            <span>Search doctor</span>
          </button>
        </div>
      </section>
      <section className="testers-news">
        <div className="testers-heading19">
          <h2 className="testers-text86">Read our latest news</h2>
          <p className="testers-text87">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="testers-list2">
          <div className="testers-item">
            <div className="testers-image20">
              <img
                alt="image"
                src="/News/news-logo-1500w.png"
                className="testers-image21"
              />
            </div>
            <div className="testers-content09">
              <div className="testers-details">
                <span className="testers-date1">November 23, 2022</span>
                <p className="testers-quick-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="read-more">
                <span className="testers-text88">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="testers-image22"
                />
              </div>
            </div>
          </div>
          <div className="testers-item1">
            <div className="testers-image23">
              <img
                alt="image"
                src="/News/news-1-1500w.png"
                className="testers-image24"
              />
            </div>
            <div className="testers-content10">
              <div className="testers-details1">
                <span className="testers-date2">November 23, 2022</span>
                <p className="testers-quick-description1">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="read-more">
                <span className="testers-text89">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="testers-image25"
                />
              </div>
            </div>
          </div>
          <div className="testers-item2">
            <div className="testers-image26">
              <img
                alt="image"
                src="/News/news-2-1500w.png"
                className="testers-image27"
              />
            </div>
            <div className="testers-content11">
              <div className="testers-details2">
                <span className="testers-date3">November 23, 2022</span>
                <p className="testers-quick-description2">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore.
                </p>
              </div>
              <div className="read-more">
                <span className="testers-text90">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="testers-image28"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="testers-download">
        <div className="testers-main1">
          <img alt="image" src="/phone-1500w.png" className="testers-image29" />
          <div className="testers-content12">
            <h2 className="testers-text91">
              Download our mobile app and book your next appointment
            </h2>
            <div className="testers-buttons">
              <button className="testers-i-os button button-main">
                <img
                  alt="image"
                  src="/Icons/apple.svg"
                  className="testers-image30"
                />
                <span>Download for iOS</span>
              </button>
              <button className="button button-main testers-android">
                <img
                  alt="image"
                  src="/Icons/android.svg"
                  className="testers-image31"
                />
                <span>Download for Android</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="testers-footer">
        <div className="testers-left1">
          <div className="testers-brand">
            <img
              alt="image"
              src="/Branding/logo-2.svg"
              className="testers-image32"
            />
            <p className="testers-text94">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="testers-socials">
            <div className="social">
              <img
                alt="image"
                src="/Icons/insider.svg"
                className="testers-image33"
              />
            </div>
            <div className="social">
              <img
                alt="image"
                src="/Icons/instagram.svg"
                className="testers-image34"
              />
            </div>
            <div className="social">
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="testers-image35"
              />
            </div>
          </div>
          <div className="testers-legal">
            <span className="testers-copyright">
              © 2022 finbest. All Rights Reserved.
            </span>
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-link">Terms of Use</span>
          </div>
        </div>
        <div className="testers-right1">
          <div className="testers-list3">
            <span className="testers-header16">Menu</span>
            <div className="testers-links1">
              <span className="testers-link04">Home</span>
              <span className="testers-link05">About</span>
              <span className="testers-link06">Services</span>
              <span className="testers-link07">Blog</span>
              <span className="testers-link08">Support</span>
            </div>
          </div>
          <div className="testers-list4">
            <span className="testers-header17">Resources</span>
            <div className="testers-links2">
              <span className="testers-link09">Test Results</span>
              <span className="testers-link10">Patients</span>
              <span className="testers-link11">Doctors</span>
              <span className="testers-link12">Health</span>
            </div>
          </div>
          <div className="testers-list5">
            <span className="testers-header18">Contact</span>
            <div className="testers-links3">
              <span className="testers-link13">
                24 Street Name, City FI 01234, RO
              </span>
              <a
                href="mailto:contact@template.new?subject=Main"
                className="testers-link14"
              >
                contact@template.new
              </a>
              <a href="tel:(004) 234 - 5678" className="testers-link15">
                (004) 234 - 5678
              </a>
            </div>
          </div>
        </div>
        <div className="testers-legal1">
          <div className="testers-row3">
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-link">Terms of Use</span>
          </div>
          <span className="testers-copyright5">
            © 2022 finbest. All Rights Reserved.
          </span>
        </div>
      </div>
      <div>
        <div className="testers-container3">
          <Script
            html={`<script>
const modalOpen = document.querySelectorAll('[data-open]');
const modalClose = document.querySelectorAll('[data-close]');

modalOpen.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.open}"]\`);
        modal.style.display = "flex";
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.close}"]\`);
        modal.style.display = "none";
    });
});
</script>
`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="testers-container5">
          <Script
            html={`<script>
const dataLetters = document.querySelectorAll("[data-letter]");
let activeLetters = [];
const maxResults = 6;

dataLetters.forEach(letter => {
  letter.addEventListener("click", function() {
    if (this.classList.contains("letter-active")) {
      this.classList.remove("letter-active");
      activeLetters = activeLetters.filter(a => a !== this.dataset.letter);
    } else {
      this.classList.add("letter-active");
      activeLetters.push(this.dataset.letter);
    }
    if (activeLetters.length == 0) {
      document.querySelector("[data-teleport='results']").style.display = "none";
      return;
    }
    showResults();
  });
});

const showResults = () => {
  fetch("https://raw.githubusercontent.com/Shivanshu-Gupta/web-scrapers/master/medical_ner/medicinenet-diseases.json")
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(item => {
        const firstLetter = item.disease.charAt(0).toLowerCase();
        if (activeLetters.includes(firstLetter)) {
          return true;
        }
        return false;
      });

      document.querySelector("[data-teleport='results']").style.display = "flex";
      const resultsContainer = document.querySelector("[data-results='letters']");
      resultsContainer.innerHTML = "";

      let counter = 0;
      const diseaseGroups = {};
      const totalActiveLetters = activeLetters.length;

      filteredData.forEach(disease => {
        const firstLetter = disease.disease[0].toLowerCase();
        if (diseaseGroups[firstLetter]) {
          diseaseGroups[firstLetter].push(disease);
        } else {
          diseaseGroups[firstLetter] = [disease];
        }
      });

      Object.keys(diseaseGroups).sort().forEach((firstLetter, index) => {
        const diseasesForThisLetter = diseaseGroups[firstLetter];
        const diseasesToShow = diseasesForThisLetter.slice(0, Math.ceil(maxResults / totalActiveLetters));

        diseasesToShow.forEach(disease => {
          const resultContainer = document.createElement("div");
          resultContainer.classList.add("search-result");
          resultContainer.classList.add("invisible");
          resultContainer.style.animationDelay = \`\${counter * 0.25}s\`;

          const resultText = document.createElement("span");
          resultText.classList.add("result-text");
          resultText.textContent = disease.disease;

          resultContainer.appendChild(resultText);
          resultsContainer.appendChild(resultContainer);
          counter++;

          if (counter === maxResults) {
            const moreContainer = document.createElement("div");
            moreContainer.classList.add("search-result");
            moreContainer.classList.add("more-results");

            const moreText = document.createElement("span");
            moreText.classList.add("result-text");
            moreText.textContent = "More";

            moreContainer.appendChild(moreText);
            resultsContainer.appendChild(moreContainer);
            addedMoreContainer = true;
            return;
          }
        });
      });
    });
};
</script>
`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="testers-container7">
          <Script
            html={`<script>
function scroll(direction) {
  const doctorsDiv = document.querySelector('[data-teleport="doctors"]');
  const scrollAmount = 300;
  if (direction === 'previous') {
    doctorsDiv.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'next') {
    doctorsDiv.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

const buttons = document.querySelectorAll('[data-doctors]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.dataset.doctors;
    scroll(direction);
  });
});
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Testers
