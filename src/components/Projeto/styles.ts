import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corBorda};
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0px 0px 6px rgba(102, 102, 102, 0.88);
  background-color:${(props) => props.theme.corDeFundo};
`;

export const LinkBotao = styled.a `
  color: #fff;
  font-size: 14px;
  background-color: #4476BF;
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  border-radius: 4px;

`;
