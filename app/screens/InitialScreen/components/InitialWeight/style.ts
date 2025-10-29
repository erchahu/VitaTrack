// import styled from "styled-components/native";

// const INNER_RADIUS = 100;  // 内圆半径
// const OUTER_RADIUS = 200;  // 外圆半径
// const LINE_HEIGHT = OUTER_RADIUS - INNER_RADIUS; // 线条高度 = 外圆半径 - 内圆半径

// export const WeightLineContainer = styled.View`
//   position: relative;
//   width: ${OUTER_RADIUS * 2}px;
//   height: ${OUTER_RADIUS * 2}px;
//   align-items: center;
//   justify-content: center;
// `;

// export const WeightLine = styled.View<{
//   deg: number
// }>`
//   width: 1px;
//   height: ${LINE_HEIGHT}px;
//   background-color: #f00;
//   position: absolute;
  
//   /* 定位在线条的起点（内圆边缘） */
//   top: ${({ deg }) => {
//     const rad = deg * Math.PI / 180;
//     return OUTER_RADIUS - INNER_RADIUS * Math.cos(rad) - LINE_HEIGHT / 2;
//   }}px;
  
//   left: ${({ deg }) => {
//     const rad = deg * Math.PI / 180;
//     return OUTER_RADIUS + INNER_RADIUS * Math.sin(rad);
//   }}px;
  
//   transform: rotate(${({ deg }) => deg}deg);
// `;

import styled from "styled-components/native";

// 可调节的参数
const INNER_RADIUS = 200;  // 内圆半径 - 可以调大
const OUTER_RADIUS = 300;  // 外圆半径 - 可以调大
const LINE_HEIGHT = OUTER_RADIUS - INNER_RADIUS; // 线条高度
const TOTAL_LINES = 720;   // 总线条数

export const WeightLineContainer = styled.View`
  position: relative;
  width: ${OUTER_RADIUS * 2}px;
  height: ${OUTER_RADIUS * 2}px;
`;

export const WeightLine = styled.View<{
  deg: number;
  index: number;
}>`
  position: absolute;
  background-color: #f00;
  
  width: 1px;
  height: 20px;

  /* 定位计算 - 从内圆边缘开始 */
  top: ${({ deg }) => {
    const rad = deg * Math.PI / 180;
    return OUTER_RADIUS + INNER_RADIUS * Math.sin(rad);
  }}px;
  
  left: ${({ deg }) => {
    const rad = deg * Math.PI / 180;
    return OUTER_RADIUS + INNER_RADIUS * Math.cos(rad);
  }}px;
  
  transform: rotate(${({ deg }) => deg + 90}deg);
`;
