/* eslint-disable indent */
import RootGraph from '../utils/rootGraph';
import graphBucket from '../utils/graphBucket';
import { colorBox, initialValues } from '../utils/graphConst';

class PurePieGraph extends RootGraph {
  setData(data) {
    const inData = JSON.parse(JSON.stringify(data));
    this.labels = inData?.labels
      ? inData?.labels
      : [{ label: 'label', value: 'value' }];
    this.data = inData.data;
    this.summary = inData.summary;

    this.filteredData = this.data;
    const formattedData = [];
    // process data object with multiple values
    for (let k = 0; k < this.labels.length; k++) {
      const items = [];
      for (let i = 0; i < this.filteredData.length; i++) {
        const value = this.filteredData[i][this.labels[k].value];
        const item = {
          ...this.labels[k],
          ...this.filteredData[i],
          label: this.filteredData[i].label,
          value: parseFloat(value),
          accValue:
            (formattedData[k - 1] && formattedData[k - 1][i]?.accValue
              ? formattedData[k - 1][i]?.accValue
              : 0) + parseFloat(value),
          labelText: this.labels[k].label,
          index: i,
          labelIndex: k,
          color: this.labels[k].color
            ? this.labels[k].color
            : this.data[i].color
            ? this.data[i].color
            : colorBox[k % colorBox.length],
        };

        items.push(item);
      }
      formattedData.push(items);
    }
    this.graphData = formattedData;
  }

  setConfig(configObj = {}) {
    this.config = configObj;
  }

  drawGraph() {
    super.drawGraph();

    // const data = this.data;
    const config = {
      ...initialValues,
      width: this.width,
      height: this.height,
      summary: this.summary,
      ...this.config,
    };

    //  circles
    const pie = graphBucket.pieCircle().config(config);

    const pieGrps = this.$graphGrp.selectAll('.purePieGroup').node()
      ? this.$graphGrp.selectAll('.purePieGroup')
      : this.$graphGrp.append('g');

    pieGrps
      .attr('class', 'purePieGroup')
      .attr('transform', `translate(${config.width / 2},${config.height / 2})`)
      .datum(this.graphData)
      .call(pie);
  }
}

export default PurePieGraph;
