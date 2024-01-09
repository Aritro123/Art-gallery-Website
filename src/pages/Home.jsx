import React, { Fragment } from "react";
import Footer from "../component/footer";
import Header from "../component/header";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <div className="slider1">
        <div className="img-slide1">
          <img
            src={process.env.PUBLIC_URL + "asset/webpage-front.jpg"}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + "asset/webpage-front.jpg"}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + "asset/webpage-front.jpg"}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + "asset/webpage-front.jpg"}
            alt=""
          />
        </div>
        <div className="img-slide1">
          <img
            src={process.env.PUBLIC_URL + "asset/webpage-front.jpg"}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + "asset/webpage-front.jpg"}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + "asset/webpage-front.jpg"}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + "asset/webpage-front.jpg"}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + "asset/webpage-front.jpg"}
            alt=""
          />
        </div>
      </div>

      <div>
        <div className="wrapper">
          <h2 className="title-color">
            <strong>Illustrative Insights</strong>
            <br />
            artist profile explorer
          </h2>
          <a href="/#" className="button-1">
            Get Started
          </a>
        </div>
      </div>

      <div className="Artist-center">
        <div className="Artist">
          <h1>Illustrator</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={process.env.PUBLIC_URL + "asset/wolp1.jpg"} alt="" />
              <h2>WOLP</h2>
              <p>
                Wolp is an artist who creates detailed and high-quality
                illustrations.
              </p>
              <a href="/#">Click here</a>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "asset/oriday-tap6.png"}
                alt=""
              />
              <h2>Oridays</h2>
              <p>
                An illustrator and YouTuber who creates illustrations and
                teaches tutorials
              </p>
              <a href="/#">Click here</a>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "asset/wenjun-lin-tab.jpg"}
                alt=""
              />
              <h2>Wenjun</h2>
              <p>
                Creates digital art, Illustrator Wenjun Lin/JUNC @wenjunlin6
              </p>
              <a href="/#">Click here</a>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "asset/berry-tab.jpg"}
                alt=""
              />
              <h2>B.Verrine</h2>
              <p>
                Japanese Illustrator BerryVerrineです！, briging you wide range
                of digital art
              </p>
              <a href="/#">Click here</a>
            </div>
          </div>
        </div>
      </div>

      <div className="view-more">
        <div>
          <a href="/Illustrator" className="button-1">
            View More
          </a>
        </div>
      </div>

      <div className="Artist-center">
        <div className="Artist">
          <h1>Trending Now</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "asset/anime-tab.png"}
                alt=""
              />
              <div className="card-text">
                <h2>
                  <a href="/#">Anime</a>
                </h2>
                <a href="/#">Expore</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={process.env.PUBLIC_URL + "asset/ai-art2.png"} alt="" />
              <div className="card-text">
                <h2>
                  <a href="/#">AI Art</a>
                </h2>
                <a href="/#">Expore</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "asset/fantasy-tab2.png"}
                alt=""
              />
              <div className="card-text">
                <h2>
                  <a href="/#">Fantasy</a>
                </h2>
                <a href="/#">Expore</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={process.env.PUBLIC_URL + "asset/gaming.png"} alt="" />
              <div className="card-text">
                <h2>
                  <a href="/#">Gaming</a>
                </h2>
                <a href="/#">Expore</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "asset/steampunk-tab1.png"}
                alt=""
              />
              <div className="card-text">
                <h2>
                  <a href="/#">Steampunk</a>
                </h2>
                <a href="/#">Expore</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "asset/protrait-tab1.png"}
                alt=""
              />
              <div className="card-text">
                <h2>
                  <a href="/#">Portraits</a>
                </h2>
                <a href="/#">Expore</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "asset/realist-tab1.png"}
                alt=""
              />
              <div className="card-text">
                <h2>
                  <a href="/#">Realistic</a>
                </h2>
                <a href="/#">Expore</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Artist-center">
        <div className="Artist">
          <h1>Futured Illustrator</h1>
        </div>
      </div>

      <div className="container2">
        <div className="row2">
          <div className="col2">
            <div className="card2">
              <div className="card2-content">
                <div className="card2-img">
                  <img
                    src={process.env.PUBLIC_URL + "asset/Featured wolp.jpg"}
                    alt="https://www.artstation.com/wlop"
                  />
                </div>
                <div className="text2-content">
                  <h2>
                    <a href="https://www.artstation.com/wlop">Wolp</a>
                  </h2>
                  <p>
                    Wolp is an artist who creates detailed and high-quality
                    illustrations.
                  </p>
                  <a href="https://www.artstation.com/wlop">Learn more</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col2">
            <div className="card2">
              <div className="card2-content">
                <div className="card2-img">
                  <img
                    src={process.env.PUBLIC_URL + "asset/nico-tab.jpg"}
                    alt="https://twitter.com/orideizu"
                  />
                </div>
                <div className="text2-content">
                  <h2>
                    <a href="https://twitter.com/orideizu">Tine</a>
                  </h2>
                  <p>
                    Arist from Japan who is widely knows for his anime-style
                    digital art.
                  </p>
                  <a href="https://twitter.com/orideizu">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
