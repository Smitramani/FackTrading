import FrameBalanceInvested from "./FrameBalanceInvested";
import EquityLabel from "./EquityLabel";
import "./LineSegment.css";

const LineSegment = () => {
  return (
    <div className="line-segment1">
      <div className="y-max-label1">
        <div className="balance-invested">
          <div className="frame-parent12">
            <nav className="portfolio-analysis-parent">
              <div className="portfolio-analysis">
                <i className="portfolio-analytics1">Portfolio Analytics</i>
              </div>
              <div className="line-chart">
                <div className="d-label">
                  <i className="d4">1D</i>
                  <div className="total-gain-label" />
                </div>
                <div className="y-max-label2" />
                <div className="d5">5D</div>
                <div className="y-max-label2" />
                <div className="d5">1M</div>
                <div className="y-max-label2" />
                <div className="d5">6M</div>
                <div className="y-max-label2" />
                <div className="d5">1Y</div>
                <div className="y-max-label2" />
              </div>
              <div className="total-equity-label">
                <div className="d5">5Y</div>
                <div className="y-max-label2" />
                <div className="d5">Max</div>
              </div>
            </nav>
            <FrameBalanceInvested
              group1220="/group-1220.svg"
              group1221="/group-1221.svg"
              propPadding="0px var(--padding-8xs) 0px 0px"
              propPadding1="var(--padding-3xs) 154px var(--padding-122xl)"
              propPadding2="var(--padding-xs) var(--padding-5xs) var(--padding-xs) var(--padding-xs)"
            />
          </div>
          <div className="am-pm-selector">
            <i className="am4">10 am</i>
            <i className="am4">11 am</i>
            <i className="am4">12 pm</i>
            <i className="am4">12 pm</i>
            <i className="am4">12 pm</i>
            <i className="am4">12 pm</i>
          </div>
        </div>
        <div className="portfolio-summary">
          <div className="total-gain-label1">
            <EquityLabel balance="Balance" prop="17,610,230" propColor="#000" />
          </div>
          <div className="total-gain-label1">
            <EquityLabel balance="Invested" prop="2,230,000" propColor="#000" />
          </div>
          <div className="portfolio-summary-inner">
            <EquityLabel
              balance="Total Gain"
              prop="+12,270"
              propColor="#008000"
            />
          </div>
          <textarea
            className="portfolio-summary-child"
            placeholder="Total Equity"
            rows={7}
            cols={18}
          />
        </div>
      </div>
    </div>
  );
};

export default LineSegment;
