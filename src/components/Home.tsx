import React, { useContext, useState } from "react";
import { Typography, Layout, Button, Card, Alert, message } from "antd";
import Logo from "../assets/logo.png";
import "../styles/Welcome.css";
import useHttp from "../hooks/useHttp";
import { Questions } from "../interfaces/app.interfaces";
import { useNavigate } from "react-router-dom";
import { QuestionContext } from "../context/QuestionProvider";
const { Title } = Typography;
const { Content } = Layout;

export default function Welcome() {

  const [loading, setloading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { setQuestions } = useContext(QuestionContext);
  const navigate = useNavigate();
  const axios = useHttp();
  const {Meta} = Card

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
        <Title level={3} style={{}}  >Welcome to the Trivia Challenge!</Title>
        <Card
          className="card"
          cover={<img style={{ maxWidth: 290 }} alt="example" src={Logo} />}
          actions={[
            <Button type="primary" loading={loading} onClick={getData}>
              LEST GO!
            </Button>,
          ]}
        >
           <Meta style={{textAlign : 'center'}}
                title="¿Can you score 100%?"
                description = "You will"
              /> 
        </Card>
      </Content>
    </Layout>
  );
}
