import React from "react";
import { View, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withRepeat,
  withSpring,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";

const { width, height } = Dimensions.get("window");
const FILLED_HEIGHT = height * 0.2;
const FILLED_WIDTH = width;

const AnimatedPath = Animated.createAnimatedComponent(Path);

const SpaceStain: React.FC = () => {
  const animatedValue = useSharedValue(0);

  animatedValue.value = withRepeat(
    withSpring(1, { damping: 1.5, stiffness: 80 }),
    -1,
    true,
  );

  const animatedProps = useAnimatedProps(() => {
    const move = animatedValue.value * 15;
    const d = `
      M0,${FILLED_HEIGHT} 
      Q${FILLED_WIDTH - move},${FILLED_HEIGHT - move} ${FILLED_WIDTH},0
      L${FILLED_WIDTH},${FILLED_HEIGHT}
      Z
    `;

    return {
      d,
    };
  });

  return (
    <View style={{ position: "absolute", bottom: 0, right: 0, opacity: 0.3 }}>
      <Svg width={FILLED_WIDTH} height={FILLED_HEIGHT}>
        <AnimatedPath animatedProps={animatedProps} fill="purple" />
      </Svg>
    </View>
  );
};

export default SpaceStain;
