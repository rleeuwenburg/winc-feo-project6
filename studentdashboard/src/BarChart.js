import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from 'victory';
import dataFromExcel from './rawDataFromExcel';

const sampleData = dataFromExcel;

// [
//   {
//     name: 'Evelyn',
//     assignment: 'SCRUM',
//     difficulty: 3,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W1D1-1',
//     difficulty: 3,
//     enjoyment: 3
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W1D2-1',
//     difficulty: 1,
//     enjoyment: 3
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W1D2-2',
//     difficulty: 1,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W1D2-3',
//     difficulty: 2,
//     enjoyment: 3
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W1D2-4',
//     difficulty: 3,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W1D2-5',
//     difficulty: 3,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W1D3-1',
//     difficulty: 3,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W1D3-2',
//     difficulty: 3,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W1D3-4',
//     difficulty: 4,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W1D3-5',
//     difficulty: 4,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W1D3-P',
//     difficulty: 5,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W1D4-1',
//     difficulty: 4,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W1D4-P',
//     difficulty: 3,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W1D5-P',
//     difficulty: 3,
//     enjoyment: 3
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W2D1-1',
//     difficulty: 1,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W2D1-2',
//     difficulty: 2,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W2D2-1',
//     difficulty: 3,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W2D2-2',
//     difficulty: 3,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W2D2-3',
//     difficulty: 3,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W2D3-1',
//     difficulty: 4,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W2D3-2',
//     difficulty: 1,
//     enjoyment: 3
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W2D3-3',
//     difficulty: 4,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W2D4-1',
//     difficulty: 1,
//     enjoyment: 3
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W2D4-2',
//     difficulty: 4,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W2D4-3',
//     difficulty: 1,
//     enjoyment: 3
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W2D5-P',
//     difficulty: 3,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W3D1-1',
//     difficulty: 3,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W3D1-2',
//     difficulty: 2,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W3D1-3',
//     difficulty: 3,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W3D1-4',
//     difficulty: 3,
//     enjoyment: 3
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W3D2-1',
//     difficulty: 2,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W3D2-2',
//     difficulty: 3,
//     enjoyment: 3
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W3D2-3',
//     difficulty: 3,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W3D3-1',
//     difficulty: 4,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W3D3-2',
//     difficulty: 4,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W3D3-3',
//     difficulty: 3,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W3D3-4',
//     difficulty: 4,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W3D4-1',
//     difficulty: 5,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W3D4-2',
//     difficulty: 1,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W3D5-P',
//     difficulty: 2,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W4D2-1',
//     difficulty: 1,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W4D2-2',
//     difficulty: 1,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W4D2-3',
//     difficulty: 1,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W4D2-4',
//     difficulty: 1,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W4D3-1',
//     difficulty: 1,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W4D3-2',
//     difficulty: 1,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W4D3-3',
//     difficulty: 1,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W4D3-4',
//     difficulty: 1,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W4D3-5',
//     difficulty: 1,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W4D3-P',
//     difficulty: 1,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W5D4-1',
//     difficulty: 3,
//     enjoyment: 4
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W5D5-P',
//     difficulty: 4,
//     enjoyment: 3
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W6D1-1',
//     difficulty: 5,
//     enjoyment: 5
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W6D2-1',
//     difficulty: 4,
//     enjoyment: 3
//   },
//   {
//     name: 'Evelyn',
//     assignment: 'W6D2-P',
//     difficulty: 5,
//     enjoyment: 5
//   }
// ];

class BarChart extends React.Component {
  render() {
    return (
      <div className='BarChart'>
        <h3>test barchart with sample data</h3>
        <VictoryChart width={3600} height={360} domainPadding={30}>
          <VictoryAxis
            label='Assignments'
            tickValues={[sampleData.assignment]}
            style={{
              axisLabel: { fontSize: 20, padding: 30 },
              tickLabels: { angle: 45, padding: 20 }
            }}
          />
          <VictoryAxis dependentAxis tickValues={['1', '2', '3', '4', '5']} />
          <VictoryGroup offset={15}>
            <VictoryBar
              style={{ data: { fill: 'darkslategrey' } }}
              barWidth={30}
              data={sampleData}
              x='assignment'
              y='enjoyment'
            />
            <VictoryBar
              style={{ data: { fill: 'lightslategrey' } }}
              barWidth={30}
              data={sampleData}
              x='assignment'
              y='difficulty'
            />
          </VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
}

export default BarChart;
