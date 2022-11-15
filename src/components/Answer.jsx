import React from "react";
import styled from "styled-components";

const Answer = ({ type }) => {
  const showText = () => {
    let result = "";
    switch (type) {
      case 1:
        result =
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.";
        break;
      case 2:
        result =
          "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.";
        break;
      case 3:
        result =
          "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.";
        break;
      case 4:
        result =
          "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.";
        break;
      default:
        result = "No answer";
    }
    return result;
  };
  const text = showText();
  return <AnswerContainer>{text}</AnswerContainer>;
};

const AnswerContainer = styled.div`
  color: var(--grayish-blue);
  line-height: 1.5;
`;

export default Answer;
