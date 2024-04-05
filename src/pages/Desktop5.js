import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FRAME from "../components/FRAME";
import FrameComponent from "../components/FrameComponent";
import TextBalance from "../components/TextBalance";
import FrameBalanceInvested from "../components/FrameBalanceInvested";
import FrameComponent1 from "../components/FrameComponent1";
import "./Desktop5.css";
import CurrentDateTime from './Date';

const Desktop5 = () => {
  const navigate = useNavigate();

  const onJanuaryDotContainerClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onJanuaryDotContainer1Click = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const onJanuaryDotContainer2Click = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  const onJanuaryDotContainer3Click = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  const onJanuaryDotContainer4Click = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  return (
    <div className="desktop-1">
      <main className="layout-top">
        <div className="january-group">
          <div className="balance-box">
            <h1 className="fackstocks">Fackstocks</h1>
            <div className="graph-line">
              <div className="max-indicator">
                <div className="user-panel">User Panel</div>
                <TextField
                  className="transition-arrow"
                  sx={{ width: 275 }}
                  variant="outlined"
                />
                <div
                  className="january-dot"
                  onClick={onJanuaryDotContainerClick}
                >
                  <img
                    className="bytesizeportfolio-icon"
                    loading="eager"
                    alt=""
                    src="/bytesizeportfolio.svg"
                  />
                  <div className="portfolio">Portfolio</div>
                </div>
                <div
                  className="january-dot1"
                  onClick={onJanuaryDotContainer1Click}
                >
                  <img
                    className="bytesizeportfolio-icon"
                    loading="eager"
                    alt=""
                    src="/iconparkoutlinestockmarket.svg"
                  />
                  <div className="trading-market">{`Trading & Market`}</div>
                </div>
                <div
                  className="january-dot2"
                  onClick={onJanuaryDotContainer2Click}
                >
                  <img
                    className="bytesizeportfolio-icon"
                    loading="eager"
                    alt=""
                    src="/materialsymbolswalletsharp.svg"
                  />
                  <div className="reasearch-portal">Reasearch Portal</div>
                </div>
                <div
                  className="january-dot3"
                  onClick={onJanuaryDotContainer3Click}
                >
                  <img
                    className="bytesizeportfolio-icon"
                    loading="eager"
                    alt=""
                    src="/mdibanktransfer.svg"
                  />
                  <div className="wallet-transfer-pay">Wallet Transfer Pay</div>
                </div>
                <div
                  className="january-dot4"
                  onClick={onJanuaryDotContainer4Click}
                >
                  <img
                    className="bytesizeportfolio-icon"
                    loading="eager"
                    alt=""
                    src="/carbonmachinelearningmodel.svg"
                  />
                  <div className="tutorial">Tutorial</div>
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
        <section className="january-frame">
          <FrameComponent
            notification="/notification.svg"
            portfolioAnalytics="/ellipse-40@2x.png"
          />
          <div className="mastercard-node">
            <div className="line-segment">
              <div className="amazonicon-frame">
                <i className="my-stocks">My Stocks</i>
                <nav className="frame-balance">
                  <TextBalance
                    nvidia1="/nvidia-1.svg"
                    nvidia="Nvidia"
                    nVDA="NVDA"
                    lineConnectors="+5.63"
                    frameAmazonicon="203.65"
                    group3="/group-3.svg"
                    propBackgroundColor="#a6f7e2"
                    propColor="#2c2c2c"
                    propColor1="#2c2c2c"
                    propColor2="#77b900"
                    propColor3="#838383"
                    propColor4="#2c2c2c"
                  />
                  <TextBalance
                    nvidia1="/meta1-1.svg"
                    nvidia="Meta"
                    nVDA="Meta"
                    lineConnectors="-4.44"
                    frameAmazonicon="151.74"
                    group3="/group-3-1.svg"
                    propBackgroundColor="#b79bff"
                    propPadding="0px var(--padding-10xs) 0px 0px"
                    propWidth="unset"
                    propColor="#fff"
                    propColor1="#fff"
                    propColor2="#ff2f2f"
                    propColor3="rgba(255, 255, 255, 0.8)"
                    propColor4="#fff"
                  />
                  <TextBalance
                    nvidia1="/teslamotors1-1.svg"
                    nvidia="Tesla Inc"
                    nVDA="TSLA"
                    lineConnectors="+17.63"
                    frameAmazonicon="177.90"
                    group3="/group-3-2@2x.png"
                    propBackgroundColor="#ffe5a5"
                    propPadding="unset"
                    propWidth="62px"
                    propColor="#2c2c2c"
                    propColor1="#2c2c2c"
                    propColor2="#77b900"
                    propColor3="#838383"
                    propColor4="#2c2c2c"
                  />
                  <div className="text-balance">
                    <div className="frame-parent">
                      <div className="frame-group">
                        <div className="bytesizeportfolio-icon">
                          <img
                            className="px-apple-logo-black-1-icon"
                            alt=""
                            src="/391pxapple-logo-black-1@2x.png"
                          />
                          <img
                            className="px-apple-logo-black-2-icon"
                            alt=""
                            src="/391pxapple-logo-black-2@2x.png"
                          />
                        </div>
                        <i className="apple-inc">Apple Inc</i>
                      </div>
                      <div className="aapl-parent">
                        <div className="aapl">AAPL</div>
                        <div className="div">+23.41</div>
                      </div>
                    </div>
                    <div className="frame-container">
                      <div className="current-value-parent">
                        <div className="current-value">Current Value</div>
                        <div className="div1">145.93</div>
                      </div>
                      <img
                        className="frame-child"
                        loading="eager"
                        alt=""
                        src="/group-3-3@2x.png"
                      />
                    </div>
                  </div>
                  <div className="line-separators">
                    <img
                      className="amd-logo-1-1-icon"
                      loading="eager"
                      alt=""
                      src="/amdlogo1-1.svg"
                    />
                    <div className="current-value1">Current Value</div>
                    <div className="text-watchlist">75.40</div>
                    <img
                      className="line-separators-child"
                      loading="eager"
                      alt=""
                      src="/group-3-4.svg"
                    />
                    <div className="line-line-parent">
                      <div className="frame-top-stock">
                        <div className="amd">AMD</div>
                        <div className="tesla-frame">
                          <div className="invested-value-frame">
                            <i className="advanced-micro-devices">
                              Advanced Micro Devices, Inc.
                            </i>
                            <div className="d-line">
                              <img
                                className="bytesizeportfolio-icon"
                                alt=""
                                src="/arrowright.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-m-label">
                          <div className="am-label">-2.01</div>
                        </div>
                        <div className="jan-label" />
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="frame-amazoncom-a-m-z-n">
                <div className="frame-coca-cola-k-o">
                  <div className="root-frame">
                    <div className="stock-frame">
                      <div className="stock-frame1">
                        <div className="top-stock">Top Stock</div>
                        <div className="tesla-frame1">
                          <div className="invested-value-frame1">
                            <div className="frame-group">
                              <img
                                className="bytesizeportfolio-icon"
                                loading="eager"
                                alt=""
                                src="/teslamotors1-1-1.svg"
                              />
                              <i className="tesla-inc">Tesla Inc</i>
                            </div>
                            <div className="aapl-parent">
                              <div className="tsla">TSLA</div>
                              <div className="div">+17.63</div>
                            </div>
                          </div>
                          <div className="value-frame">
                            <div className="current-value-parent">
                              <div className="invested-value">
                                Invested Value
                              </div>
                              <div className="div2">29.34</div>
                            </div>
                            <div className="current-value-parent">
                              <div className="current-value">Current Value</div>
                              <div className="div3">177.90</div>
                            </div>
                            <img
                              className="frame-child"
                              loading="eager"
                              alt=""
                              src="/group-3-5@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="watchlist-frame">
                      <div className="amazonicon-frame1">
                        <div className="mastercard-frame">
                          <div className="invested-value-frame1">
                            <div className="frame-group">
                              <img
                                className="bytesizeportfolio-icon"
                                loading="eager"
                                alt=""
                                src="/teslamotors1-1-2.svg"
                              />
                              <i className="tesla-inc">Tesla Inc</i>
                            </div>
                            <div className="aapl-parent">
                              <div className="tsla">TSLA</div>
                              <div className="div">+17.63</div>
                            </div>
                          </div>
                          <div className="value-frame">
                            <div className="invested-value-group">
                              <div className="invested-value1">
                                Invested Value
                              </div>
                              <i className="i">$29.34</i>
                            </div>
                            <div className="current-value-container">
                              <div className="invested-value1">
                                Current Value
                              </div>
                              <i className="i1">$177.90</i>
                            </div>
                            <img
                              className="frame-child"
                              loading="eager"
                              alt=""
                              src="/group-3-5@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-frames-amazon-coca-bmw-m">
                      <TextField
                        className="text-label-container"
                        sx={{ width: 316 }}
                        variant="outlined"
                      />
                      <img
                        className="rectangle-frame-data"
                        loading="eager"
                        alt=""
                        src="/frame-1215@2x.png"
                      />
                    </div>
                    <div className="line-frame-text">
                      <div className="group-frame-watchlist">
                        <div className="frame-amazon-coca-bmw-microsof">
                          <div className="container-text-data-parent">
                            <div className="container-text-data">
                              <i className="balance">Balance</i>
                              <TextField
                                className="container-text-data-child"
                                variant="outlined"
                              />
                            </div>
                            <button className="arrow-shape">
                              <div className="empty-box">+5.63%</div>
                            </button>
                          </div>
                          <i className="invested">Invested</i>
                        </div>
                        <TextField
                          className="container-text-data-child"
                          variant="outlined"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mastercard-frame1">
                    <div className="vertical-connection">
                      <div className="horizontal-grouping">
                        <div className="icon-representation">
                          <div className="horizontal-grouping">
                            <div className="plus-sign">
                              <button className="mastercard-icon">
                                <i className="nasdaq">NASDAQ</i>
                              </button>
                              <div className="visual-hierarchy">
                                <i className="sse">SSE</i>
                              </div>
                              <div className="top-stocks-frame">
                                <i className="euronext">Euronext</i>
                              </div>
                              <div className="invested-value-frame4">
                                <i className="bse">BSE</i>
                              </div>
                            </div>
                            <div className="arrows-frame">
                              <div className="company-frame-node">
                                <i className="d">1D</i>
                                <div className="january-group1" />
                              </div>
                              <div className="date-frame" />
                              <div className="m">5D</div>
                              <div className="date-frame" />
                              <div className="m">1M</div>
                              <div className="date-frame" />
                              <div className="m">6M</div>
                            </div>
                          </div>
                          <div className="date-frame" />
                          <div className="rectangle-frame">
                            <div className="y">1Y</div>
                          </div>
                        </div>
                        <div className="amazon-mastercard">
                          <div className="minus-frame">
                            <i className="i2">11,700</i>
                            <i className="stock-list">11,650</i>
                            <i className="stock-list">11,600</i>
                            <i className="stock-list">11,550</i>
                          </div>
                          <img
                            className="amazon-mastercard-child"
                            loading="eager"
                            alt=""
                            src="/group-1213.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="frame-current-value">
                      <div className="frame-tesla-inc">
                        <div className="frame-t-s-l-a">
                          <div className="line-d">
                            <i className="am">10 am</i>
                          </div>
                          <div className="line-mastercard-inc">
                            <div className="high">High</div>
                            <i className="top-label">11,691.89</i>
                          </div>
                          <div className="line-mastercard-inc">
                            <div className="high">Low</div>
                            <i className="top-label">11,470.47</i>
                          </div>
                        </div>
                        <div className="tesla-frame4">
                          <div className="invested-value2">
                            <div className="tesla-name">
                              <i className="am">11 am</i>
                              <i className="am">12 pm</i>
                            </div>
                          </div>
                          <div className="current-value-parent">
                            <div className="prev-close-avr">
                              Prev close (Avr 28 Days)
                            </div>
                            <i className="top-label">11,512.41</i>
                          </div>
                          <div className="line-mastercard-inc">
                            <div className="high">Open</div>
                            <i className="top-label">11,690.11</i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mastercard-frame3">
                    <div className="frame-div">
                      <div className="snapshot-wrapper">
                        <i className="snapshot">Snapshot</i>
                      </div>
                      <div className="portfolio-analytics-frame-parent">
                        <div className="current-value-parent">
                          <div className="top-stock">Prev Close</div>
                          <i className="logo-frame-set">12,051.48</i>
                        </div>
                        <div className="current-value-parent">
                          <div className="top-stock">Open</div>
                          <i className="logo-frame-set">12.000.21</i>
                        </div>
                      </div>
                      <div className="amz-frame">
                        <div className="coca-cola-frame" />
                      </div>
                      <div className="frame-wrapper">
                        <div className="bmw-frame-parent">
                          <div className="bmw-frame">
                            <div className="microsoft-frame">
                              <i className="i6">11,999.87</i>
                              <i className="i7">12,248.15</i>
                            </div>
                            <div className="mastercard-frame4">
                              <div className="day-low">Day Low</div>
                              <div className="day-high">Day High</div>
                              <div className="frame-watchlist" />
                            </div>
                            <div className="frame-top-stock1" />
                          </div>
                          <div className="frame-invested-value-wrapper">
                            <i className="frame-invested-value">12.166.60</i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mastercard-frame-inner">
                      <div className="frame-parent1">
                        <div className="frame-parent2">
                          <div className="microsoft-frame">
                            <div className="line-y-parent">
                              <i className="line-y">10,440.64</i>
                              <div className="group-jan">
                                <div className="week-low">52 Week Low</div>
                                <div className="frame-amazoncom-inc" />
                              </div>
                            </div>
                            <div className="frame-coca-cola-co">
                              <i className="plus">15,265.42</i>
                              <div className="week-high">{`52 Week High `}</div>
                            </div>
                          </div>
                          <div className="frame-item" />
                        </div>
                        <div className="wrapper">
                          <i className="frame-invested-value">12.166.60</i>
                        </div>
                      </div>
                    </div>
                    <div className="amz-frame">
                      <div className="coca-cola-frame" />
                    </div>
                    <div className="mastercard-frame5">
                      <div className="a-m-d-line">
                        <div className="current-value-parent">
                          <div className="top-stock">Time/Date</div>
                         
                          <div>
                            <CurrentDateTime />
                          </div>
                          
                        </div>
                        {/* <div className="current-value-parent">
                          <div className="top-stock">Trade Date</div>
                          <i className="empty-frame">01/27/23</i>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="invested-value-frame5">
                  <div className="rectangle-border">
                    <div className="group-box">
                      <div className="highest-performer-label">
                        <div className="text-label1">
                          <i className="portfolio-analytics">
                            Portfolio Analytics
                          </i>
                        </div>
                        <div className="symbol-marker">
                          <div className="company-frame-node">
                            <i className="d">1D</i>
                            <div className="name-label-text" />
                          </div>
                          <div className="date-frame" />
                          <div className="max">5D</div>
                          <div className="date-frame" />
                          <div className="max">1M</div>
                          <div className="date-frame" />
                          <div className="max">6M</div>
                          <div className="date-frame" />
                          <div className="max">1Y</div>
                          <div className="date-frame" />
                        </div>
                        <div className="empty-space-container">
                          <div className="max">5Y</div>
                          <div className="date-frame" />
                          <div className="max">Max</div>
                        </div>
                      </div>
                      <FrameBalanceInvested
                        group1220="/group-1220.svg"
                        group1221="/group-1221.svg"
                        propPadding="0px var(--padding-10xs) 0px var(--padding-11xs)"
                        propPadding1="var(--padding-3xs) 155px var(--padding-122xl)"
                        propPadding2="var(--padding-xs) var(--padding-4xs) var(--padding-xs) var(--padding-xs)"
                      />
                    </div>
                    <div className="rectangle-border-inner">
                      <div className="frame-tesla-inc">
                        <i className="am">10 am</i>
                        <i className="am">11 am</i>
                        <i className="am">12 pm</i>
                        <i className="am">1 pm</i>
                        <i className="am">2 pm</i>
                        <i className="am">3 pm</i>
                      </div>
                    </div>
                  </div>
                  <div className="watchlist-frame1">
                    <div className="watchlist-parent">
                      <i className="snapshot">Watchlist</i>
                      <div className="mastercard-frame6">
                        <img
                          className="plus-icon"
                          loading="eager"
                          alt=""
                          src="/plus.svg"
                        />
                      </div>
                    </div>
                    <div className="amazon-frame1">
                      <div className="mastercard-frame7">
                        <div className="amazon-icon-1-1-parent">
                          <img
                            className="bytesizeportfolio-icon"
                            loading="eager"
                            alt=""
                            src="/amazonicon1-1.svg"
                          />
                          <div className="amazoncom-inc-amzn-container">
                            <p className="amazoncom-inc">Amazon.com, Inc.</p>
                            <p className="amzn">AMZN</p>
                          </div>
                        </div>
                        <div className="horizontal-separator-parent">
                          <div className="horizontal-separator">102.24</div>
                          <div className="horizontal-separator1">+3.02</div>
                        </div>
                      </div>
                      <div className="mastercard-frame8" />
                      <div className="microsoft-frame">
                        <div className="amazon-icon-1-1-parent">
                          <img
                            className="coca-cola-6-1-icon"
                            loading="eager"
                            alt=""
                            src="/cocacola6-1.svg"
                          />
                          <div className="coca-cola-co-ko-container">
                            <p className="amazoncom-inc">Coca-Cola Co</p>
                            <p className="amzn">KO</p>
                          </div>
                        </div>
                        <div className="parent">
                          <div className="div4">60.49</div>
                          <div className="div5">−0.32</div>
                        </div>
                      </div>
                      <div className="mastercard-frame8" />
                      <div className="microsoft-frame">
                        <div className="amazon-icon-1-1-parent">
                          <img
                            className="bytesizeportfolio-icon"
                            loading="eager"
                            alt=""
                            src="/bmw-1.svg"
                          />
                          <div className="bayerische-motoren-werke-container">
                            <p className="amazoncom-inc">
                              Bayerische Motoren Werke AG
                            </p>
                            <p className="amzn">BMW</p>
                          </div>
                        </div>
                        <div className="parent">
                          <div className="div4">92.94</div>
                          <div className="div7">+0.59</div>
                        </div>
                      </div>
                      <div className="mastercard-frame8" />
                      <div className="microsoft-frame">
                        <div className="amazon-icon-1-1-parent">
                          <img
                            className="bytesizeportfolio-icon"
                            loading="eager"
                            alt=""
                            src="/microsoft-1.svg"
                          />
                          <i className="microsoft-corp-msft-container">
                            <p className="amazoncom-inc">Microsoft Corp</p>
                            <p className="amzn">MSFT</p>
                          </i>
                        </div>
                        <div className="horizontal-separator-parent">
                          <div className="horizontal-separator">248.16</div>
                          <div className="div7">+0.16</div>
                        </div>
                      </div>
                      <div className="mastercard-frame8" />
                      <div className="microsoft-frame">
                        <div className="amazon-icon-1-1-parent">
                          <img
                            className="bytesizeportfolio-icon"
                            loading="eager"
                            alt=""
                            src="/ups-1.svg"
                          />
                          <i className="united-parcel-service-container">
                            <p className="amazoncom-inc">
                              United Parcel Service, Inc.
                            </p>
                            <p className="amzn">UPS</p>
                          </i>
                        </div>
                        <div className="parent2">
                          <div className="div10">182.09</div>
                          <div className="div7">+2.39</div>
                        </div>
                      </div>
                      <div className="mastercard-frame8" />
                      <img
                        className="mastercard-2-1-icon"
                        loading="eager"
                        alt=""
                        src="/mastercard2-1.svg"
                      />
                      <FrameComponent1 />
                      <div className="frames-group">
                        <div className="line-mastercard" />
                        <img
                          className="amazon-icon-1-11"
                          loading="eager"
                          alt=""
                          src="/amazonicon1-1.svg"
                        />
                        <div className="text-arrow-right">102.24</div>
                        <div className="frame-portfolio-analytics">
                          <div className="lines-d-m-lines-m-y" />
                          <img
                            className="frame-watchlist-icon"
                            loading="eager"
                            alt=""
                            src="/frame-1215-1@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Desktop5;
