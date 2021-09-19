import React from "react"
import { Helmet } from "react-helmet"

import "@fontsource/lato/300.css" 

import "../../static/assets/css/main.css"
import "../../static/assets/css/noscript.css"
import "../../static/assets/css/fontawesome-all.min.css"

import MyForm from "./../pages/kontakt"
import MyFooter from "./../components/footer"


const datenschutz = () => (
  <>
  <Helmet>
    <title>Lichtbildenthusiastin - Deine Fotografin</title>
  </Helmet>
  <header></header>
  <main>


      <div id="wrapper" className="divided"> 
        <section className="wrapper style1 align-center">
          <div className="inner">
            <h2>Massa sed condimentum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum.</p>
          </div>


      </section>



      <section className="wrapper style1 align-center">
          <MyFooter/>
      </section>

    </div>
  </main>
</>
)
export default datenschutz