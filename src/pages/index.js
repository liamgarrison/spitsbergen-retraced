import React, { Component } from "react"
import { Link, graphql, withPrefix } from "gatsby"
import Img from "gatsby-image"
import LogoWhite from "../images/logo/portrait_white.png"
import LogoBlueIcon from "../images/logo/icon_blue.png"
import Report from "../files/spitsbergen-retraced-expedition-report.pdf"

import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO
        title="Home"
        keywords={[`spitsbergen`, `svalbard`, `expedition`, `oxford`]}
      />
      <div class="home-banner">
        <div class="content">
          <div class="image-wrapper">
            <img src={LogoWhite} alt="Spitsbergen Retraced Logo" />
          </div>
          <div class="scroll-more">
            <p>Scroll for more</p>
            <i class="fas fa-arrow-down " />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row mt-5">
          <div class="col-xs-12">
            <h1>A Journey Across Time and Ice...</h1>
            <p>
              1923, four students from Oxford University made the first crossing
              of the Spitsbergen ice cap. Bad weather, failing equipment and
              heavy sleds made the 32-day crossing an unimaginably arduous
              endeavour.
            </p>

            <p>
              93 years later, to the day, four students from the same university
              returned to the Arctic in their footsteps, to discover the secrets
              of their epic journey and see first hand the beauty of this
              pristine wilderness.
            </p>

            <p>
              The film Spitsbergen Retraced tells the story of this unsupported
              journey across the ice as the team experiences arctic storms,
              stunning alpine ridges and historical treasures.
            </p>
          </div>
        </div>
        <div class="row ">
          <div class="col-xs-12 col-sm-6 col-lg-4">
            <div class="objective-card card">
              <Img
                className="card-img-top"
                alt="Card image cap"
                fluid={data.history.childImageSharp.fluid}
              />

              <div class="card-body">
                <h1 class="card-title">Recreating History</h1>
                <p class="card-text">
                  In the footsteps of the first crossing of Spitsbergen
                </p>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-lg-4">
            <div class="objective-card card">
              <Img
                className="card-img-top"
                alt="Card image cap"
                fluid={data.mountaineering.childImageSharp.fluid}
              />
              <div class="card-body">
                <h1 class="card-title">Arctic Mountaineering</h1>
                <p class="card-text">
                  Rocky ridges and first ascents in a sublime Alpine landscape
                </p>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-lg-4">
            <div class="objective-card card">
              <Img
                className="card-img-top"
                alt="Card image cap"
                fluid={data.science.childImageSharp.fluid}
              />
              <div class="card-body">
                <h1 class="card-title">Scientific Research</h1>
                <p class="card-text">
                  Creating high-resolution 3D models of glaciers never seen
                  before
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-xs-12">
            <h1>Watch the Film</h1>
            <p>
              If you'd like to watch the film, please get in touch and we'll
              share the password with you.
            </p>
            <form action="/film" method="POST">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="password"
                  placeholder="Password"
                />
                <button type="submit" class="mt-3 btn btn-primary btn-large">
                  Watch Film
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="row mt-5 ">
          <h1>Meet The Team</h1>
        </div>
        <div class="row ">
          <div class="col-xs-12 col-sm-6 col-xl-4">
            <div class="team-card card">
              <Img
                className="card-img-top"
                alt="Card image cap"
                fluid={data.james.childImageSharp.fluid}
              />
              <div class="card-body">
                <h1 class="card-title">James Lam</h1>
                <p class="card-text">Expedition Leader</p>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-xl-4">
            <div class="team-card card">
              <Img
                className="card-img-top"
                alt="Card image cap"
                fluid={data.will.childImageSharp.fluid}
              />
              <div class="card-body">
                <h1 class="card-title">Will Hartz</h1>
                <p class="card-text">Expedition Medical Officer</p>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-xl-4">
            <div class="team-card card">
              <Img
                className="card-img-top"
                alt="Card image cap"
                fluid={data.jamie.childImageSharp.fluid}
              />
              <div class="card-body">
                <h1 class="card-title">Jamie Gardiner</h1>
                <p class="card-text">Expedition Historian and Filmmaker</p>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-xl-4">
            <div class="team-card card">
              <Img
                className="card-img-top"
                alt="Card image cap"
                fluid={data.liam.childImageSharp.fluid}
              />
              <div class="card-body">
                <h1 class="card-title">Liam Garrison</h1>
                <p class="card-text">Expedition Photographer and Filmmaker</p>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-xl-4">
            <div class="team-card card">
              <Img
                className="card-img-top"
                alt="Card image cap"
                fluid={data.endre.childImageSharp.fluid}
              />
              <div class="card-body">
                <h1 class="card-title">Endre Før Gjermundsen</h1>
                <p class="card-text">Local Polar Expert</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5 ">
          <div class="col-xs-12">
            <h1>Want to Learn More?</h1>
            <p>
              We'd love to hear from you whether it's feedback on our film or if
              you're planning a similar expedition yourselves.
            </p>

            <p class="social-icons">
              <a target="_blank" href="https://facebook.com/svalbard2016">
                <i class="fab fa-facebook" />
              </a>
              <a target="_blank" href="https://twitter.com/svalbard2016">
                <i class="fab fa-twitter" />
              </a>
              <a target="_blank" href="https://instagram.com/svalbard2016">
                <i class="fab fa-instagram" />
              </a>
            </p>
            <p>
              Email:
              <a href="mailto:james@spitsbergenretraced.com">
                james@spitsbergenretraced.com
              </a>
            </p>

            {/* <!-- Begin MailChimp Signup Form --> */}

            <form
              action="https://spitsbergenretraced.us17.list-manage.com/subscribe/post?u=a20d9871063f65d283c9d1d4b&amp;id=49d549c0fd"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate form-inline"
              target=""
              novalidate
            >
              <div class="form-group">
                <label class="mr-2" for="mce-EMAIL">
                  Subscribe to the mailing list:
                </label>
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  class="form-control mr-2"
                  id="mce-EMAIL"
                  placeholder="Your email address here"
                  required
                />
              </div>

              {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_a20d9871063f65d283c9d1d4b_49d549c0fd"
                  tabindex="-1"
                  value=""
                />
              </div>

              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="btn btn-primary"
              />
            </form>

            {/* <!--End mc_embed_signup--> */}

            <p class="mt-4">
              We've prepared an expedition report which outlines the details of
              the expedition in all its glory, including kit lists, route maps
              and more!
            </p>
            <p>
              <a class="btn btn-primary btn-large" target="blank" href={Report}>
                Download Expedition Report
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="container footer">
        <div class="row">
          <div class="image-wrapper">
            <img src={LogoBlueIcon} alt="Spitsbergen Retraced Logo" />
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    endre: file(relativePath: { eq: "headshots/endre.jpg" }) {
      ...cardImage
    }
    will: file(relativePath: { eq: "headshots/will.jpg" }) {
      ...cardImage
    }
    liam: file(relativePath: { eq: "headshots/liam.jpg" }) {
      ...cardImage
    }
    james: file(relativePath: { eq: "headshots/james.jpg" }) {
      ...cardImage
    }
    jamie: file(relativePath: { eq: "headshots/jamie.jpg" }) {
      ...cardImage
    }
    history: file(relativePath: { eq: "objectives/history.jpg" }) {
      ...cardImage
    }
    science: file(relativePath: { eq: "objectives/science.jpg" }) {
      ...cardImage
    }
    mountaineering: file(
      relativePath: { eq: "objectives/mountaineering.jpg" }
    ) {
      ...cardImage
    }
  }
`

export const cardImage = graphql`
  fragment cardImage on File {
    childImageSharp {
      fluid(maxWidth: 500, maxHeight: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
