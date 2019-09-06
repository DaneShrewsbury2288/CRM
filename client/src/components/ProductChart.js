import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

const data = [
  {
    name: 'Jan', BlackRavenTrickster: 4000, HopsPotato: 2400, SizzlebirdCider: 2400,
  },
  {
    name: 'Feb', BlackRavenTrickster: 3000, HopsPotato: 4000, SizzlebirdCider: 2210,
  },
  {
    name: 'Mar', BlackRavenTrickster: 2000, HopsPotato: 8500, SizzlebirdCider: 2290,
  },
  {
    name: 'Apr', BlackRavenTrickster: 2780, HopsPotato: 6500, SizzlebirdCider: 2000,
  },
  {
    name: 'May', BlackRavenTrickster: 1890, HopsPotato: 4800, SizzlebirdCider: 2181,
  },
  {
    name: 'Jun', BlackRavenTrickster: 2390, HopsPotato: 3800, SizzlebirdCider: 3333,
  },
  {
    name: 'Jul', BlackRavenTrickster: 5000, HopsPotato: 4200, SizzlebirdCider: 3522,
  },
  {
    name: 'Aug', BlackRavenTrickster: 5520, HopsPotato: 6500, SizzlebirdCider: 2800,
  },
  {
    name: 'Sep', BlackRavenTrickster: 3522, HopsPotato: 2525, SizzlebirdCider: 1800,
  },
  {
    name: 'Oct', BlackRavenTrickster: null, HopsPotato: null, SizzlebirdCider: null,
  },
  {
    name: 'Nov', BlackRavenTrickster: null, HopsPotato: null, SizzlebirdCider: null,
  },
  {
    name: 'Dec', BlackRavenTrickster: null, HopsPotato: null, SizzlebirdCider: null,
  },
];

export default class ProductChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/wpfnfmh7/';

  render() {
    return (
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5, right: 50, left: 0, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine x="Oct" stroke="red"  label="Sales Goal Ends" />
        <ReferenceLine y={5500} label="Sales Goal" stroke="green" />
        <Line type="monotoneX" dataKey="HopsPotato" stroke="#8884d8" />
        <Line type="monotone" dataKey="BlackRavenTrickster" stroke="#1b32b3" />
        <Line type="monotone" dataKey="SizzlebirdCider" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
