import { useMemo } from "react";
import "./FrameBalanceInvested.css";

const FrameBalanceInvested = ({
  group1220,
  group1221,
  propPadding,
  propPadding1,
  propPadding2,
}) => {
  const frameBalanceInvestedStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const amPmLabelsStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const investedLabelStyle = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div className="frame-balance-invested" style={frameBalanceInvestedStyle}>
      <div className="am-pm-labels-parent">
        <div className="am-pm-labels" style={amPmLabelsStyle}>
          <img className="am-pm-labels-child" alt="" src={group1220} />
          <div className="invested-label" style={investedLabelStyle}>
            <div className="jan-30-011216">Jan 30, 01:12:16 AM</div>
            <div className="text-a-m">14,032.56</div>
          </div>
          <div className="ellipse-shape" />
        </div>
        <img className="frame-child1" loading="eager" alt="" src={group1221} />
        <div className="line-separator" />
      </div>
      <div className="empty-frame-frame">
        <div className="balance-section">$15000</div>
        <div className="balance-section">$12000</div>
        <div className="balance-section2">$9000</div>
        <div className="balance-section2">$6000</div>
        <div className="balance-section2">$3000</div>
        <div className="balance-section5">$0</div>
      </div>
    </div>
  );
};

export default FrameBalanceInvested;
