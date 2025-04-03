import styled from "styled-components";

import { Props } from ".";

export const Titulo = styled.h3<Props>`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;

  @media(max-width: 768px){
  text-align: center;
  margin-top: 16px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  text-align: start;
}
`;
