import styled from 'styled-components';

export const MainWrp = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.background};
`;

export const BottomWrp = styled.div`
  padding-top: 2.71rem;
  height: calc(100% - 3.5rem);
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
