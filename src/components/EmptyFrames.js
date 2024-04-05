import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import "./EmptyFrames.css";

const EmptyFrames = ({ notification, ellipse40 }) => {
  return (
    <header className="empty-frames1">
      <div className="empty-frames-child" />
      <h2 className="hello-user2">Hello User,</h2>
      <div className="hello-user-text">
        <TextField className="hello-user-text-child" variant="outlined" />
        <img
          className="notification-icon2"
          loading="eager"
          alt=""
          src={notification}
        />
        <img
          className="hello-user-text-item"
          loading="eager"
          alt=""
          src={ellipse40}
        />
      </div>
    </header>
  );
};

export default EmptyFrames;
