import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import moment from "moment";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

// week difference - by days
const sevenDayDifference = moment().subtract(7, 'days').format("MMM D");
const sixDayDifference = moment().subtract(7, 'days').format("MMM D");
const fiveDayDifference = moment().subtract(7, 'days').format("MMM D");
const fourDayDifference = moment().subtract(7, 'days').format("MMM D");
const threeDayDifference = moment().subtract(7, 'days').format("MMM D");
const twoDayDifference = moment().subtract(7, 'days').format("MMM D");
const oneDayDifference = moment().subtract(7, 'days').format("MMM D");
const zeroDayDifference = moment().subtract(7, 'days').format("MMM D");

// month difference by weeks
const weekDifference = moment().subtract(7, 'days').format("MMM D");
const twoWeekDifference = moment().subtract(14, 'days').format("MMM D");
const threeWeekDifference = moment().subtract(21, 'days').format("MMM D");
const fourWeekDifference = moment().subtract(28, 'days').format("MMM D");

// quarter difference by every two weeks
const quarterTwoDifference = moment().subtract(14, 'days').format("MMM D");
const quarterFourDifference = moment().subtract(28, 'days').format("MMM D");
const quarterSixDifference = moment().subtract(42, 'days').format("MMM D");
const quarterEightDifference = moment().subtract(56, 'days').format("MMM D");
const quarterTenDifference = moment().subtract(60, 'days').format("MMM D");
const quarterTwelveDifference = moment().subtract(74, 'days').format("MMM D");

// year difference by months
const oneMonthDifference = moment().subtract(1, 'months').format("MMM YYYY");
const twoMonthDifference = moment().subtract(2, 'months').format("MMM YYYY");
const threeMonthDifference = moment().subtract(3, 'months').format("MMM YYYY");
const fourMonthDifference = moment().subtract(4, 'months').format("MMM YYYY");
const fiveMonthDifference = moment().subtract(5, 'months').format("MMM YYYY");
const sixMonthDifference = moment().subtract(6, 'months').format("MMM YYYY");
const sevenMonthDifference = moment().subtract(7, 'months').format("MMM YYYY");
const eightMonthDifference = moment().subtract(8, 'months').format("MMM YYYY");
const nineMonthDifference = moment().subtract(9, 'months').format("MMM YYYY");
const tenMonthDifference = moment().subtract(10, 'months').format("MMM YYYY");
const elevenMonthDifference = moment().subtract(11, 'months').format("MMM YYYY");
const twelveMonthDifference = moment().subtract(12, 'months').format("MMM YYYY");

// hour difference - by three hours
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

export default function Chart() {
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