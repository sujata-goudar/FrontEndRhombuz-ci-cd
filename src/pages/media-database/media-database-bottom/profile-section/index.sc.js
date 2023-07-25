import styled from 'styled-components';

const gridGap = 0.9375;

export const MainWrp = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: flex-start;
  align-content: flex-start;
  gap: ${gridGap}rem;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.newsLetterBackground};
`;
export const CardWrp = styled.div`
  position: relative;
  min-height: 28.125rem;
  max-height: fit-content;
  cursor: pointer;
  &:hover .right-card {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
  &:nth-child(4) .right-card {
    left: calc(-100% - ${gridGap}rem);
  }
`;
export const FrontDiv = styled.div`
  width: 100%;
  height: 100%;
`;
export const RightDiv = styled.div`
  width: 100%;
  height: 100%;
  visibility: hidden;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: calc(100% + ${gridGap}rem);
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s ease, visibility 0.3s;
`;
