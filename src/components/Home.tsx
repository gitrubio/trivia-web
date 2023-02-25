import React, { useContext, useState } from "react";
import { Typography, Layout, Button, Card, message } from "antd";
import Logo from "../assets/logo.png";
import useHttp from "../hooks/useHttp";
import { Questions } from "../interfaces/app.interfaces";
import { useNavigate } from "react-router-dom";
import { QuestionContext } from "../context/QuestionProvider";
import "../styles/home.css";


const { Title } = Typography;
const { Content } = Layout;
const {Meta} = Card

export default function Welcome() {

  const [loading, setloading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { setQuestions } = useContext(QuestionContext);
  const navigate = useNavigate();
  const axios = useHttp();


  const getData = async () => {
    setloading(true);
    const { data, error } = await axios.get<Questions>(
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
    );
    if (!error && data) {
      setQuestions(data.results);
      navigate("/trivia");
    } else {
      messageApi.error("Questions not found");
    }
    setloading(false);
  };

  return (
    <Layout>
      {contextHolder}
      <Content className="container">
        <Title level={2}>
          Welcome to the Trivia Challenge!
        </Title>
          <Card
            className="card"
            cover={<img style={{ maxWidth: 290 }} alt="example" src={Logo} />}
            actions={[
              <Button type="primary" loading={loading} onClick={getData}>
                LEST GO!
              </Button>,
            ]}
          >
            <Meta
              style={{ textAlign: "center" }}
              title="¿Can you score 100%?"
            />
          </Card>
      </Content>
    </Layout>
  );
}
