import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const RowContainer = styled.View`
  display: flex;
  flex-direction: column;
`

export const RadioItem = styled(Card)<{
  isChecked: boolean;
  itemGap: number;
}>`
  margin-bottom: ${({ itemGap }) => itemGap}px;
  border-radius: 16px;
  border-top-right-radius: 64px;
  background-color: ${({ isChecked, theme }) => 
    isChecked ? theme.colors.primaryContainer : theme.colors.surface};
`

export const RadioItemContent = styled(Card.Content)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`