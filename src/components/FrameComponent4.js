import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./FrameComponent4.css";

const FrameComponent4 = () => {
  return (
    <section className="user-settings-parent">
      <header className="user-settings">
        <div className="user-settings-child" />
        <div className="hello-user3">Hello User,</div>
        <div className="notifications-frame">
          <TextField className="notifications-frame-child" variant="outlined" />
          <img
            className="notification-icon3"
            loading="eager"
            alt=""
            src="/notification.svg"
          />
          <img
            className="virtual-trading-frame"
            loading="eager"
            alt=""
            src="/ellipse-40@2x.png"
          />
        </div>
      </header>
      <div className="learning-center-title-wrapper">
        <div className="learning-center-title">
          <div className="start-frame">
            <div className="your-interests-frame">
              <h1 className="your-learning-center">Your Learning Center</h1>
              <h3 className="become-a-better">
                Become a better trader in your own space by learning in your own
                specific way !
              </h3>
            </div>
          </div>
          <div className="personalized-learning">
            <h2 className="start-off-with">
              Start Off with your personalized interest
            </h2>
            <div className="my-learning-path">
              <div className="document-learn">
                <div className="frame-parent22">
                  <Button className="frame-child9" variant="contained" />
                  <div className="document">Document</div>
                </div>
                <div className="learn-by-the">
                  Learn by the marking of the experts
                </div>
              </div>
              <div className="document-learn1">
                <div className="frame-parent23">
                  <Button
                    className="frame-child10"
                    sx={{ width: 80 }}
                    variant="contained"
                  />
                  <div className="virtual-trading">Virtual Trading</div>
                </div>
                <div className="hassle-free-experience-of">
                  Hassle-free experience of trading
                </div>
              </div>
              <div className="document-learn2">
                <div className="frame-parent24">
                  <div className="frame-wrapper2">
                    <div className="ellipse-parent">
                      <div className="frame-child11" />
                      <img
                        className="carbonplay-filled-icon"
                        loading="eager"
                        alt=""
                        src="/carbonplayfilled.svg"
                      />
                    </div>
                  </div>
                  <div className="video-lecture">Video Lecture</div>
                </div>
                <div className="learn-from-the">
                  Learn from the video lectures by masters
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
