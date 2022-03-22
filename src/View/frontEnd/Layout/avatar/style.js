import styled from 'styled-components';

import { mixin } from '../../../../styles/js/utils';
// import 

export const Image = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  border: 2px solid #efefef;
  box-shadow: 1px 1px 3px 0 #bbb;
  ${props => mixin.backgroundImage(props.avatarUrl)}
`;