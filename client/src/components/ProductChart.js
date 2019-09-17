import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

const data = [
  {
    name: 'Jan', BlackRavenTrickster: 103, HopsPotato: 142, SizzlebirdCider: 91, SoundsPuget: 55, ExtraFoam: 21, TheKraken: 37, SamsBeer: 11
  },
  {
    name: 'Feb', BlackRavenTrickster: 89, HopsPotato: 111, SizzlebirdCider: 95, SoundsPuget: 52, ExtraFoam: 27, TheKraken: 17, SamsBeer: 3,
  },
  {
    name: 'Mar', BlackRavenTrickster: 178, HopsPotato: 129, SizzlebirdCider: 83, SoundsPuget: 46, ExtraFoam: 24, TheKraken: 23, SamsBeer: 17,
  },
  {
    name: 'Apr', BlackRavenTrickster: 181, HopsPotato: 103, SizzlebirdCider: 91, SoundsPuget: 38, ExtraFoam: 32, TheKraken: 43, SamsBeer: 12,
  },
  {
    name: 'May', BlackRavenTrickster: 164, HopsPotato: 132, SizzlebirdCider: 99, SoundsPuget: 31, ExtraFoam: 23, TheKraken: 33, SamsBeer: 15,
  },
  {
    name: 'Jun', BlackRavenTrickster: 157, HopsPotato: 125, SizzlebirdCider: 78, SoundsPuget: 23, ExtraFoam: 15, TheKraken: 45, SamsBeer: 11,
  },
  {
    name: 'Jul', BlackRavenTrickster: 192, HopsPotato: 137, SizzlebirdCider: 75, SoundsPuget: 21, ExtraFoam: 12, TheKraken: 51, SamsBeer: 23,
  },
  {
    name: 'Aug', BlackRavenTrickster: 231, HopsPotato: 163, SizzlebirdCider: 113, SoundsPuget: 65, ExtraFoam: 23, TheKraken: 67, SamsBeer: 21,
  },
  {
    name: 'Sep', BlackRavenTrickster: 91, HopsPotato: 65, SizzlebirdCider: 78, SoundsPuget: 32, ExtraFoam: 11, TheKraken: 35, SamsBeer: 10,
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
        width={1100}
        height={400}
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
        <Line type="monotone" dataKey="BlackRavenTrickster" stroke="#8884d8" />
        <Line type="monotone" dataKey="HopsPotato" stroke="#1b32b3" />
        <Line type="monotone" dataKey="SizzlebirdCider" stroke="#82ca9d" />
        <Line type="monotone" dataKey="SoundsPuget" stroke="#8454e8" />
        <Line type="monotone" dataKey="ExtraFoam" stroke="#1c92e3" />
        <Line type="monotone" dataKey="TheKraken" stroke="#46sa9r" />
        <Line type="monotone" dataKey="SamsBeer" stroke="#28ce9d" />
      </LineChart>
    );
  }
}
