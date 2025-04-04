import styled from 'styled-components';

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  display: flex;
  justify-content: center;
  gap: 16px;

  img {
    height: 157px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
  }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }


`;
