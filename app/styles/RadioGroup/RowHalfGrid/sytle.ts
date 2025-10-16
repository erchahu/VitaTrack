import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const RowContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const RadioItem = styled(Card)<{
  isChecked: boolean;
}>`
  flex: 1;
  background-color: ${({ isChecked, theme }) => 
    isChecked ? theme.colors.primaryContainer : theme.colors.surface};
`