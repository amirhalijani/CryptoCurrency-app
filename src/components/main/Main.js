import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import HomePage from "./HomePage";
import Cryptocurrencies from "./Cryptocurrencies";
import CryptoDetails from "./CryptoDetails";
import News from "./News";

const Main = () => {
  return (
    <Layout>
      <div className="routes">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/crypto/:coinId" element={<CryptoDetails />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Cryptoverse <br />
          Developed By Amir Alijani
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </Layout>
  );
};

export default Main;
