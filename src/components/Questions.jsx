import React from "react";
import styled from "styled-components";
import arrow from "../images/icon-arrow.svg";

const Questions = () => {
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
          <QuestionIcon src={arrow} alt="arrow dropdown"></QuestionIcon>
        </Question>
        <Question>
          <QuestionText>How can I request a new browser?</QuestionText>
          <QuestionIcon src={arrow} alt="arrow dropdown"></QuestionIcon>
        </Question>
        <Question>
          <QuestionText>Is there a mobile app?</QuestionText>
          <QuestionIcon src={arrow} alt="arrow dropdown"></QuestionIcon>
        </Question>
        <Question>
          <QuestionText>What about other Chromium browsers?</QuestionText>
          <QuestionIcon src={arrow} alt="arrow dropdown"></QuestionIcon>
        </Question>
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
  margin: 2rem 0;
`;
const Question = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid var(--grayish-blue);
`;
const QuestionText = styled.div`
  color: var(--vdark-blue);
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
