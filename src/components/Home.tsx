import React, { useContext, useState } from "react";
import { Typography, Layout, Button, Card } from "antd";
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
  const { setQuestions }  = useContext(QuestionContext) 
  const navigate = useNavigate()
  const axios = useHttp();

  const getData = async () => {
    setloading(true);
    const { data, error } = await axios.get<Questions>(
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
    );
    if (!error && data) {
      setQuestions(data.results)
      navigate('/trivia')
    }
  };

  return (
    <Layout>
      <Content className="container">
        <Card
          className="card"
          cover={<img style={{ maxWidth: 290 }} alt="example" src={Logo} />}
          actions={[
            <Button type="primary" loading={loading} onClick={getData}>
              Click me!
            </Button>,
          ]}
        >
          {/*   <Meta
                avatar={}
                title="Card title"
                description="This is the description"
              /> */}
        </Card>
      </Content>
    </Layout>
  );
}
