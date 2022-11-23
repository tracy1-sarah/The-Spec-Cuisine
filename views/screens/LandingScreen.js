import React,{useState, useRef} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet,  View, Animated } from "react-native";
import COLORS from "../../data/colors/colors";
import { FlatList } from "react-native-gesture-handler";
import slides from "../../data/slides/slides";
import Onboard from "../components/Onboard";
import Paginator from "../components/Paginator";
import NextButton from "../components/NextButton";

export default function LandingScreen() {

  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null)

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index)
  }).current

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={slides}
          renderItem={({ item }) => <Onboard item={item} />}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
        />
      </View>

      <Paginator data={slides} scrollX={scrollX} />
      <NextButton 
       
        percentage={(currentIndex + 1) * (100 / slides.length)}
      />

      {/* <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/salade.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={{ top: -80 }}>
          <Text style={styles.title}> Yummy Food </Text>
          <Text style={styles.description}>
            Finger-licking foods right at your doorstep
          </Text>
        </View>
        <View style={styles.indicatorContainer}>
          <View style={styles.currentIndicator}></View>
          <View style={styles.indicator}></View>
          <View style={styles.indicator}></View>
        </View>
        <PrimaryButton
          title="Get Started"
          onPress={() => navigation.navigate("Home")}
        />
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  
  },

});
