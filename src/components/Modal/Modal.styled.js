import styled from '@emotion/styled';

export const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ImgWrapper = styled.div`
  max-width: 65%;
  max-height: auto;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
