import React from 'react'

import { Helmet } from 'react-helmet'

import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>Landing-Page - Into-Tutoring Website</title>
        <meta
          property="og:title"
          content="Landing-Page - Into-Tutoring Website"
        />
      </Helmet>
    </div>
  )
}

export default LandingPage
