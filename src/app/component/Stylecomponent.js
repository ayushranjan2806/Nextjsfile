import React from 'react';
import styled from "styled-components";

const StyleContainer = styled.div`
  background-color: orange;
  padding: 20px;
  border-radius: 8px;
`;

const StyleTitle = styled.h1`
  background-color: green;
  padding: 20px;
  border-radius: 8px;
  font-size: 24px;
`;

const StyleComponent = () => {
  return (
    <StyleContainer>
      <StyleTitle>Hello</StyleTitle>
    </StyleContainer>
  );
}

export default StyleComponent;
