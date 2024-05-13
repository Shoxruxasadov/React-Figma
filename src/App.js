import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./style.scss";

function App() {
  return (
    <div className="App">
      <section id="one">
        <Header />
        <div className="section-one-content">
          <img className="ellipse24" src="section-one-images/Ellipse24.png" />
          <img className="ellipse21" src="section-one-images/Ellipse21.png" />
          <img className="ellipse22" src="section-one-images/Ellipse22.png" />
          <div className="containerone">
            <div className="content">
              <h1>
                Virtual Reality <br /> Business Solutions
              </h1>
              <p>
                We have over 15 year exprience in business consultting arena. We
                have over <br /> 15 year exprience in business consultting arena
                and artficial intelligence.
              </p>
              <div className="content-bottom">
                <a className="Joisus" href="#">
                  Join Us
                </a>
                <a className="watchvideo" href="#">
                  <img src="section-one-images/play.svg" alt="" />
                  <span>Watch viode</span>
                </a>
              </div>
            </div>
            <div className="contentoneimg">
              <img src="section-one-images/1sec.svg" />
            </div>
          </div>
        </div>
      </section>
      <section id="two">
        <div className="container-two">
          <div className="title-two">
            <h1>Our Service</h1>
            <p>
              We turn information into actionable insights We work to understand
              your issues <br /> and are driven to ask better questions in the
              pursuit of making work.
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <div className="icon-card">
                <img src="section-two-images/icon1.svg" />
                <img src="section-two-images/elem1.svg" />
              </div>
              <h1>Order Management</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
                quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
              </p>
              <a href="#">
                <span>Learn more</span>
                <img src="section-two-images/arrow-right.svg" />
              </a>
            </div>
            <div className="card">
              <div className="icon-card">
                <img src="section-two-images/icon2.svg" />
              </div>
              <h1>Social Assistant</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
                quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
              </p>
              <a href="#">
                <span>Learn more</span>
                <img src="section-two-images/arrow-right.svg" />
              </a>
            </div>
            <div className="card">
              <div className="icon-card">
                <img src="section-two-images/icon3.svg" />
              </div>
              <h1>Crypto Platform</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
                quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
              </p>
              <a href="#">
                <span>Learn more</span>
                <img src="section-two-images/arrow-right.svg" />
              </a>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <div className="icon-card">
                <img src="section-two-images/icon4.svg" />
                <img src="section-two-images/elem4.svg" />
              </div>
              <h1>Smart Trading Modules</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
                quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
              </p>
              <a href="#">
                <span>Learn more</span>
                <img src="section-two-images/arrow-right.svg" />
              </a>
            </div>
            <div className="card">
              <div className="icon-card">
                <img src="section-two-images/icon5.svg" />
              </div>
              <h1>Analyzer of the News</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
                quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
              </p>
              <a href="#">
                <span>Learn more</span>
                <img src="section-two-images/arrow-right.svg" />
              </a>
            </div>
            <div className="card">
              <div className="icon-card">
                <img src="section-two-images/icon6.svg" />
              </div>
              <h1>Module of Price Notification</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed
                quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
              </p>
              <a href="#">
                <span>Learn more</span>
                <img src="section-two-images/arrow-right.svg" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="three">
        <div className="container-three">
          <div className="icon-three">
            <img src="section-tf-images/photo1.svg" />
          </div>
          <div className="content-three">
            <h1>
              We complete every projects <br /> extra care as customer need
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              dictum risus, <br /> non suscipit arcu. Quisque aliquam posuere
              tortor, sit amet convallis nuncoe <br /> scelerisque in. orem
              ipsum dolor sit amet, consectetur adipisicing elit. Labore <br />{" "}
              eius molestiae facere, natus reprehenderit eaque eum, autem ipsam.
              Magfini, <br /> error. Tempora odit laborum iure inventore
              possimus laboriosam qui nam.{" "}
            </p>
            <a href="#">Read more</a>
          </div>
        </div>
      </section>
      <section id="four">
        <div className="container-four">
          <div className="content-four">
            <h1>
              We complete every projects <br /> extra care as customer need
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              dictum risus, <br /> non suscipit arcu. Quisque aliquam posuere
              tortor, sit amet convallis nuncoe <br /> scelerisque in. orem
              ipsum dolor sit amet, consectetur adipisicing elit. Labore <br />{" "}
              eius molestiae facere, natus reprehenderit eaque eum, autem ipsam.
              Magfini, <br /> error. Tempora odit laborum iure inventore
              possimus laboriosam qui nam.
            </p>
            <a href="#">Read more</a>
          </div>
          <div className="icon-four">
            <img src="section-tf-images/photo2.svg" />
          </div>
        </div>
      </section>
      <section id="five">
        <div className="container-five">
          <div className="title-five">
            <h1>Met Our Team</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              <br />
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <div className="icon-card">
                <img
                  className="imgFigmaUser"
                  src="section-five-images/photo1.png"
                />
              </div>
              <div className="titleTeam">
                <h1>Sunny Khan</h1>
                <p>Executive officer</p>
              </div>
              <div className="socials">
                <a href="#">
                  <img src="section-five-images/youtube.svg" />
                </a>
                <a href="#">
                  <img src="section-five-images/instagram.svg" />
                </a>
                <a href="#">
                  <img src="section-five-images/telegram.svg" />
                </a>
                <a href="#">
                  <img src="section-five-images/facebook.svg" />
                </a>
              </div>
            </div>
            <div className="card">
              <div className="icon-card">
                <img
                  className="imgFigmaUser"
                  src="section-five-images/photo2.png"
                />
              </div>
              <div className="titleTeam">
                <h1>Alina Jesia</h1>
                <p>UX/UI DESIGNER</p>
              </div>
              <div className="socials">
                <a href="#">
                  <img src="section-five-images/youtube.svg" />
                </a>
                <a href="#">
                  <img src="section-five-images/instagram.svg" />
                </a>
                <a href="#">
                  <img src="section-five-images/telegram.svg" />
                </a>
                <a href="#">
                  <img src="section-five-images/facebook.svg" />
                </a>
              </div>
            </div>
            <div className="card">
              <div className="icon-card">
                <img
                  className="imgFigmaUser"
                  src="section-five-images/photo3.png"
                />
              </div>
              <div className="titleTeam">
                <h1>Alex Sohag</h1>
                <p>BUSINESS DEVELOPMENT</p>
              </div>
              <div className="socials">
                <a href="#">
                  <img src="section-five-images/youtube.svg" />
                </a>
                <a href="#">
                  <img src="section-five-images/instagram.svg" />
                </a>
                <a href="#">
                  <img src="section-five-images/telegram.svg" />
                </a>
                <a href="#">
                  <img src="section-five-images/facebook.svg" />
                </a>
              </div>
            </div>
            <div className="card">
              <div className="icon-card">
                <img
                  className="imgFigmaUser"
                  src="section-five-images/photo4.png"
                />
              </div>
              <div className="titleTeam">
                <h1>Afroza Mou</h1>
                <p>Head of marketing</p>
              </div>
              <div className="socials">
                <a href="#">
                  <img src="section-five-images/youtube.svg" />
                </a>
                <a href="#">
                  <img src="section-five-images/instagram.svg" />
                </a>
                <a href="#">
                  <img src="section-five-images/telegram.svg" />
                </a>
                <a href="#">
                  <img src="section-five-images/facebook.svg" />
                </a>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <div className="icon-card">
                <img src="section-five-images/photo5.png" />
              </div>
              <div className="titleTeam">
                <h1>Kelly Adams</h1>
                <p>Illustrator</p>
              </div>
              <div className="socials">
                <a href="#">
                  <img src="section-five-images/youtube.svg" />
                </a>
                <a href="#">
                  <img src="section-five-images/instagram.svg" />
                </a>
                <a href="#">
                  <img src="section-five-images/telegram.svg" />
                </a>
                <a href="#">
                  <img src="section-five-images/facebook.svg" />
                </a>
              </div>
            </div>
            <div className="card">
              <div className="icon-card">
                <img src="section-five-images/photo6.png" />
              </div>
              <div className="titleTeam">
                <h1>Shoxrux Asadov</h1>
                <p>Frontend Developer</p>
              </div>
              <div className="socials">
                <a href="https://www.youtube.com/channel/UCGluX86zHnTtuQf76t3cCZg">
                  <img src="section-five-images/youtube.svg" />
                </a>
                <a href="https://www.instagram.com/shokh.dev/">
                  <img src="section-five-images/instagram.svg" />
                </a>
                <a href="https://www.t.me/shoxruxasadov">
                  <img src="section-five-images/telegram.svg" />
                </a>
                <a href="https://www.facebook.com/ShokhDeveloper/">
                  <img src="section-five-images/facebook.svg" />
                </a>
              </div>
            </div>
            <div className="card">
              <div className="icon-card">
                <img src="section-five-images/photo7.png" />
              </div>
              <div className="titleTeam">
                <h1>Alex Smith</h1>
                <p>Web Developer</p>
              </div>
              <div className="socials">
                <a href="#">
                  <img src="section-five-images/youtube.svg" />
                </a>
                <a href="#">
                  <img src="section-five-images/instagram.svg" />
                </a>
                <a href="#">
                  <img src="section-five-images/telegram.svg" />
                </a>
                <a href="#">
                  <img src="section-five-images/facebook.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="six">
        <div className="container-six">
          <div className="form">
            <h1>Subscribe to get the Latest News</h1>
            <p>
              We recommended you to subscribe to our newspaper, drop your email
              below to get daily update about us
            </p>
            <div className="message">
              <input type="text" placeholder="Enter your email addres" />
              <button>
                <img src="footer/Vector.svg" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
}

export default App;
