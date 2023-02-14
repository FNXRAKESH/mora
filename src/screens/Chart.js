import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { VictoryPie } from 'victory-native';

const graphicColor = ['#ED9792', '#7ABBEE', '#A9D1BD']; // Colors
// const wantedGraphicData = [{ y: 10 }, { y: 50 }, { y: 40 }]; // Data that we want to display
const wantedGraphicData = [
  { x: ' ', y: 35 },
  { x: ' ', y: 90 },
  { x: ' ', y: 20 }
];
// const defaultGraphicData = [{ y: 0 }, { y: 0 }, { y: 100 }];
const defaultGraphicData = [
  { x: ' ', y: 0 },
  { x: ' ', y: 0 },
  { x: ' ', y: 100 }
]; // Data used to make the animate prop work

const Chart = () => {
  const [graphicData, setGraphicData] = useState(defaultGraphicData);
  useEffect(() => {
    setGraphicData(wantedGraphicData); // Setting the data that we want to display
  }, []);
  return (
    <View>
      <VictoryPie
        animate={{ easing: 'exp' }}
        data={graphicData}
        colorScale={graphicColor}
        innerRadius={75}
        style={{
          data: {
            fillOpacity: 1
          }
        }}
      />
    </View>
  );
};

export default Chart;
