import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import moment from "moment";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const twentyFourHourDifference = moment().subtract(24, 'hours').format("HH:mm");
const twentyOneHourDifference = moment().subtract(21, 'hours').format("HH:mm");
const eightteenHourDifference = moment().subtract(18, 'hours').format("HH:mm");
const fifteenDifference = moment().subtract(15, 'hours').format("HH:mm");
const twelveHourDifference = moment().subtract(12, 'hours').format("HH:mm");
const nineHourDifference = moment().subtract(9, 'hours').format("HH:mm");
const sixHourDifference = moment().subtract(6, 'hours').format("HH:mm");
const threeHourDifference = moment().subtract(3, 'hours').format("HH:mm");
const zeroHourDifference = moment().format("HH:mm");

const data = [
  createData(twentyFourHourDifference, 0),
  createData(twentyOneHourDifference, 1330),
  createData(eightteenHourDifference, 2463),
  createData(fifteenDifference, 2500),
  createData(twelveHourDifference, 2650),
  createData(nineHourDifference, 2700),
  createData(sixHourDifference, 2700),
  createData(threeHourDifference, 2825),
  createData(zeroHourDifference, 2850),
];

export default function Chart(props) {
  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
              Sales ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}