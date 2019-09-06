import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

const data = [
  {
    name: '9/1', BlackRavenTrickster: 4000, HopsPotato: 2400, amt: 2400,
  },
  {
    name: '9/2', BlackRavenTrickster: 3000, HopsPotato: 1398, amt: 2210,
  },
  {
    name: '9/3', BlackRavenTrickster: 2000, HopsPotato: 9800, amt: 2290,
  },
  {
    name: '9/4', BlackRavenTrickster: 2780, HopsPotato: 3908, amt: 2000,
  },
  {
    name: '9/5', BlackRavenTrickster: 1890, HopsPotato: 4800, amt: 2181,
  },
  {
    name: '9/6', BlackRavenTrickster: 2390, HopsPotato: 3800, amt: 2500,
  },
  {
    name: '9/6', BlackRavenTrickster: 3490, HopsPotato: 4300, amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/wpfnfmh7/';

  render() {
    return (
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 20, right: 50, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine x={5} stroke="red" label="Sales Goal Ends" />
        <ReferenceLine y={6000} label="Sales Goal" stroke="red" />
        <Line type="monotone" dataKey="HopsPotato" stroke="#8884d8" />
        <Line type="monotone" dataKey="BlackRavenTrickster" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
