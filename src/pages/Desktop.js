import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FRAME from "../components/FRAME";
import FrameComponent4 from "../components/FrameComponent4";
import "./Desktop.css";

const Desktop = () => {
  const navigate = useNavigate();

  const onFRAMEClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFRAME1Click = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onFRAME2Click = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const onFRAME3Click = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  const onFRAME4Click = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  return (
    <div className="desktop-6">
      <main className="f-r-a-m-e11">
        <div className="f-r-a-m-e12">
          <div className="f-r-a-m-e13">
            <h3 className="fackstocks5">Fackstocks</h3>
            <div className="f-r-a-m-e14">
              <div className="f-r-a-m-e15">
                <div className="user-panel5">User Panel</div>
                <div className="f-r-a-m-e16" onClick={onFRAMEClick}>
                  <div className="dashboard-frame-set">
                    <img
                      className="material-symbolsdashboard-out-icon4"
                      loading="eager"
                      alt=""
                      src="/materialsymbolsdashboardoutline.svg"
                    />
                    <div className="dashboard4">Dashboard</div>
                  </div>
                </div>
                <div className="f-r-a-m-e17" onClick={onFRAME1Click}>
                  <img
                    className="material-symbolsdashboard-out-icon4"
                    loading="eager"
                    alt=""
                    src="/bytesizeportfolio.svg"
                  />
                  <div className="portfolio4">Portfolio</div>
                </div>
                <div className="f-r-a-m-e18" onClick={onFRAME2Click}>
                  <img
                    className="material-symbolsdashboard-out-icon4"
                    loading="eager"
                    alt=""
                    src="/iconparkoutlinestockmarket.svg"
                  />
                  <div className="trading-market4">{`Trading & Market`}</div>
                </div>
                <div className="f-r-a-m-e19" onClick={onFRAME3Click}>
                  <img
                    className="material-symbolsdashboard-out-icon4"
                    loading="eager"
                    alt=""
                    src="/materialsymbolswalletsharp.svg"
                  />
                  <div className="reasearch-portal4">Reasearch Portal</div>
                </div>
                <div className="f-r-a-m-e20" onClick={onFRAME4Click}>
                  <img
                    className="material-symbolsdashboard-out-icon4"
                    loading="eager"
                    alt=""
                    src="/mdibanktransfer.svg"
                  />
                  <div className="wallet-transfer-pay4">
                    Wallet Transfer Pay
                  </div>
                </div>
                <TextField
                  className="f-r-a-m-e21"
                  sx={{ width: 275 }}
                  variant="outlined"
                />
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
        <FrameComponent4 />
      </main>
    </div>
  );
};

export default Desktop;
