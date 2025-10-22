import styled from "styled-components/native";
import { Text } from "react-native-paper";

export type JustifyContent = 'space-between' | 'center' | 'space-around' | 'flex-end' | 'flex-start';
export type AlignItems = 'flex-start' | 'center' | 'flex-end' | 'stretch';

export interface FlexLayoutProps {
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  flex?: number;
}

export const Row = styled.View<FlexLayoutProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  ${({ flex }) => flex !== undefined && `flex: ${flex};`}
`

export const Column = styled.View<FlexLayoutProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  ${({ flex }) => flex !== undefined && `flex: ${flex};`}
`

export const OverviewContainer = styled(Column)`
  margin-horizontal: 16px;
  background-color: ${({ theme }) => theme.colors.onPrimary};
  border-radius: 12px;
  margin-top: 20px;
`

export const OverviewTopContainer = styled(Row)`
  align-items: stretch;
`

export const OverviewTopLeftContainer = styled(Column)`
  border-right-color: ${({ theme }) => theme.colors.outlineVariant};
  border-right-width: 0.5px;
  flex: 1;
  padding: 16px;
  gap: 8px;
  justify-content: center;
`

export const OverviewTopRightContainer = styled(Column)`
  flex: 1;
  align-items: stretch;
`

export const OverviewTopRightSection = styled(Column)<{ withBorder?: boolean }>`
  gap: 8px;
  padding: 16px;
  ${({ withBorder, theme }) =>
    withBorder &&
    `
    border-top-width: 0.5px;
    border-top-color: ${theme.colors.outlineVariant};
  `}
`

export const OverviewBottomContainer = styled(Row)`
  justify-content: space-between;
  padding: 16px;
  border-top-width: 0.5px;
  border-top-color: ${({ theme }) => theme.colors.outlineVariant};
`

export const CurrentValueText = styled(Text)`
  font-size: 32px;
  font-weight: bold;
  line-height: 32px;
`

export const TargetValueText = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.outline};
  opacity: 0.6;
`

export const OverviewBottomTitle = styled(Row)`
  gap: 6px;
`