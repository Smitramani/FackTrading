import { useMemo } from "react";
import { Button } from "@mui/material";
import "./ParentFrame.css";

const ParentFrame = ({
  rupee,
  prop,
  propPadding,
  propFlex,
  propGap,
  propAlignSelf,
  propColor,
}) => {
  const parentFrameStyle = useMemo(() => {
    return {
      padding: propPadding,
      flex: propFlex,
    };
  }, [propPadding, propFlex]);

  const childFramesStyle = useMemo(() => {
    return {
      gap: propGap,
      alignSelf: propAlignSelf,
    };
  }, [propGap, propAlignSelf]);

  const spanStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="parent-frame" style={parentFrameStyle}>
      <div className="child-frames" style={childFramesStyle}>
        <div className="sub-group-parent">
          <Button className="sub-group" variant="outlined" />
          <Button className="sub-group" variant="outlined" />
        </div>
        <div className="frame-border">
          <div className="frame-divider1">
            <div className="rupee">{rupee}</div>
            <div className="empty-space1">
              <span>(</span>
              <span className="span2" style={spanStyle}>
                {prop}
              </span>
              <span>)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentFrame;
