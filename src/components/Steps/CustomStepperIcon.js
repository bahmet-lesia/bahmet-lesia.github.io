import React from "react";
import styled from "styled-components";
import { ReactComponent as CompletedIcon } from "../../icons/completedIcon.svg";

const CurrentStep = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  color: #fff;
  background-color: #2F80ED;
  font-size: 12px;
`;

function CustomStepperIcon(props) {
  const { completed, icon } = props;

  return <div>{completed ? <CompletedIcon /> : <CurrentStep>{icon}</CurrentStep>}</div>;
}

export default CustomStepperIcon;
