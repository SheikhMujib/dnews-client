import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import LeftSidebar from "../Pages/Shared/LeftSidebar/LeftSidebar";
import RightSidebar from "../Pages/Shared/RightSidebar/RightSidebar";

const Main = () => {
  return (
    <div>
      <Container>
        <Header></Header>
        <Row>
          <Col lg="2" className="d-none d-lg-block">
            <LeftSidebar></LeftSidebar>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSidebar></RightSidebar>
          </Col>
        </Row>
        <Footer></Footer>
      </Container>
    </div>
  );
};

export default Main;
