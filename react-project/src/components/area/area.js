import React, { Component } from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, AreaSeries} from 'react-vis';

import SimpleTab from '../tab/SimpleTab'

class area extends Component {

  renderArea()
  {
    const data = [
      {x: 0, y: 15},
      {x: 1, y: 10},
      {x: 2, y: 9},
      {x: 3, y: 12},
      {x: 4, y: 10},
      {x: 5, y: 4},
      {x: 6, y: 8},
      {x: 7, y: 13},
      {x: 8, y: 10},
      {x: 9, y: 9},
      {x: 10, y: 14},
      {x: 11, y: 14},
      {x: 12, y: 11},
      {x: 13, y: 8},
      {x: 14, y: 15},
      {x: 15, y: 10}
    ];
    return (
      <div className = "area-display">
        <XYPlot margin={{Bottom: 20, top: 30}} height={700} width= {700} yDomain={[0, 18]}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <AreaSeries curve="curveMonotoneX" data={data} color="#cd3b54"/>
        </XYPlot>
      </div>
    );
  }
  render()
  {
    let output = this.renderArea();

    let usage = `
    import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines,AreaSeries} from 'react-vis';
    const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ];
    return (
      <div>
        <XYPlot height={500} width= {500}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <AreaSeries data={data} color="#cd3b54"/>
        </XYPlot>
      </div>
    );
    `;

    return(
      <div>
        <SimpleTab data={['Area', output, usage]} />
      </div>
    );
  }
}

export default area;