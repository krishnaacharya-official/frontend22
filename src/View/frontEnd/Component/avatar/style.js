import styled from "styled-components";

import { mixin } from "../../../../styles/js/utils";

export const Image = styled.div`
  display: inline-block;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 100%;
  ${(props) =>
    props.shadow &&
    `
    box-shadow: 1px 1px 3px 0 #bbb;
  `}
  border: ${(props) => props.border}px solid #efefef;

  ${(props) => mixin.backgroundImage(props.avatarUrl)}
`;
