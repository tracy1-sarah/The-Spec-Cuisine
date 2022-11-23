import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS, { gradient } from "../../data/colors/colors";
import categories from "../../data/categories/categories";
import {
  FlatList,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import foods from "../../data/food/foods";

const width = Dimensions.get("window").width;
const numColumns = 1.5;
const cardWidth = width / 2 - 20;

export default function HomeScreen({ navigation }) {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  // LIST CATEGORIES
  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingVertical: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setSelectedCategoryIndex(index)}
            >
              <View
                style={{
                  backgroundColor:
                    selectedCategoryIndex === index ? COLORS.yellow : COLORS.bg,
                  ...styles.categoryBtn,
                }}
              >
                <View>
                  <Image
                    source={category.image}
                    style={{
                      height: 50,
                      width: 50,
                      resizeMode: "cover",
                    }}
                  />
                </View>

                <Text
                  style={{
                    fontSize: 10,
                    padding: 5,
                    textAlign: "center",
                    color:
                      selectedCategoryIndex == index
                        ? COLORS.white
                        : COLORS.primary,
                  }}
                >
                  {category.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  };

  // FOOD CARD
  const Card = ({ food }) => {
    return (
      <TouchableHighlight
        underlayColor={false}
        // activeOpacity={0.9}
        onPress={() => navigation.navigate("CategoryFood", food)}
      >
        <View style={[styles.card,{ backgroundColor: food.bg}]}>
          <View
            style={{
              alignItems: "center",
              top: 20,
            }}
          >
            <Image source={food.image} style={{ height: 120, width: 100 }} />
          </View>
          <View style={{ marginHorizontal: 20, marginTop: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {food.name}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={gradient.gradient}
        style={{ flex: 1 }}
        start={{
          x: 0.1,
          y: 0,
        }}
        end={{
          x: 0,
          y: 1,
        }}
      >
        <ImageBackground
          style={{ resizeMode: "cover", justifyContent: "center" }}
          source={require("../../assets/images/bg.png")}
        >
          <View style={styles.header}>
            <View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                  Delivery
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 14, marginTop: 4, color: COLORS.dark }}
                >
                  Bancagan, Sambit
                </Text>
                <Icon
                  style={{ marginTop: 4, marginLeft: 4, fontSize: 24 }}
                  name="arrow-drop-down"
                />
              </View>
            </View>
            <Image
              source={require("../../assets/images/tracy.png")}
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
              }}
            />
          </View>
        </ImageBackground>
        {/* SEARCH */}
        <View style={styles.search}>
          <View style={styles.inputContainer}>
            <Icon name="search" size={28} style={{ marginRight: 10 }} />
            <View
              style={{
                height: 20,
                width: 1,
                backgroundColor: COLORS.grey,
                marginRight: 10,
              }}
            ></View>
            <TextInput
              style={{ flex: 1, fontSize: 14 }}
              placeholder="What would you like to eat?"
            />
          </View>
        </View>
        {/* CATEGORIES */}
        <View style={styles.categoryContainer}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Choose Category
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <ListCategories />
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              paddingHorizontal: 20,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Main Course
            </Text>
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
          <View style={{ height: width / numColumns }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              numColumns={2}
              data={foods}
              renderItem={({ item }) => <Card food={item} />}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
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
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  categoryContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 73,
    width: 73,
    marginRight: 10,
    borderRadius: 50,
    alignItems: "center",
    paddingHorizontal: 5,
  },
  card: {
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
