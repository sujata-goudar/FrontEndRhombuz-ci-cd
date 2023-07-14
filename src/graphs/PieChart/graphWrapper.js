import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { actualOneD } from '../utils/mockData';
import ResizeHandlerHOC from '../utils/resizeHandlerHOC';
import PurePieGraph from './purePie.graph';
import { GraphContainer, GraphWrp } from '../../styles/index.sc';

const PieGraph = (props) => {
  const refElement = useRef(null);
  const graphRef = useRef(null);

  useEffect(() => {
    let graph = graphRef.current;

    if (props.data) {
      if (!graph) {
        graphRef.current = new PurePieGraph(refElement.current);
        graph = graphRef.current;
      }
      graph.setData(props.data || actualOneD);
      graph.setConfig({ ...props.config });
      graph.drawGraph();
    }
  }, [props.data, props.config, props.rerender]);

  return (
    <GraphContainer className="pie-circle graph-container">
      <GraphWrp id="pie-container" className="graph-wrp" ref={refElement} />
    </GraphContainer>
  );
};

PieGraph.propTypes = {
  data: PropTypes.object,
  config: PropTypes.object,
  rerender: PropTypes.bool,
};

export default ResizeHandlerHOC(PieGraph);
