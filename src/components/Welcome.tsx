import React, { useState } from "react";
import { Typography, Layout , Button, Card } from "antd";
import Logo from '../assets/logo.png'
import "../styles/Welcome.css";
const { Title } = Typography;
const {  Content } = Layout;
export default function Welcome() {
      const [loading, setloading] = useState(false)
      
      const getData = () => {
        setloading(true)
      
      }

      return (
        <Layout>
          <Content className="container">
            <Card
             className="card"
              cover={
                <img style={{ maxWidth: 290}}
                  alt="example"
                  src={Logo}
                />
              }
              actions={[
                <Button type="primary" loading={loading} onClick={getData}>
                Click me!
              </Button>
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
