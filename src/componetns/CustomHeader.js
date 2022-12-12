import { Layout } from "antd";
import React from "react";
import "./CustomHeader.scss";

const { Header } = Layout;

const CustomHeader = () => {
  return (
    <Header className="custom-header">
      <h4>Office Management</h4>
      <h5>Username</h5>
    </Header>
  );
};

export default CustomHeader;
