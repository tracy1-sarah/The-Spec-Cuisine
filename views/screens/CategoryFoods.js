import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../data/colors/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FlatList, ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import foods from "../../data/food/foods";

const width = Dimensions.get("window").width;
const numColumns = 1.5;
const cardWidth = width / 2 - 20;

export default function CategoryFoods({ navigation }) {

  // CATEGORY FOOD CARD
  const Card = ({ food }) => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingVertical: 5,
        }}
      >
        <View style={[styles.card, { backgroundColor: food.bg }]}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image source={food.image} style={{ height: 100, width: 80 }} />
          </View>
          <View style={{ marginHorizontal: 20, marginBottom:10 }}>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              {food.name}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  };

  const FoodCard = ({ food }) => {
    return (
      <TouchableHighlight
        underlayColor="COLORS.white"
        activeOpacity={0.9}
        onPress={() => navigation.navigate("DetailScreen", food)}
      >
        <View style={styles.foodCard}>
          <View style={{ alignItems: "center" }}>
            <Image source={food.image} style={{ height: 120, width: 100 }} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Hello Tracy
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 12, marginTop: 2, color: COLORS.dark }}>
              It's lunch time!
            </Text>
          </View>
        </View>
        <Icon name="search" size={28} />
      </View>

      {/* <View style={styles.pattern}></View> */}

      {/* CATEGORY */}
      <View style={styles.category}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Category</Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 14,
            color: COLORS.primary,
          }}
        >
          See all
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={foods}
          renderItem={({ item }) => <Card food={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* NEARBY FOODS */}
      <View style={styles.foods}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Nearby Food
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon style={{ marginTop: 4, fontSize: 16 }} name="location-on" />
            <Text style={{ fontSize: 12, marginTop: 4, color: COLORS.grey }}>
              Bancagan, Sambit
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 14,
              color: COLORS.primary,
            }}
          >
            See all
          </Text>
        </View>
      </View>
        <View style={{ height: width / numColumns }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={foods}
            renderItem={({ item }) => <FoodCard food={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  search: {
    marginTop: 20,
    flexDirection: "row",
  },
  pattern: {
    marginTop: 20,
    borderRadius: 10,
    width: width,
    height: 100,
    backgroundColor: COLORS.yellow,
    flexDirection: "row",
  },
  category: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  card: {
    height: 120,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 20,
    elevation: 13,
    backgroundColor: COLORS.bg,
  },
  foods: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  foodCard: {
    height: 200,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 25,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.bg,
  },
});
