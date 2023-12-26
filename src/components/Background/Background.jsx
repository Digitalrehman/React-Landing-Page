import "./Background.css";
import video from "../../assets/video.mp4";
import img1 from "../../assets/car-1.jpg";
import img2 from "../../assets/car-2.jpg";
import img3 from "../../assets/car-3.jpg";
const Background = ({ count, status }) => {
  if (status) {
    return (
      <video className="background" muted loop autoPlay>
        <source src={video} type="video/mp4" />
      </video>
    );
  } else if (count === 0) {
    return <img src={img1} className="background" alt="" />;
  } else if (count === 1) {
    return <img src={img2} className="background" alt="" />;
  } else if (count === 2) {
    return <img src={img3} className="background" alt="" />;
  }
};

export default Background;
