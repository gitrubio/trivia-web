import React, { useContext } from "react";
import { IQuestionResult } from "../interfaces/app.interfaces";
import { Typography, Layout, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { QuestionContext } from "../context/QuestionProvider";
const { Title } = Typography;

export default function Results({ answers }: IQuestionResult) {
  const navigate = useNavigate();
  const { setQuestions } = useContext(QuestionContext);
  const correctAnswers = answers.filter(
    (answer) => answer.correct_answer
  ).length;

  const rePlay = () => {
    setQuestions([])
    navigate("/");
  };

  return (
    <>
      <Layout className="card-result font-nunito">
        <Title level={2}>
          {`Your Score is ${correctAnswers}/${answers.length}`}
        </Title>
        {answers.map((answer) => (
          <>
            <Title level={3} style={{ textAlign: "start" }}>
              {(answer.correct_answer ? "+ " : "- ") + answer.question}
            </Title>
          </>
        ))}
      </Layout>
      <div className="btn-result">
        <Button
          type="primary"
          style={{ margin: "0px auto", marginTop: "20px" }}
          onClick={rePlay}
        >
          {" "}
          Play Again !
        </Button>
      </div>
    </>
  );
}
