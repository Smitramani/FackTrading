import { useMemo } from "react";
import "./EquityLabel.css";

const EquityLabel = ({ balance, prop, propColor }) => {
  const divStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="equity-label">
      <div className="balance1">{balance}</div>
      <div className="wrapper1">
        <div className="div17" style={divStyle}>
          {prop}
        </div>
      </div>
    </div>
  );
};

export default EquityLabel;
