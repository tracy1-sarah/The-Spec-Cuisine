import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import React, { useEffect, useRef } from "react";
import Svg, { G, Circle } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../../data/colors/colors";
import { useNavigation } from "@react-navigation/native";

export default function NextButton({ percentage }) {
    
  const navigation = useNavigation();
        
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef(null);
    
    const animation = (toValue) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: true
        }).start()
        
    }

    useEffect(() => {
        animation(percentage)
    }, [percentage])

    useEffect(() => {
        progressAnimation.addListener((value) => {
          const strokeDashoffset =
            circumference - (circumference * value.value) / 100;
          if (progressRef?.current) {
            progressRef.current.setNativeProps({
              strokeDashoffset,
            });
          }
        });
    })

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke="#E6E7E8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            stroke="#FBA950"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
          />
        </G>
      </Svg>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={() => navigation.navigate("Home")}
      >
        <AntDesign name="arrowright" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  button: {
    position: "absolute",
    backgroundColor: COLORS.yellow,
    borderRadius: 100,
    padding: 20,
  },
});
