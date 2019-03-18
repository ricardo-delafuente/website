import React, { Fragment } from 'react';
import Head from 'next/head';

const Meta = () => (
  <Fragment>
    <Head>
      <meta charSet="utf-8" />
      <meta name="description" content="Web Developer Portfolio Website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Portfolio | Ricardo De la Fuente</title>

      <link rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="https://use.typekit.net/nkj7vjd.css" />
    </Head>

    <style global jsx>{`
      /* Quick Reset */
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      html {
        scroll-behavior: smooth;
      }
      body {
        color: #667788;
        font-family: 'Eurostile', sans-serif;
        font-size: 1.2rem;
        text-rendering: optimizeLegibility;
        margin: 0;
      }
      h1,
      h2,
      h3 {
        color: #4d5966;
      }
      p {
        line-height: 1.75em;
      }
      img {
        max-width: 100%;
      }
      a {
        color: #4d5966;
        text-decoration: none;
        transition: all 0.25s;
      }
      a:hover {
        color: #ff8a00;
      }
      /* Grid System */
      .container {
        margin: 0 auto;
        padding: 0 2.5rem;
        width: 100%;
        max-width: 1000px;
      }
      .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0 -1.5rem;
      }
      .col {
        flex-basis: 100%;
        padding: 1.5rem;
      }
      /* Utility Classes */
      .heading {
        color: #4d5966;
        font-size: 1.25rem;
        line-height: 1.5rem;
        text-align: center;
        display: block;
        margin-bottom: 4.5rem;
      }
      .heading span {
        border: 1px solid #4d5966;
        border-radius: 0.75rem;
        display: inline-block;
        padding: 1rem 1.5rem;
        position: relative;
      }
      .heading span:before,
      .heading span:after {
        border-bottom: 1px solid #4d5966;
        content: '';
        position: absolute;
        top: 50%;
        width: 3.5rem;
      }
      .heading span:before {
        right: 100%;
        margin-right: 1rem;
      }
      .heading span:after {
        left: 100%;
        margin-left: 1rem;
      }
      .sub-heading {
        font-size: 1.2rem;
        margin: 4.5rem 0 3rem;
      }
      .divider {
        border-left: 1px dashed #667788;
        margin: 0.5rem 0.75rem !important;
      }
      .btn {
        appearance: none;
        background: none;
        border-radius: 0.3rem;
        color: inherit;
        cursor: pointer;
        font-family: 'Eurostile';
        font-size: 1.2rem;
        font-weight: bold;
        outline: none;
        padding: 0.5rem 1rem;
        transition: all 0.25s;
      }
      .center {
        text-align: center;
      }
      .uppercase {
        text-transform: uppercase;
      }
      .accent {
        color: #5daec3;
      }
      /* Responsive */
      @media (max-width: 767px) {
        .col:not(:last-child) {
          margin-bottom: 1rem;
        }
        .heading {
          margin-bottom: 2.5rem !important;
        }
      }
      @media (min-width: 768px) {
        .col {
          flex: 1;
        }
        .col-3 {
          flex-basis: calc(50% - 3rem);
          flex-grow: 0;
          margin: 1.5rem;
        }
      }
      @media (min-width: 960px) {
        .col-3 {
          flex-basis: calc(33% - 3rem);
        }
      }
    `}</style>
  </Fragment>
);

export default Meta;
