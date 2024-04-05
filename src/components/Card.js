import { useMemo } from "react";
import "./Card.css";

const Card = ({
  card1Mask,
  vector,
  mastercardLogo,
  frame,
  frame1,
  propFlex,
  propBackground,
  propMinWidth,
  propBackground1,
}) => {
  const card1Style = useMemo(() => {
    return {
      flex: propFlex,
      background: propBackground,
      minWidth: propMinWidth,
    };
  }, [propFlex, propBackground, propMinWidth]);

  const card1bgStyle = useMemo(() => {
    return {
      background: propBackground1,
    };
  }, [propBackground1]);

  return (
    <div className="card-1" style={card1Style}>
      <div className="card1bg" style={card1bgStyle} />
      <img className="card-1-mask" alt="" src={card1Mask} />
      <div className="b-parent">
        <div className="b">
          <div className="current-balance-parent">
            <div className="current-balance">Current Balance</div>
            <div className="vector">{vector}</div>
          </div>
        </div>
        <img
          className="mastercard-logo-icon"
          loading="eager"
          alt=""
          src={mastercardLogo}
        />
      </div>
      <div className="card-1-inner">
        <div className="frame-parent19">
          <div className="frame1">{frame}</div>
          <div className="frame2">{frame1}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
