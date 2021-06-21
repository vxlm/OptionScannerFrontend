import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer,Bar,ComposedChart } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount, last) {
  return { time, amount, last };
}


export const Chart=(props) =>{
  const theme = useTheme();
  let labels = []
  let price = []
  let testQuery=props.data['0']['symbols'][0]['historical']
  testQuery.forEach(element =>{
    labels.push(createData([element['datetime']], element['volume'],element['last']))
  });
  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <ComposedChart
          data={labels}
          margin={{
            top: 5,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary}/>          

          <YAxis yAxisId='left' stroke={theme.palette.text.secondary} domain ={[testQuery[0]['volume'],]}>
          <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
             Volume
            </Label>
            </YAxis>
          <YAxis yAxisId="right" orientation='right' stroke={theme.palette.text.secondary}>
          <Label
              angle={270}
              position="right"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
             last price
            </Label>
          </YAxis>
      
          <Line yAxisId="right" type='monotone' dataKey="last" stroke='#F70D1C' dot={{ stroke: 'blue', strokeWidth: 2 }} /> 
          <Line yAxisId='left' type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={{ stroke: 'blue', strokeWidth: 2 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
export default Chart