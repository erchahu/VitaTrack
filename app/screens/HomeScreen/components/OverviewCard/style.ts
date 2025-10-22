import styled from "styled-components/native";

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
  gap: 6px;
`

export const Column = styled.View<FlexLayoutProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  ${({ flex }) => flex !== undefined && `flex: ${flex};`}
`

export const OverviewContainer = styled(Column)`
  margin-horizontal: 24px;
  background-color: ${({ theme }) => theme.colors.onPrimary};
  border-radius: 12px;
  margin-top: 20px;
`

export const OverviewTopContainer = styled(Row)``

export const OverviewTopLeftContainer = styled(Column)`
  border-right-color: ${({ theme }) => theme.colors.secondary};
  border-right-width: 0.5px;
`

export const OverviewTopRightContainer = styled(Column)``

export const OverviewTopRightMiniCard = styled(Column)``

export const OverviewBottomContainer = styled(Row)`
  justify-content: space-between;
  padding-vertical: 16px;
  padding-horizontal: 16px;
`