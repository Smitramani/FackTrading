import { useMemo } from "react";
import "./FrameComponent3.css";

const FrameComponent3 = ({ balance, prop, propBorderRight, propColor }) => {
  const frameDivStyle = useMemo(() => {
    return {
      borderRight: propBorderRight,
    };
  }, [propBorderRight]);

  const div1Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="balance-parent" style={frameDivStyle}>
      <div className="balance2">{balance}</div>
      <div className="wrapper3">
        <div className="div35" style={div1Style}>
          {prop}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
