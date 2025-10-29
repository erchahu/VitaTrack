import { memo } from "react";
import { Text } from "react-native-paper";
import { WeightLine, WeightLineContainer } from "./style";

const MAX_WEIGHT = 36
const REDIUS = 30

const TOTAL_LINES = 720;

const InitialWeight = () => {
  const weightArr = Array.from({length: TOTAL_LINES}, (_, i) => i);
  const everyDegree = 360 / TOTAL_LINES;

  return (
    <>
      <Text>体重 - 720等分刻度</Text>
      <WeightLineContainer>
        {weightArr.map((_, index) => (
          <WeightLine 
            key={index} 
            deg={index * everyDegree}
            index={index}
          />
        ))}
      </WeightLineContainer>
    </>
  );
};

export default memo(InitialWeight)