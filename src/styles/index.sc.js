import styled from 'styled-components';

export const Section = styled.div`
  ${({ sectionStyle = {} }) => sectionStyle};
`;

export const GraphContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  .region-wrp {
    background-color: blue;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .regions,
  .countries,
  .citys,
  .regions-label,
  .countries-label {
    position: absolute;
    overflow: hidden;
  }
  .citys,
  .countries,
  .regions {
    border: 1px solid #fff;
  }
  .node {
    box-sizing: border-box;
    line-height: 1em;
    overflow: hidden;
    position: absolute;
    white-space: pre;
    background: #ddd;
  }

  .node-label,
  .node-value {
    margin: 4px;
  }

  .node-value {
    margin-top: -2px;
  }

  .node-value {
    font-weight: bold;
  }

  .regions-label {
    color: #fff;
  }
`;

export const GraphWrp = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  & svg {
    height: 100%;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  height: 400px;
  width: 700px;

  .line-bg-rect-group:hover line,
  .line-bg-rect-group:hover .hoverCircle {
    display: block !important;
  }
`;
