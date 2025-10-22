import styled from "styled-components/native";

export const HomeContainer = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const HomeTopImage = styled.ImageBackground`
  width: 100%;
  aspect-ratio: 1422 / 800;
`

export const MiniCardItem = styled.View`
  width: 48%;
`

export const MiniCardsContainer = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin-horizontal: 16px;
  margin-top: 8px;
`

export const HomeScrollView = styled.ScrollView`
  flex: 1;
`