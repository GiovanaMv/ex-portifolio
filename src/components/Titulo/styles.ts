import styled from "styled-components";

import { Props } from ".";

export const Titulo = styled.h3<Props>`
  color:${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;

  @media(max-width: 768px){
  text-align: center;
  margin-top: 16px;
  }

`;
