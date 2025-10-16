import { memo } from "react";
import FlatSelectorLikeIOS from "../../../../styles/FlatSelectorLikeIOS";
import { AgeContainer } from "./style";

const InitailAge = () => {

  const ageArray = Array.from({ length: 94 }, (_, index) => index + 6).map((item) => {
    return {
      key: item.toString(),
      title: item.toString(),
    }
  });

  return (
    <AgeContainer>
      <FlatSelectorLikeIOS data={ageArray} defaultValue='6' />
    </AgeContainer>
  )
}

export default memo(InitailAge)