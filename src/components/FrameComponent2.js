import { useMemo } from "react";
import { Button } from "@mui/material";
import "./FrameComponent2.css";

const FrameComponent2 = ({ propFlex }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className="frame-parent20" style={frameDiv1Style}>
      <div className="frame-parent21">
        <Button className="frame-button" variant="outlined" />
        <Button className="frame-button" variant="outlined" />
      </div>
      <div className="frame-border1">
        <div className="frame-divider2">
          <div className="microsoft-frame3">158.66 $</div>
          <div className="ant-frame">
            <span>(</span>
            <span className="span3">-0.68</span>
            <span>)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
