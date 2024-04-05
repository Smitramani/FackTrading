import { useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FRAME from "../components/FRAME";
import Card from "../components/Card";
import FrameComponent3 from "../components/FrameComponent3";
import ParentFrame from "../components/ParentFrame";
import FrameComponent2 from "../components/FrameComponent2";
import "./Desktop1.css";

const Desktop1 = () => {
  const navigate = useNavigate();

  const onSSFrameClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSSFrame1Click = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onSSFrame2Click = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const onSSFrame3Click = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  const onSSFrame4Click = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  return (
    <div className="desktop-5">
      <main className="amazon-vector-group">
        <div className="amazon-vector-group-child" />
        <div className="j-s-w-vector-group">
          <div className="microsoft-frame1">
            <div className="fackstocks4">Fackstocks</div>
            <div className="b-frame-group">
              <div className="vector-vector-frame">
                <div className="user-panel4">User Panel</div>
                <div className="s-s-frame" onClick={onSSFrameClick}>
                  <div className="b-b-frame">
                    <img
                      className="material-symbolsdashboard-out-icon3"
                      loading="eager"
                      alt=""
                      src="/materialsymbolsdashboardoutline.svg"
                    />
                    <div className="dashboard3">Dashboard</div>
                  </div>
                </div>
                <div className="s-s-frame1" onClick={onSSFrame1Click}>
                  <img
                    className="material-symbolsdashboard-out-icon3"
                    loading="eager"
                    alt=""
                    src="/bytesizeportfolio.svg"
                  />
                  <div className="portfolio3">Portfolio</div>
                </div>
                <div className="s-s-frame2" onClick={onSSFrame2Click}>
                  <img
                    className="material-symbolsdashboard-out-icon3"
                    loading="eager"
                    alt=""
                    src="/iconparkoutlinestockmarket.svg"
                  />
                  <div className="trading-market3">{`Trading & Market`}</div>
                </div>
                <div className="s-s-frame3" onClick={onSSFrame3Click}>
                  <img
                    className="material-symbolsdashboard-out-icon3"
                    loading="eager"
                    alt=""
                    src="/materialsymbolswalletsharp.svg"
                  />
                  <div className="reasearch-portal3">Reasearch Portal</div>
                </div>
                <Button
                  className="s-s-frame4"
                  sx={{ width: 275 }}
                  variant="contained"
                >
                  Wallet Transfer Pay
                </Button>
                <div className="s-s-frame5" onClick={onSSFrame4Click}>
                  <img
                    className="material-symbolsdashboard-out-icon3"
                    loading="eager"
                    alt=""
                    src="/carbonmachinelearningmodel.svg"
                  />
                  <div className="tutorial4">Tutorial</div>
                </div>
              </div>
            </div>
          </div>
          <FRAME
            union="/union.svg"
            iconContainer="/icon-container2.svg"
            groupFrame="/frame-1274.svg"
            propPadding="0px var(--padding-7xs) 0px var(--padding-9xs)"
          />
        </div>
        <section className="frame-frame-frame">
          <div className="s-frame-b">
            <div className="vector-f">
              <div className="frame-ant-design-text">
                <div className="frame-text-frame">
                  <div className="hello-user">Hello User,</div>
                  <div className="b-frame-s">
                    <TextField className="b-frame-s-child" variant="outlined" />
                    <img
                      className="notification-icon"
                      loading="eager"
                      alt=""
                      src="/notification.svg"
                    />
                    <img
                      className="b-frame-s-item"
                      loading="eager"
                      alt=""
                      src="/ellipse-40@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="frame-frame-frame-b">
                <div className="frame-frame-frame-frame">
                  <div className="frame-s-frame">
                    <div className="your-payment-cards">Your Payment Cards</div>
                    <input className="mingcuteedit-line" type="checkbox" />
                  </div>
                  <div className="vector-group">
                    <Card
                      card1Mask="/card-1-mask.svg"
                      vector="$5,750,20"
                      mastercardLogo="/mastercard-logo.svg"
                      frame="5282 3456 7890 1289"
                      frame1="09/25"
                      propFlex="1"
                      propBackground="linear-gradient(177.23deg, #9c2cf3, #3a49f9)"
                      propBackground1="linear-gradient(177.23deg, #9c2cf3, #3a49f9)"
                    />
                  </div>
                </div>
                <Card
                  card1Mask="/card-1-mask.svg"
                  vector="$4,570,80"
                  mastercardLogo="/mastercard-logo.svg"
                  frame="5294 2436 4780 2468"
                  frame1="12/24"
                  propFlex="0.8413"
                  propBackground="linear-gradient(167.6deg, #e42c66, #f55b46)"
                  propMinWidth="205px"
                  propBackground1="linear-gradient(167.6deg, #e42c66, #f55b46)"
                />
              </div>
            </div>
            <div className="s-frame-b-inner">
              <div className="frame-parent4">
                <FrameComponent3
                  balance="Balance"
                  prop="17,610,230"
                  propBorderRight="3px solid var(--color-lavender-100)"
                  propColor="#000"
                />
                <FrameComponent3
                  balance="Invested"
                  prop="2,230,000"
                  propBorderRight="3px solid var(--color-lavender-100)"
                  propColor="#000"
                />
                <FrameComponent3
                  balance="Total Gain"
                  prop="+12,270"
                  propBorderRight="unset"
                  propColor="#008000"
                />
                <div className="total-equity-parent">
                  <div className="total-equity">Total Equity</div>
                  <div className="frame">
                    <div className="div12">19,930,230</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="your-top-portfolio-stocks-parent">
              <div className="your-top-portfolio">
                Your Top Portfolio Stocks
              </div>
              <div className="frame-parent5">
                <div className="simpleiconshdfcbank-parent">
                  <div className="simpleiconshdfcbank">
                    <div className="simpleiconshdfcbank-inner">
                      <div className="group-parent">
                        <img
                          className="group-icon"
                          loading="eager"
                          alt=""
                          src="/group.svg"
                        />
                        <div className="amazon">Amazon</div>
                      </div>
                    </div>
                    <img
                      className="vector-icon"
                      loading="eager"
                      alt=""
                      src="/vector1.svg"
                    />
                  </div>
                  <ParentFrame
                    rupee="158.66 $"
                    prop="-0.68"
                    propPadding="var(--padding-11xs) 0px 0px"
                    propGap="21px 0px"
                    propColor="#ff0000"
                  />
                </div>
                <div className="frame-parent6">
                  <div className="frame-parent7">
                    <div className="simple-iconshdfcbank-parent">
                      <img
                        className="simple-iconshdfcbank"
                        loading="eager"
                        alt=""
                        src="/simpleiconshdfcbank.svg"
                      />
                      <div className="hdfc">HDFC</div>
                    </div>
                    <div className="vector-container-wrapper">
                      <img
                        className="vector-container-icon"
                        loading="eager"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                  </div>
                  <ParentFrame
                    rupee="910.66 ₹"
                    prop="-0.32"
                    propPadding="var(--padding-10xs) 0px 0px"
                    propFlex="1"
                    propGap="26px"
                    propAlignSelf="stretch"
                    propColor="#008000"
                  />
                </div>
                <div className="frame-parent8">
                  <div className="frame-wrapper1">
                    <div className="frame-parent9">
                      <div className="simple-iconshdfcbank-parent">
                        <img
                          className="simple-iconshdfcbank"
                          loading="eager"
                          alt=""
                          src="/grommeticonsapple.svg"
                        />
                        <div className="apple">Apple</div>
                      </div>
                      <img
                        className="vector-icon1"
                        loading="eager"
                        alt=""
                        src="/vector1.svg"
                      />
                    </div>
                  </div>
                  <FrameComponent2 propFlex="1" />
                </div>
              </div>
            </div>
            <div className="mditire-j-s-w">
              <div className="frames">
                <div className="amazon-vector">
                  <div className="frame-s-frame">
                    <img
                      className="simple-iconshdfcbank"
                      loading="eager"
                      alt=""
                      src="/mditire.svg"
                    />
                    <div className="jsw">JSW</div>
                  </div>
                  <div className="microsoft-text-parent">
                    <Button className="microsoft-text" variant="outlined" />
                    <Button className="microsoft-text" variant="outlined" />
                  </div>
                </div>
                <div className="layout-frame">
                  <div className="vector-parent">
                    <img
                      className="empty-frame-icon"
                      loading="eager"
                      alt=""
                      src="/vector-3.svg"
                    />
                    <div className="frame-divider">
                      <div className="div13">66.16 $</div>
                      <div className="div14">
                        <span>(</span>
                        <span className="span">+1.67</span>
                        <span>)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frames1">
                <div className="microsoft-1-group">
                  <img
                    className="simple-iconshdfcbank"
                    loading="eager"
                    alt=""
                    src="/microsoft-11.svg"
                  />
                  <div className="microsoft">Microsoft</div>
                  <div className="microsoft-text-parent">
                    <Button className="microsoft-text" variant="outlined" />
                    <Button className="microsoft-text" variant="outlined" />
                  </div>
                </div>
                <div className="frames-inner">
                  <div className="vector-parent">
                    <img
                      className="empty-frame-icon"
                      loading="eager"
                      alt=""
                      src="/vector-4.svg"
                    />
                    <div className="frame-divider">
                      <div className="div15">610.79 $</div>
                      <div className="div14">
                        <span>(</span>
                        <span className="span1">+7.88</span>
                        <span>)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frames2">
                <div className="frames-child">
                  <div className="frame-parent10">
                    <div className="frame-s-frame">
                      <img
                        className="ant-designamazon-circle-fille-icon"
                        loading="eager"
                        alt=""
                        src="/antdesignamazoncirclefilled.svg"
                      />
                      <div className="amazon">Amazon</div>
                    </div>
                    <div className="vector-wrapper">
                      <img
                        className="vector-icon3"
                        loading="eager"
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                  </div>
                </div>
                <FrameComponent2 propFlex="unset" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Desktop1;
