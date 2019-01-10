import styled from 'styled-components';

export const Navigation = styled.div`
  width: 100%;
  display: flex;
  z-index: 100;
  position: absolute;
  justify-content: flex-start;
  padding-top: 18px;
  padding-left: 150px;

  > div {
    margin-left: 8.7%;
    > img {
      height: 14px;
    }
  }
`;

export const AgileNixLinkImage = styled.img`height: 25px;`;
