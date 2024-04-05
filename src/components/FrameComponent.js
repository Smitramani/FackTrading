import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import "./FrameComponent.css";

const FrameComponent = ({ notification, portfolioAnalytics }) => {
  return (
    <div className="rectangle-parent">
      <div className="rectangle-div" />
      <h2 className="hello-user1">Hello User,</h2>
      <div className="frame-parent11">
        <TextField className="group-textfield" variant="outlined" />
        <img
          className="notification-icon1"
          loading="eager"
          alt=""
          src={notification}
        />
        <img
          className="portfolio-analytics-icon"
          loading="eager"
          alt=""
          src={portfolioAnalytics}
        />
      </div>
    </div>
  );
};

export default FrameComponent;
