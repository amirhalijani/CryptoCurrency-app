import React from "react";
import { Typography, Row, Col, Statistic } from "antd";
import { useGetCryptosQuery } from "../../services/CryptoAPI";
import millify from "millify";
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching) return "Loading...";

  return (
    <>
      <Title level={2} className="heading" style={{ marginBottom: "16px" }}>
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            style={{ marginBottom: "16px" }}
            title="Total Cryptocurrencies"
            value={globalStats.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
            style={{ marginBottom: "16px" }}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
            style={{ marginBottom: "16px" }}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
            style={{ marginBottom: "16px" }}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
            style={{ marginBottom: "16px" }}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title
          level={2}
          className="home-title"
          style={{ marginBottom: "16px" }}
        >
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">show more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default HomePage;
