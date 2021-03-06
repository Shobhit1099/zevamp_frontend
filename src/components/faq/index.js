import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Collapse, Skeleton } from "antd";
import { RightOutlined } from "@ant-design/icons";
import img1 from "../../assets/images/Group_32.png";
import img2 from "../../assets/images/Group_5.png";
import { useMediaQuery } from "react-responsive";
import UserService from "../../Services/UserServices";

const { Panel } = Collapse;

function Faq() {
  const isBelow900 = useMediaQuery({ query: "(max-width: 900px)" });
  const isBelow768 = useMediaQuery({ query: "(max-width: 768px)" });
  const [items, setItems] = useState();

  useEffect(() => {
    UserService.getDetails().then((data) => setItems(data));
  }, []);

  return (
    <Card
      hoverable
      style={{ border: "0px", background: "#F3F5F6", width: "1000px" }}
    >
      <Row gutter={[24, 24]}>
        <Col
          lg={6}
          md={isBelow900 ? 8 : 7}
          xs={24}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {isBelow768 ? (
            <img
              src={img2}
              className="img-fluid"
              style={{ maxHeight: "160px" }}
            />
          ) : (
            <img src={img1} height="330" />
          )}
        </Col>
        <Col lg={18} md={isBelow900 ? 16 : 17} xs={24}>
          {" "}
          <Collapse
            style={{ background: "#F3F5F6" }}
            defaultActiveKey={1}
            accordion
            bordered={false}
            defaultActiveKey={["0"]}
            expandIconPosition="right"
            expandIcon={({ isActive }) => (
              <RightOutlined
                style={{ color: "#FF5C00" }}
                rotate={isActive ? 90 : 0}
              />
            )}
            className="site-collapse-custom-collapse"
          >
            {items ? (
              items.faqs.map((item, index) => {
                return (
                  <Panel
                    header={<b>{item.question}</b>}
                    key={index}
                    className="site-collapse-custom-panel"
                  >
                    <p>{item.answer}</p>
                  </Panel>
                );
              })
            ) : (
              <>
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    marginBottom: "10px",
                    padding: "10px",
                  }}
                >
                  <Skeleton active paragraph={{ rows: 1 }}></Skeleton>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    marginBottom: "10px",
                    padding: "10px",
                  }}
                >
                  <Skeleton active paragraph={{ rows: 0 }}></Skeleton>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    marginBottom: "10px",
                    padding: "10px",
                  }}
                >
                  <Skeleton active paragraph={{ rows: 0 }}></Skeleton>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    marginBottom: "10px",
                    padding: "10px",
                  }}
                >
                  <Skeleton active paragraph={{ rows: 0 }}></Skeleton>
                </div>
              </>
            )}
          </Collapse>
        </Col>
      </Row>
    </Card>
  );
}

export default Faq;
