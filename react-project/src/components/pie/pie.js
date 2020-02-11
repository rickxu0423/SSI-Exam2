import React, { Component } from 'react';
import {RadialChart} from 'react-vis';

import SimpleTab from '../tab/SimpleTab'

class pie extends Component {

  renderPie()
  {
    const myData = [
    {angle: 1, label: 'Others'},
    {angle: 2, label: 'Nissan'},
    {angle: 3, label: 'GMC'},
    {angle: 4, label: 'Honda'},
    {angle: 5, label: 'Ford'},
    {angle: 6, label: 'Toyota'}
  ]
    return (
      <div className = "pie-display">
        <RadialChart data={myData} width={500} height={600} showLabels/>
      </div>
    );
  }
  render()
  {
    let output = this.renderPie();

    let usage = `
    import {RadialChart} from 'react-vis';
    const myData = [
    {angle: 1, label: 'Type 1'},
    {angle: 2, label: 'Type 2'},
    {angle: 3, label: 'Type 3'},
    {angle: 4, label: 'Type 4'},
    {angle: 5, label: 'Type 5'},
    {angle: 6, label: 'Type 6'}
    ]
    return (
      <div>
        <RadialChart data={myData} width={500} height={600} showLabels/>
      </div>
    );  `;

    return(
      <div>
          <SimpleTab data={['Pie', output, usage]} />
      </div>
    );
  }
}

export default pie;