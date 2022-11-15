import { useState } from "react";
import styled from "styled-components";
import arrow from "../images/icon-arrow.svg";
import Answer from "./Answer";

const Questions = () => {
  const [answers, setAnswers] = useState({
    answerOne: false,
    answerTwo: false,
    answerThree: false,
    answerFour: false,
  });

  const showAnswer = (answer) => {
    switch (answer) {
      case 1:
        setAnswers((prevAnswers) => ({
          ...prevAnswers,
          answerOne: !prevAnswers.answerOne,
        }));
        break;
      case 2:
        setAnswers((prevAnswers) => ({
          ...prevAnswers,
          answerTwo: !prevAnswers.answerTwo,
        }));
        break;
      case 3:
        setAnswers((prevAnswers) => ({
          ...prevAnswers,
          answerThree: !prevAnswers.answerThree,
        }));
        break;
      case 4:
        setAnswers((prevAnswers) => ({
          ...prevAnswers,
          answerFour: !prevAnswers.answerFour,
        }));
        break;
      default:
        return;
    }
  };
  return (
    <QuestionsContainer>
      <QuestionsHeader>
        <QHeaderTitle>Frequently Asked Questions</QHeaderTitle>
        <QHeaderText>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </QHeaderText>
      </QuestionsHeader>
      <QuestionsBody>
        <Question>
          <QuestionText>What is Bookmark?</QuestionText>
          <QuestionIcon
            src={arrow}
            alt="arrow dropdown"
            onClick={() => showAnswer(1)}
          ></QuestionIcon>
        </Question>
        {answers.answerOne && <Answer type={1} />}
        <Question>
          <QuestionText>How can I request a new browser?</QuestionText>
          <QuestionIcon
            src={arrow}
            alt="arrow dropdown"
            onClick={() => showAnswer(2)}
          ></QuestionIcon>
        </Question>
        {answers.answerTwo && <Answer type={2} />}
        <Question>
          <QuestionText>Is there a mobile app?</QuestionText>
          <QuestionIcon
            src={arrow}
            alt="arrow dropdown"
            onClick={() => showAnswer(3)}
          ></QuestionIcon>
        </Question>
        {answers.answerThree && <Answer type={3} />}
        <Question>
          <QuestionText>What about other Chromium browsers?</QuestionText>
          <QuestionIcon
            src={arrow}
            alt="arrow dropdown"
            onClick={() => showAnswer(4)}
          ></QuestionIcon>
        </Question>
        {answers.answerFour && <Answer type={4} />}
      </QuestionsBody>
      <QuestionsButton>More Info</QuestionsButton>
    </QuestionsContainer>
  );
};

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;
const QuestionsHeader = styled.div`
  max-width: 500px;
  text-align: center;
`;
const QHeaderTitle = styled.div`
  color: var(--vdark-blue);
  font-size: 1.75rem;
  font-weight: 500;
  margin: 1rem 0;
`;
const QHeaderText = styled.div`
  color: var(--grayish-blue);
  line-height: 1.5;
`;

const QuestionsBody = styled.div`
  margin: 3rem 0;
  @media (min-width: 850px) {
    width: 500px;
    border-top: 1px solid var(--grayish-blue);
  }
`;
const Question = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid var(--grayish-blue);
  color: var(--vdark-blue);
  cursor: pointer;
  :hover {
    color: var(--soft-red);
  }
`;
const QuestionText = styled.div`
  margin-right: 1rem;
`;
const QuestionIcon = styled.img`
  width: 25px;
  height: 25%;
`;

const QuestionsButton = styled.button`
  padding: 1rem;
  font-family: "Rubik", san-serif;
  color: white;
  cursor: pointer;
  background-color: var(--soft-blue);
  border: none;
  border-radius: 0.3rem;
`;

export default Questions;
