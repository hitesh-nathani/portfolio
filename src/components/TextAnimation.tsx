"use client";
import React from "react";
import { Primitive } from "@radix-ui/react-primitive";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;

interface TextAnimationProps {
  text: string;
}

const TextAnimationWrapper = styled.div`
  display: inline-block;
  font-size: 3rem;
  font-weight: bold;
  line-height: 2.75rem;
`;

const TextChar = styled(Primitive.span)<{ delay: number }>`
  opacity: 0;
  animation: ${fadeIn} 0.5s forwards;
  animation-delay: ${({ delay }) => delay}s;
`;

const TextAnimation: React.FC<TextAnimationProps> = ({ text }) => {
  return (
    <TextAnimationWrapper>
      {text.split("").map((char, index) => (
        <TextChar key={index} delay={index * 0.1}>
          {char}
        </TextChar>
      ))}
    </TextAnimationWrapper>
  );
};

export default TextAnimation;
