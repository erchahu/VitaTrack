import React, { memo, useCallback, useState } from "react";
import { Button, Icon, ProgressBar, Text, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FooterOptLine, InitialWrap, RowContent, RowFooter, RowProgressBar, RowWithPadding, TitleRow } from "./style";
import { InitialGoal, InitialAge, InitialSex, InitialWeight, InitialMood} from "./components";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface InitialData {
  goal?: number;
  sex?: number;
}

const InitialScreen = () => {

  const navigation = useNavigation()
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [data, setData] = useState<InitialData>()
  const insets = useSafeAreaInsets();

  const handleMoodPress = (mood: string) => {
    console.log('选中的情绪:', mood); // 这里使用 useCallback
  };

  const infoArray = [
    { key: 'goal', title: 'What is your goal?', component: <InitialGoal /> },
    { key: 'sex', title: 'Male or Female?', desc: 'Men and women need \ndifferent nutrition approaches', component: <InitialSex /> },
    { key: 'age', title: 'How old are you?', desc: 'Your age is necessary \nfor establishing an appropriate nutrition plan', component: <InitialAge /> },
    { key: 'weight', title: 'Your current weight', desc: 'Your weight is necessary \nfor establishing a good nutrition plan', component: <InitialWeight /> },
    { key: 'Mood', title: 'Your current mood', desc: '情绪会影响身体状态, 你现在开心吗? 难过? 还是佛系?', component: <InitialMood onMoodPress={handleMoodPress} /> },
  ]

  const handlePrev = useCallback(() => {
    if (currentIndex)
    setCurrentIndex(currentIndex - 1)
  }, [currentIndex, setCurrentIndex])

  const handleNext = useCallback(() => {
    if (currentIndex === infoArray.length - 1) {
      return navigation.navigate('mainTabs')
    }

    // if (currentIndex === 0 && data?.goal === undefined) return;
    setCurrentIndex(currentIndex + 1)
  }, [currentIndex, infoArray.length, navigation])

  return (
    <InitialWrap>
      <RowWithPadding>
        <Text variant="bodySmall" style={{ color: theme.colors.backdrop }}>{currentIndex + 1} of {infoArray.length}</Text>
      </RowWithPadding>
      <TitleRow>
        <Text variant="headlineMedium" style={{ color: theme.colors.primary }}>{infoArray[currentIndex].title}</Text>
      </TitleRow>
      {infoArray[currentIndex].desc && <RowWithPadding>
        <Text variant="bodySmall" style={{ color: theme.colors.backdrop }}>{infoArray[currentIndex].desc}</Text>
      </RowWithPadding>}
      <RowContent>
        {infoArray[currentIndex].component}
      </RowContent>
      <RowFooter>
        <FooterOptLine>
          {currentIndex !== 0 ? <Button mode="text" onPress={handlePrev}>
            <Icon
              source="chevron-left"
              size={26}
              color={theme.colors.onPrimaryContainer}
            />
          </Button> : <View />}
          <Button mode="text" onPress={handleNext}>
            CONTINUE
          </Button>
        </FooterOptLine>
        <RowProgressBar>
          <ProgressBar progress={0.5} />
        </RowProgressBar>
      </RowFooter>
      
    </InitialWrap>
  )
}

export default memo(InitialScreen);