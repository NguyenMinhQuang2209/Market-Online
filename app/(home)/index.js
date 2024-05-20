import { View, Text, Image, FlatList, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";

const index = () => {
  return (
    <View>
      <Carousel />
      <Text>Các gian hàng</Text>
    </View>
  );
};
const Carousel = () => {
  const windowWidth = Dimensions.get("window").width - 20;
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);


  let imageData = [
    {
      id: 1,
      image: require("@/assets/images/1.jpg"),
    },
    {
      id: 2,
      image: require("@/assets/images/2.jpg"),
    },
    {
      id: 3,
      image: require("@/assets/images/3.jpg"),
    },
  ];
  useEffect(() => {
    const scrollTimer = setTimeout(() => {
      let nextIndex =
        currentIndex === imageData.length - 1 ? 0 : currentIndex + 1;
      flatListRef.current.scrollToIndex({ index: nextIndex });
      setCurrentIndex(nextIndex);
    }, 4000);
    return () => clearTimeout(scrollTimer);
  }, [currentIndex]);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;

    let currentScrollIndex = Math.floor(scrollPosition / windowWidth);
    setCurrentIndex(currentScrollIndex);
  };

  const renderDotIndicator = () => {
    return imageData.map((_, index) => {
      let color = "rgba(0,0,0,0.2)";
      if (index == currentIndex) {
        color = "black";
      }
      return (
        <View
          style={{
            backgroundColor: color,
            height: 10,
            width: 10,
            borderRadius: 5,
            marginHorizontal: 3,
          }}
        ></View>
      );
    });
  };

  const renderImage = ({ item }) => {
    return (
      <View style={{ marginHorizontal: 10 }}>
        <Image
          source={item.image}
          style={{ width: windowWidth, height: 180, borderRadius: 20 }}
        />
      </View>
    );
  };

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        ref={flatListRef}
        data={imageData}
        renderItem={renderImage}
        horizontal={true}
        pagingEnabled={true}
        keyExtractor={(item) => item.id.toString()}
        onScroll={handleScroll}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 12,
        }}
      >
        {renderDotIndicator()}
      </View>
    </View>
  );
};

export default index;
