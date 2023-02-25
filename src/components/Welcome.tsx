import React from "react";
import { Typography, Layout , Button, Card ,Row ,Col} from "antd";
import Logo from '../assets/trivia-logo.png'
import "../styles/Welcome.css";
const { Title } = Typography;
const {  Content } = Layout;
export default function Welcome() {
  
      return (
        <Layout>
          <Content className="container">
            <Card
             className="card"
              cover={
                <img
                  alt="example"
                  src={Logo}
                />
              }
              actions={[
    
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
