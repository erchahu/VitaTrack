import { Canvas } from "@shopify/react-native-skia";
import styled from "styled-components/native";

export const SportsBox = styled.View`
  height: 100%;
  flex: 1;
`

export const SportsEmpty = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`

export const SportsCenter = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 8px;
`

export const SportsCanvas = styled(Canvas)`
  flex: 1;
  
`