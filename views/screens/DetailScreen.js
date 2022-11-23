import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../data/colors/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ScrollView } from "react-native-gesture-handler";
import foods from "../../data/food/foods";

export default function DetailScreen({ navigation, route }) {
  const item = route.params;
  return (
    <SafeAreaView
      style={{
        paddingBottom: 20,
        backgroundColor: COLORS.white,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
      }}
    >
        <View style={styles.header}>
          <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
          <Icon name="favorite-outline" size={28} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              height: 450,
              marginTop: 20,
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: 16, color: COLORS.grey, marginTop: 10 }}>
              {item.chef}
            </Text>

            {/* RATE */}
            <View style={styles.innerContainer}>
              <View
                style={{
                  borderRadius: 30,
                  width: 70,
                  height: 35,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: COLORS.bg,
                  flexDirection: "row",
                }}
              >
                <Icon name="star-rate" size={20} color={COLORS.yellow} />
                <Text>{item.rate}</Text>
              </View>
              {/* DELIVERY AND TIME CONTAINER */}
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    marginTop: 10,
                    borderRadius: 30,
                    width: 100,
                    height: 35,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: COLORS.bg,
                    flexDirection: "row",
                  }}
                >
                  <Icon name="delivery-dining" size={28} color={COLORS.blue} />
                  <Text>{item.time}</Text>
                </View>
                <View style={{ top: -70, left: 50 }}>
                  <Image source={item.image} style={styles.image} />
                </View>
              </View>
            </View>

            <View style={styles.description}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Description
              </Text>
              <Text style={{ marginTop: 10 }}>{item.description}</Text>
            </View>
          </View>
        </ScrollView>
      <View style={styles.details}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  innerContainer: {
    marginTop: 30,
  },
  image: {
    width: 300,
    height: 300,
  },
  description: {
    bottom: 50,
    paddingHorizontal: 10,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: COLORS.primary,
  },
});
