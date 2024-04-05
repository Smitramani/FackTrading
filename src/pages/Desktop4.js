import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FRAME from "../components/FRAME";
import FrameComponent from "../components/FrameComponent";
import LineSegment from "../components/LineSegment";
import "./Desktop4.css";

const Desktop4 = () => {
  const navigate = useNavigate();

  const onFRAMEClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFRAME1Click = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const onFRAME2Click = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  const onFRAME3Click = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  const onFRAME4Click = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  return (
    <div className="desktop-2">
      <main className="f-r-a-m-e-parent">
        <div className="f-r-a-m-e">
          <div className="f-r-a-m-e1">
            <div className="fackstocks-parent">
              <h1 className="fackstocks1">Fackstocks</h1>
              <div className="f-r-a-m-e2">
                <div className="f-r-a-m-e3">
                  <div className="user-panel1">User Panel</div>
                  <div className="f-r-a-m-e4" onClick={onFRAMEClick}>
                    <div className="f-r-a-m-e5">
                      <img
                        className="material-symbolsdashboard-out-icon"
                        loading="eager"
                        alt=""
                        src="/materialsymbolsdashboardoutline.svg"
                      />
                      <div className="dashboard">Dashboard</div>
                    </div>
                  </div>
                  <TextField className="f-r-a-m-e6" variant="outlined" />
                  <div className="f-r-a-m-e7" onClick={onFRAME1Click}>
                    <img
                      className="material-symbolsdashboard-out-icon"
                      loading="eager"
                      alt=""
                      src="/iconparkoutlinestockmarket.svg"
                    />
                    <div className="trading-market1">{`Trading & Market`}</div>
                  </div>
                  <div className="f-r-a-m-e8" onClick={onFRAME2Click}>
                    <img
                      className="material-symbolsdashboard-out-icon"
                      loading="eager"
                      alt=""
                      src="/materialsymbolswalletsharp.svg"
                    />
                    <div className="reasearch-portal1">Reasearch Portal</div>
                  </div>
                  <div className="f-r-a-m-e9" onClick={onFRAME3Click}>
                    <img
                      className="material-symbolsdashboard-out-icon"
                      loading="eager"
                      alt=""
                      src="/mdibanktransfer.svg"
                    />
                    <div className="wallet-transfer-pay1">
                      Wallet Transfer Pay
                    </div>
                  </div>
                  <div className="f-r-a-m-e10" onClick={onFRAME4Click}>
                    <img
                      className="material-symbolsdashboard-out-icon"
                      loading="eager"
                      alt=""
                      src="/carbonmachinelearningmodel.svg"
                    />
                    <div className="tutorial1">Tutorial</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FRAME
            union="/union.svg"
            iconContainer="/icon-container.svg"
            groupFrame="/frame-1274.svg"
            propPadding="0px 0px 0px var(--padding-9xs)"
          />
        </div>
        <section className="frame-section">
          <FrameComponent
            notification="/notification.svg"
            portfolioAnalytics="/ellipse-40@2x.png"
          />
          <LineSegment />
        </section>
      </main>
    </div>
  );
};

export default Desktop4;
