import styled from "styled-components";

export const IconWrapper = styled.span`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  display: inline-flex;
  font-size: 1em;
  ${(props) =>
    props.size &&
    `
  font-size: ${props.size}px;  
  `}
  border-radius: 50%;
  padding: 5px;
  line-height: 1;
  height: calc(1em + 10px);
  width: calc(1em + 10px);
`;
