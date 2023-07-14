import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { actualOneD } from '../utils/mockData';
import ResizeHandlerHOC from '../utils/resizeHandlerHOC';
import BigBubbleGraph from './bigBubble.graph';
import { GraphContainer, GraphWrp } from '../../styles/index.sc';

const BigBubble = (props) => {
  const refElement = useRef(null);
  const graphRef = useRef(null);

  useEffect(() => {
    let graph = graphRef.current;

    if (props.data) {
      if (!graph) {
        graphRef.current = new BigBubbleGraph(refElement.current);
        graph = graphRef.current;
      }
      graph.setData(props.data || actualOneD);
      graph.setConfig({ ...props.config });
      graph.drawGraph();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data, props.rerender]);

  return (
    <GraphContainer className="big-bubble graph-container">
      <GraphWrp className="graph-wrp" ref={refElement}></GraphWrp>
    </GraphContainer>
  );
};

BigBubble.propTypes = {
  data: PropTypes.object,
  config: PropTypes.object,
  rerender: PropTypes.bool,
};

export default ResizeHandlerHOC(BigBubble);
