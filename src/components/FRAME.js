import { useMemo } from "react";
import "./FRAME.css";

const FRAME = ({ union, iconContainer, groupFrame, propPadding }) => {
  const fRAMEStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="f-r-a-m-e22" style={fRAMEStyle}>
      <div className="f-r-a-m-e23">
        <div className="f-r-a-m-e24">
          <div className="f-r-a-m-e25">
            <div className="f-r-a-m-e26">
              <div className="thoughts-time">Thoughts Time</div>
            </div>
            <div className="if-you-arent">
              If you aren’t willing to own a stock for 10 years, don’t even
              think about owning it for 10 minutes.
            </div>
            <div className="f-r-a-m-e27">
              <img className="union-icon" alt="" src={union} />
              <img
                className="icon-container"
                loading="eager"
                alt=""
                src={iconContainer}
              />
              <div className="ellipse-shape1" />
            </div>
          </div>
        </div>
        <div className="group-frame-parent">
          <img
            className="group-frame-icon"
            loading="eager"
            alt=""
            src={groupFrame}
          />
          <div className="logout">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default FRAME;
