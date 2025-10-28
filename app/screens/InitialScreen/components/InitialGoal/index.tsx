import React, { memo } from "react";
import RowWithCircleRadius from "../../../../styles/RadioGroup/RowWithCircleRadius";
import { RowWithPadding } from "../../style";

const InitialGoal = () => {

  const goals = [
    { key: 'healthier', title: 'Be healthier', desc: 'Eat and train for optimum health' },
    { key: 'lose', title: 'Lose weight', desc: 'Get leaner and increase your stamina' },
    { key: 'gain', title: 'Gain weight', desc: 'Build muscle strength and flexibility' }
  ]

  return (
    <RowWithPadding>
      <RowWithCircleRadius data={goals} onChange={() => {}} style={{ itemGap: 40 }} />
    </RowWithPadding>
  )
}

export default memo(InitialGoal);