import styled, { createGlobalStyle } from "styled-components"

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
    background: linear-gradient(45deg,rgb(237, 255, 136),rgba(240, 139, 218, 0.5), rgb(161, 181, 238));
    background-size: 200% 300%;
    animation: gradientBG 8s ease infinite;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
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
