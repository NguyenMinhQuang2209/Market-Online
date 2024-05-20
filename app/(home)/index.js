import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

const index = () => {
  let areaDatas = [
    {
      title: "Rau",
      uri: "https://res.cloudinary.com/sttruyen/image/upload/v1716193581/sxwixpef559a9c5ebcua.png",
    },
    {
      title: "Thịt",
      uri: "https://res.cloudinary.com/sttruyen/image/upload/v1716193865/vatxwpc8svsp9hgal9ht.png",
    },
    {
      title: "Cá",
      uri: "https://res.cloudinary.com/sttruyen/image/upload/v1716193935/juhtg8gt7pdkwbmpjbnh.png",
    },
    {
      title: "Quần áo",
      uri: "https://res.cloudinary.com/sttruyen/image/upload/v1716193974/pvd24vvpeub8bgopy1fi.png",
    },
    {
      title: "Thịt",
      uri: "https://res.cloudinary.com/sttruyen/image/upload/v1716193865/vatxwpc8svsp9hgal9ht.png",
    },
    {
      title: "Thịt",
      uri: "https://res.cloudinary.com/sttruyen/image/upload/v1716193865/vatxwpc8svsp9hgal9ht.png",
    },
  ];

  return (
    <View>
      <Carousel />
      <View style={styles.area_container}>
        <View style={styles.area_title_container}>
          <Text style={styles.area_title_text}>Các gian hàng</Text>
        </View>
        <View style={styles.area_card_container}>
          {areaDatas?.map((item, index) => (
            <AreaCard item={item} key={index} />
          ))}
        </View>
        <View style={styles.watch_more}>
          <TouchableWithoutFeedback>
            <Text>Xem thêm...</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background_gradient: {
    flex: 1,
  },
  area_container: {
    marginTop: 25,
  },
  area_title_container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  area_title_text: {
    fontSize: 20,
  },
  area_card_container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
  area_card: {
    width: "30%",
    height: 100,
    backgroundColor: "rgba(234, 152, 91, 0.15)",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "1.5%",
    borderRadius: 20,
  },
  area_card_txt: {
    marginTop: 5,
  },
  watch_more:{
    flexDirection: "row",
    justifyContent: "center",
    marginTop:8
  }
});

const AreaCard = ({ item }) => {
  return (
    <View style={styles.area_card}>
      <Image
        source={{
          uri: item?.uri,
        }}
        style={styles.image}
      />
      <Text style={styles.area_card_txt}>{item?.title}</Text>
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
        keyExtractor={(item) => item.id}
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
