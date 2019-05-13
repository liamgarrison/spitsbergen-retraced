import React from 'react';
// Image imports
import logoBlue from './images/logo/icon_blue.png';
import history from './images/objectives/history.jpg';
import mountaineering from './images/objectives/mountaineering.jpg';
import science from './images/objectives/science.jpg';
import endre from './images/headshots/endre.jpg';
import james from './images/headshots/james.jpg';
import jamie from './images/headshots/jamie.jpg';
import liam from './images/headshots/liam.jpg';
import will from './images/headshots/will.jpg';
// File import
import report from './files/spitsbergen-retraced-expedition-report.pdf';
// CSS
import './App.scss';
// Components
import Card from './components/card'
import Banner from './components/banner'

function App() {
  return (
    <div className="App">
      <Banner/>
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
            <Card
              height="200"
              imageUrl={history}
              cardTitle="Recreating History"
              cardText="In the footsteps of the first crossing of Spitsbergen"
            />
          </div>
          <div class="col-xs-12 col-sm-6 col-lg-4">
            <Card
              height="200"
              imageUrl={mountaineering}
              cardTitle="Arctic Mountaineering"
              cardText="Rocky ridges and first ascents in a sublime Alpine landscape"
            />
          </div>
          <div class="col-xs-12 col-sm-6 col-lg-4">
            <Card
              height="200"
              imageUrl={science}
              cardTitle="Scientific Research"
              cardText="Creating high-resolution 3D models of glaciers never seen
                  before"
            />
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
            <Card
              height="300"
              imageUrl={james}
              cardTitle="James Lam"
              cardText="Expedition Leader"
            />
          </div>
          <div class="col-xs-12 col-sm-6 col-xl-4">
            <Card
              height="300"
              imageUrl={will}
              cardTitle="Will Hartz"
              cardText="Expedition Medical Officer"
            />
          </div>

          <div class="col-xs-12 col-sm-6 col-xl-4">
            <Card
              height="300"
              imageUrl={jamie}
              cardTitle="Jamie Gardiner"
              cardText="Expedition Historian and Filmmaker"
            />
          </div>
          <div class="col-xs-12 col-sm-6 col-xl-4">
            <Card
              height="300"
              imageUrl={liam}
              cardTitle="Liam Garrison"
              cardText="Expedition Photographer and Filmmaker"
            />
          </div>
          <div class="col-xs-12 col-sm-6 col-xl-4">
            <Card
              height="300"
              imageUrl={endre}
              cardTitle="Endre Før Gjermundsen"
              cardText="Local Polar Expert"
            />
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
              <a class="btn btn-primary btn-large" target="blank" href={report}>
                Download Expedition Report
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="container footer">
        <div class="row">
          <div class="image-wrapper">
            <img src={logoBlue} alt="Spitsbergen Retraced Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
