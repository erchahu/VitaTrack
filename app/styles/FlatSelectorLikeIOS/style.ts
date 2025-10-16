import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';

export const PickerContainer = styled.View`
  height: ${50 * 7}px;
  width: 300px;
  align-self: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  overflow: hidden;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.outline};
`;

export const GradientOverlay = styled(LinearGradient)<{ top?: boolean; bottom?: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  height: ${50 * 3}px;
  ${({ top }) => top && `
    top: 0;
  `}
  ${({ bottom }) => bottom && `
    bottom: 0;
  `}
  z-index: 2;
  pointer-events: none;
`;

export const SelectionIndicator = styled.View`
  position: absolute;
  top: 50%;
  left: 8px;
  right: 8px;
  height: ${50}px;
  margin-top: -${50 / 2}px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.outline};
  border-bottom-color: ${({ theme }) => theme.colors.outline};
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`;