import { Canvas, Circle, Group, Line, Path, point, Points, vec } from "@shopify/react-native-skia";
import React, { memo } from "react";
import { useTheme } from "react-native-paper";

const SVGNotation = () => {
  return (
    <Canvas style={{ flex: 1 }}>
      <Line
        p1={vec(0, 0)}
        p2={vec(300, 0)}
        color="lightblue"
        style="stroke"
        strokeWidth={4}
      />
    </Canvas>
  );
};

const LineChart = () => {
  const theme = useTheme();

  const xPoint = (index: number) => {
    return 300 / 7 * index
  }

  const yPoint = (numbers: number[], index: number,) => {
    return 300 / ySpace(numbers) * numbers[index]
  }

  const ySpace = (yPoints: number[]) => {
    return Math.max(...yPoints);
  }

  const durations = [
    0, 80, 93, 155, 244, 202, 244
  ]
  const points = [
    vec(xPoint(1), yPoint(durations, 0)),
    vec(xPoint(2), yPoint(durations, 1)),
    vec(xPoint(3), yPoint(durations, 2)),
    vec(xPoint(4), yPoint(durations, 3)),
    vec(xPoint(5), yPoint(durations, 4)),
    vec(xPoint(6), yPoint(durations, 5)),
    vec(xPoint(7), yPoint(durations, 6)),
  ];

  return (
    <Canvas style={{ flex: 1 }}>
      <Points
        points={points}
        mode="polygon"
        color={ theme.colors.primary }
        style="stroke"
        strokeWidth={4}
      />
    </Canvas>
  );
};

const LineChart1 = () => {
  const theme = useTheme();

  const xPoint = (index: number) => {
    return 300 / 7 * index
  }

  const yPoint = (numbers: number[], index: number,) => {
    return 300 / ySpace(numbers) * numbers[index]
  }

  const ySpace = (yPoints: number[]) => {
    return Math.max(...yPoints);
  }

  const durations = [
    0, 80, 93, 155, 244, 202, 244
  ]

  const pathArray = durations.map((_, index) => xPoint(index + 1) + ' ' + yPoint(durations, index) + (durations.length - 1 !== index ? ' L ' : ''))

  const path = `M ${pathArray.join('')}`

  console.log(path, 'sera', pathArray)
  return (
    <Canvas style={{ flex: 1 }}>
      <Path
        path={'M 10 10 C 20 20, 40 20, 50 10 C 20 20, 60 20, 70 10'}
        color={ theme.colors.primary }
        style="stroke"
        strokeJoin="round"
        strokeWidth={5}
        // We trim the first and last quarter of the path
      />
    </Canvas>
  );
};

const HelloWorld = () => {
  const width = 256;
  const height = 256;
  const r = width * 0.33;
  return (
    <Canvas style={{ width, height }}>
      <Group blendMode="multiply">
        <Circle cx={r} cy={r} r={r} color="cyan" />
        <Circle cx={width - r} cy={r} r={r} color="magenta" />
        <Circle cx={width / 2} cy={width - r} r={r} color="yellow" />
      </Group>
    </Canvas>
  );
};

const SportsScreen = () => {
  
  return (
    <>
      <HelloWorld />
      <SVGNotation />
      {/* <LineChart /> */}
      <LineChart1 />
    </>
  )
}

export default memo(SportsScreen)