import React from 'react'

import { Helmet } from 'react-helmet'

import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>Landing-Page - Into-Tutoring Website</title>
        <meta name="description" content="Into-Tutoring is coming soon!" />
        <meta
          property="og:title"
          content="Landing-Page - Into-Tutoring Website"
        />
        <meta
          property="og:description"
          content="Into-Tutoring is coming soon!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/856c8403-4b45-4785-9b6b-5aeb31809300/b01d56e0-0c0f-4f44-b9d9-5a5fe9ccfdf9?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="landing-page-container1">
        <div className="landing-page-container2">
          <img
            src="/into%20logo1-200h.webp"
            alt="image"
            className="landing-page-image"
          />
          <span className="landing-page-text">Into Tutoring</span>
        </div>
        <span className="landing-page-text01">Our website is coming soon!</span>
        <span className="landing-page-text02">
          <span>
            Into is a tutoring organization is a student-based program, founded
            by students.
          </span>
          <br></br>
          <span>We assist non-native </span>
          <span>
            [Chinese/Spanish] speakers in learning English, translations, and
            language and academic support.
          </span>
          <br></br>
          <span>
            Students, grades 6 through 12, and parents throughout the U.S. are
            applicable to these online and in-person resources.
          </span>
          <br></br>
          <span>
            We currently host classes 1 on 1 in Chinese or Spanish, so contact
            if you want your child to schedule meetings with our tutors!
          </span>
        </span>
        <span className="landing-page-text11">
          <span>For more info please email us at:</span>
          <br></br>
          <span className="landing-page-text14">info@into-tutoring.com</span>
          <br></br>
        </span>
        <span className="landing-page-text16">
          <span>Or reach out to one of our cordinators!</span>
          <br></br>
        </span>
        <img
          src="/intowebcontacts-500w.webp"
          alt="image"
          className="landing-page-image1"
        />
      </div>
    </div>
  )
}

export default LandingPage
