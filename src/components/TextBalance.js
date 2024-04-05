import { useMemo } from "react";
import "./TextBalance.css";

const TextBalance = ({
  nvidia1,
  nvidia,
  nVDA,
  lineConnectors,
  frameAmazonicon,
  group3,
  propBackgroundColor,
  propPadding,
  propWidth,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
}) => {
  const textBalanceStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const lineAxisStyle = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth,
    };
  }, [propPadding, propWidth]);

  const nvidiaStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const nVDAStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const lineConnectorsStyle = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const currentValueStyle = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const frameAmazoniconStyle = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  return (
    <div className="text-balance1" style={textBalanceStyle}>
      <div className="frame-dashboards">
        <div className="line-axis" style={lineAxisStyle}>
          <img className="nvidia-1-icon" loading="eager" alt="" src={nvidia1} />
          <i className="nvidia" style={nvidiaStyle}>
            {nvidia}
          </i>
        </div>
        <div className="ellipse-circle">
          <div className="nvda" style={nVDAStyle}>
            {nVDA}
          </div>
          <div className="line-connectors" style={lineConnectorsStyle}>
            {lineConnectors}
          </div>
        </div>
      </div>
      <div className="group-companies">
        <div className="arrowright-direction">
          <div className="current-value4" style={currentValueStyle}>
            Current Value
          </div>
          <div className="frame-amazonicon" style={frameAmazoniconStyle}>
            {frameAmazonicon}
          </div>
        </div>
        <img
          className="group-companies-child"
          loading="eager"
          alt=""
          src={group3}
        />
      </div>
    </div>
  );
};

export default TextBalance;
