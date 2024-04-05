import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FRAME from "../components/FRAME";
import EmptyFrames from "../components/EmptyFrames";
import LineComponents from "../components/LineComponents";
import "./Desktop2.css";

const Desktop2 = () => {
  const navigate = useNavigate();

  const onFRAMEDClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const onBytesizeportfolioFRAMEClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBytesizeportfolioFRAME1Click = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onBytesizeportfolioFRAME3Click = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  const onBytesizeportfolioFRAME4Click = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  return (
    <div className="desktop-4">
      <main className="f-r-a-m-e-a">
        <div className="f-r-a-m-e-b1">
          <div className="f-r-a-m-e-c1">
            <h1 className="fackstocks3">Fackstocks</h1>
            <div className="f-r-a-m-e-d" onClick={onFRAMEDClick}>
              <div className="material-symbols-frame">
                <div className="user-panel3">User Panel</div>
                <div
                  className="bytesizeportfolio-f-r-a-m-e"
                  onClick={onBytesizeportfolioFRAMEClick}
                >
                  <div className="dashboard-frame">
                    <img
                      className="material-symbolsdashboard-out-icon2"
                      loading="eager"
                      alt=""
                      src="/materialsymbolsdashboardoutline.svg"
                    />
                    <div className="dashboard2">Dashboard</div>
                  </div>
                </div>
                <div
                  className="bytesizeportfolio-f-r-a-m-e1"
                  onClick={onBytesizeportfolioFRAME1Click}
                >
                  <img
                    className="material-symbolsdashboard-out-icon2"
                    loading="eager"
                    alt=""
                    src="/bytesizeportfolio.svg"
                  />
                  <div className="portfolio2">Portfolio</div>
                </div>
                <div className="bytesizeportfolio-f-r-a-m-e2">
                  <img
                    className="material-symbolsdashboard-out-icon2"
                    loading="eager"
                    alt=""
                    src="/iconparkoutlinestockmarket.svg"
                  />
                  <div className="trading-market2">{`Trading & Market`}</div>
                </div>
                <Button
                  className="bytesizeportfolio-f-r-a-m-e3"
                  sx={{ width: 275 }}
                  variant="contained"
                >
                  Reasearch Portal
                </Button>
                <div
                  className="bytesizeportfolio-f-r-a-m-e4"
                  onClick={onBytesizeportfolioFRAME3Click}
                >
                  <img
                    className="material-symbolsdashboard-out-icon2"
                    loading="eager"
                    alt=""
                    src="/mdibanktransfer.svg"
                  />
                  <div className="wallet-transfer-pay3">
                    Wallet Transfer Pay
                  </div>
                </div>
                <div
                  className="bytesizeportfolio-f-r-a-m-e5"
                  onClick={onBytesizeportfolioFRAME4Click}
                >
                  <img
                    className="material-symbolsdashboard-out-icon2"
                    loading="eager"
                    alt=""
                    src="/carbonmachinelearningmodel.svg"
                  />
                  <div className="tutorial3">Tutorial</div>
                </div>
              </div>
            </div>
          </div>
          <FRAME
            union="/union.svg"
            iconContainer="/icon-container.svg"
            groupFrame="/frame-1274.svg"
            propPadding="0px var(--padding-7xs) 0px var(--padding-9xs)"
          />
        </div>
        <section className="empty-frames">
          <EmptyFrames
            notification="/notification.svg"
            ellipse40="/ellipse-40@2x.png"
          />
          <div className="your-watchlist-text">
            <h1 className="your-watchlist">Your Watchlist</h1>
            <div className="today-graph-frame">
              <div className="markets">
                <div className="week-range">
                  <div className="sentiment">
                    <div className="markets1">Markets</div>
                  </div>
                  <div className="sentiment1">
                    <div className="week-range1">52 Week Range</div>
                  </div>
                  <div className="sentiment2">Sentiment</div>
                  <div className="sentiment3">
                    <div className="changes">Changes</div>
                  </div>
                  <div className="sentiment4">
                    <div className="today-graph">Today Graph</div>
                  </div>
                  <div className="current-price">Current Price</div>
                </div>
              </div>
              <div className="amazon-icon-group">
                <LineComponents
                  antDesignamazonCircleFill="/antdesignamazoncirclefilled.svg"
                  vector="/vector.svg"
                />
                <LineComponents
                  antDesignamazonCircleFill="/antdesignamazoncirclefilled.svg"
                  vector="/vector.svg"
                />
                <LineComponents
                  antDesignamazonCircleFill="/antdesignamazoncirclefilled.svg"
                  vector="/vector.svg"
                />
                <LineComponents
                  antDesignamazonCircleFill="/antdesignamazoncirclefilled.svg"
                  vector="/vector.svg"
                />
                <LineComponents
                  antDesignamazonCircleFill="/antdesignamazoncirclefilled.svg"
                  vector="/vector.svg"
                />
                <LineComponents
                  antDesignamazonCircleFill="/antdesignamazoncirclefilled.svg"
                  vector="/vector.svg"
                />
                <LineComponents
                  antDesignamazonCircleFill="/antdesignamazoncirclefilled.svg"
                  vector="/vector.svg"
                />
                <LineComponents
                  antDesignamazonCircleFill="/antdesignamazoncirclefilled.svg"
                  vector="/vector.svg"
                />
                <LineComponents
                  antDesignamazonCircleFill="/antdesignamazoncirclefilled.svg"
                  vector="/vector.svg"
                />
                <LineComponents
                  antDesignamazonCircleFill="/antdesignamazoncirclefilled.svg"
                  vector="/vector.svg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Desktop2;
