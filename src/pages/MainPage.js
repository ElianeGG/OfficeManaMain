import React from "react";
import { Layout } from "antd";
import SiderContent from "../componetns/SiderContent/SiderContent";
import CustomHeader from "../componetns/CustomHeader";
import { currPageAtom } from "../atoms/AppAtoms";
import { useRecoilValue } from "recoil";

const { Content, Footer, Sider } = Layout;

const MainPage = () => {
  const currPage = useRecoilValue(currPageAtom);

  return (
    <Layout>
      <CustomHeader />
      <Layout>
        <Sider>
          <SiderContent />
        </Sider>
        <Content>{currPage}</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default MainPage;
