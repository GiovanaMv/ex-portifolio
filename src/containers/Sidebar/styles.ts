import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles';

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-size: 12px;
  font-weight: bold;
  background-color: orange;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }
`;

export const SidebarContainer = styled.div`
  position: sticky;
  top: 50px;
  left: 0;
  padding: 20px;
  border-radius: 10px;
`;
