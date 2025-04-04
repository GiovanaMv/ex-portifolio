import styled, { createGlobalStyle } from "styled-components"

import { Theme } from './themes/dark'

export const EstiloGlobal = createGlobalStyle `
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    list-style:none;
  }

  body{
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: ${(props) => (props.theme as Theme).corDeFundo};
    display: flex;
    justify-content: center;
    align-items: center;
  }

    @media (max-width: 768px){
      padding-top: 16px;
    }
  }
`;

export default EstiloGlobal;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 160px auto;
  column-gap: 56px;

  @media (max-width: 768px){
  max-width: 80%;
  display: block;
}
`;
