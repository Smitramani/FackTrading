import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FRAME from "../components/FRAME";
import FrameN from "../components/FrameN";
import "./Desktop3.css";

const Desktop3 = () => {
  const navigate = useNavigate();

  const onBytesizePortfolioFrameClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBytesizePortfolioFrame1Click = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onBytesizePortfolioFrame2Click = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  const onBytesizePortfolioFrame3Click = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  const onBytesizePortfolioFrame4Click = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  return (
    <div className="desktop-3">
      <main className="frame-a">
        <div className="f-r-a-m-e-b">
          <div className="f-r-a-m-e-c">
            <h1 className="fackstocks2">Fackstocks</h1>
            <div className="frame-d">
              <div className="material-symbols-dashboard">
                <div className="user-panel2">User Panel</div>
                <div
                  className="bytesize-portfolio-frame"
                  onClick={onBytesizePortfolioFrameClick}
                >
                  <div className="union-frame">
                    <img
                      className="material-symbolsdashboard-out-icon1"
                      loading="eager"
                      alt=""
                      src="/materialsymbolsdashboardoutline.svg"
                    />
                    <div className="dashboard1">Dashboard</div>
                  </div>
                </div>
                <div
                  className="bytesize-portfolio-frame1"
                  onClick={onBytesizePortfolioFrame1Click}
                >
                  <img
                    className="material-symbolsdashboard-out-icon1"
                    loading="eager"
                    alt=""
                    src="/bytesizeportfolio.svg"
                  />
                  <div className="portfolio1">Portfolio</div>
                </div>
                <Button
                  className="bytesize-portfolio-frame2"
                  sx={{ width: 275 }}
                  variant="contained"
                >{`Trading & Market`}</Button>
                <div
                  className="bytesize-portfolio-frame3"
                  onClick={onBytesizePortfolioFrame2Click}
                >
                  <img
                    className="material-symbolsdashboard-out-icon1"
                    loading="eager"
                    alt=""
                    src="/materialsymbolswalletsharp.svg"
                  />
                  <div className="reasearch-portal2">Reasearch Portal</div>
                </div>
                <div
                  className="bytesize-portfolio-frame4"
                  onClick={onBytesizePortfolioFrame3Click}
                >
                  <img
                    className="material-symbolsdashboard-out-icon1"
                    loading="eager"
                    alt=""
                    src="/mdibanktransfer.svg"
                  />
                  <div className="wallet-transfer-pay2">
                    Wallet Transfer Pay
                  </div>
                </div>
                <div
                  className="bytesize-portfolio-frame5"
                  onClick={onBytesizePortfolioFrame4Click}
                >
                  <img
                    className="material-symbolsdashboard-out-icon1"
                    loading="eager"
                    alt=""
                    src="/carbonmachinelearningmodel.svg"
                  />
                  <div className="tutorial2">Tutorial</div>
                </div>
              </div>
            </div>
          </div>
          <FRAME
            union="/union.svg"
            iconContainer="/icon-container1.svg"
            groupFrame="/frame-1274.svg"
            propPadding="0px var(--padding-7xs) 0px var(--padding-9xs)"
          />
        </div>
        <FrameN />
      </main>
    </div>
  );
};

export default Desktop3;
