import "./Hero.css";
import errow from "../../assets/right-arrow.png";
import pause from "../../assets/pause.png";
import play from "../../assets/play.png";
const Hero = ({ count, status, Texts, setcount, setplay }) => {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <p>{Texts.Text1}</p>
          <p>{Texts.Text2}</p>
        </div>
        <div className="hero-explore">
          <p>Explore the features</p>
          <img src={errow} alt="" />
        </div>
        <div className="status">
          <div className="hero-dot-play">
            <ul>
              <li
                onClick={() => setcount(0)}
                className={count === 0 ? "hero-dot orange" : "hero-dot"}
              >
                
              </li>
              <li
                onClick={() => setcount(1)}
                className={count === 1 ? "hero-dot orange" : "hero-dot"}
              >
                
              </li>
              <li
                onClick={() => setcount(2)}
                className={count === 2 ? "hero-dot orange" : "hero-dot"}
              >
                
              </li>
            </ul>
          </div>
          <div className="video-play-icons">
            <img
              onClick={() => setplay(!status)}
              src={status ? pause : play}
              alt=""
            />
            <p>See the Video</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
