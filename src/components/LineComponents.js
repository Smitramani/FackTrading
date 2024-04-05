import { Button } from "@mui/material";
import "./LineComponents.css";

const LineComponents = ({ antDesignamazonCircleFill, vector }) => {
  return (
    <div className="line-components">
      <div className="ant-designamazon-circle-fille-group">
        <img
          className="ant-designamazon-circle-fille-icon1"
          loading="eager"
          alt=""
          src={antDesignamazonCircleFill}
        />
        <div className="amazon-parent">
          <h2 className="amazon2">Amazon</h2>
          <div className="amazon-inc">Amazon inc.</div>
        </div>
      </div>
      <div className="line-components1" />
      <div className="down-buttons-wrapper">
        <div className="down-buttons" />
      </div>
      <div className="frame-parent18">
        <div className="ellipse-wrapper">
          <div className="ellipse-div" />
        </div>
        <div className="buying">
          <span>{`72% `}</span>
          <span className="buying1">buying</span>
        </div>
      </div>
      <div className="down-parent">
        <div className="down">-4.66 down</div>
        <img className="vector-icon4" loading="eager" alt="" src={vector} />
      </div>
      <div className="empty-space-wrapper">
        <div className="empty-space">$ 169.48</div>
      </div>
      <div className="sell-buttons-parent">
        <Button className="sell-buttons" variant="outlined">
          Sell
        </Button>
        <Button className="sell-buttons" variant="outlined">
          Buy
        </Button>
      </div>
    </div>
  );
};

export default LineComponents;
