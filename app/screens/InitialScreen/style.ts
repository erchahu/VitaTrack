import styled from "styled-components/native";

export const InitialWrap = styled.View`
  position: relative;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  padding-top: 160px;
`

export const RowWithPadding = styled.View`
  width: 100%;
  padding-horizontal: 24px;
`

export const TitleRow = styled(RowWithPadding)`
  margin-top: 10px;
  margin-bottom: 20px;
`

export const RowContent = styled.View`
  width: 100%;
  margin-top: 40px;
`

export const RowFooter = styled.View`
  position: absolute;
  bottom: 60px;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.primaryContainer};
  border-top-right-radius: 80px;
`

export const RowProgressBar = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
`

export const FooterOptLine = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 40px;
  padding-left: 20px;
`