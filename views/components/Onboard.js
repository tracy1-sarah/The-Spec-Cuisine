import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import COLORS from "../../data/colors/colors";

export default function Onboard({ item }) {
  const { width } = useWindowDimensions();
  return (
      <View style={[styles.container, { width }]}>
        <Image
          source={item.image}
          style={[styles.image, { width, resizeMode: "contain" }]}
        />

        <View style={{ flex: 0.3 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: COLORS.slider,
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    color: COLORS.dark,
    textAlign: "center",
    paddingHorizontal: 12,
  },
});
