import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import DefaultHeader from "../Component/Header/DefaultHeader";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import ProductCard from "../Component/Card/ProductCard";
import NewsCard from "../Component/Card/NewsCard";
import { useNavigation } from "expo-router";
const store = () => {
  const [current, setCurrent] = useState("");
  const [like, setLike] = useState(false);
  const [storeStatus, setStoreStatus] = useState(false);
  const scrollViewRef = useRef(null);
  const topViewHeight = useRef(new Animated.Value(200)).current;
  const readyForAnimator = useRef(0);

  const handleScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    let isToTop = false;

    if (currentOffset <= 0) {
      isToTop = true;
      readyForAnimator.current += 1;
    } else {
      readyForAnimator.current = 0;
    }

    if (isToTop && readyForAnimator.current >= 2) {
      Animated.timing(topViewHeight, {
        toValue: 200,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(topViewHeight, {
        toValue: 0,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleInteractWithStoreStatus = useCallback(() => {
    setStoreStatus((pre) => !pre);
  });

  const [theme, setTheme] = useState({
    bgColor: "",
    textColor: "black",
    cardBgColor: "",
    cardTextColor: "white",
    cardBgImage:
      "https://res.cloudinary.com/sttruyen/image/upload/v1716257351/x2v7kcn2qnm2odi6gdrc.jpg",
    bgOpacity: 1,
    thumbnailImage:
      "https://s3-alpha-sig.figma.com/img/4f96/d73e/e7d4383ade2f27ee798880e5cc8f8181?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RUzS1EsxqVQDmZVHoiw~qH48DwcKKH3B5B4mQAZRDA2X8CPXhupx8VKJ14PdpoXTc3Rc~eWYFBan3oq7OmMrf7B7dJhbB-hbJd1RzjWdPy2shuIMS0wUmCo642Y4tpB39jgfZwKpDI~vrYy3g5Z07bFNh3Y-uXH2e9xXpR6lvJx75ZsAplWcXKl1cCnKp1hG~yd-q-9UqrYBvTw0ud2p~EPYL0xGvi3buJqzIk2AB66jxPrfC3vJ~8Lg~OvsLU0bsBpycOm8hD5PG-00Qtp218CYI5w1lJ0kra0IOUEhxwF7hAcGdTNCLLHXL0KV2QQcaqfkdl3CQsfCVzcAEqoRhg__",
  });

  const navigation = useNavigation();
  const handleChat = () => {
    navigation.navigate("(chat)", {
      screen: "chatDetail",
      params: {
        name: "Bà Sáu",
      },
    });
  };
  return (
    <View
      style={{ width: "100%", height: "100%", backgroundColor: theme.bgColor }}
    >
      <DefaultHeader title={"Gian hàng bà Sáu"} textColor={theme.textColor} />
      <Animated.View style={[styles.bg_container, { height: topViewHeight }]}>
        <Image
          style={[styles.bg_image]}
          source={{
            uri: theme?.thumbnailImage,
          }}
        />
      </Animated.View>
      <View style={styles.infor_container}>
        <View style={styles.infor_image_wrap}>
          <Image
            style={styles.infor_image}
            source={{
              uri: "https://res.cloudinary.com/sttruyen/image/upload/v1711269323/Sttruyenxyz/u2a0bb4khx55wj1wzrdv.jpg",
            }}
          />
        </View>
        <View style={styles.detail_container}>
          <View style={styles.detail_wrap}>
            <Text
              style={[
                styles.detail_txt,
                {
                  color: theme.textColor,
                },
              ]}
            >
              Bà Sáu
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={handleChat} style={styles.chat_wrap}>
              <View style={{ marginRight: 5 }}>
                <Ionicons name="chatbox-ellipses" size={13} />
              </View>
              <Text
                style={[
                  styles.chat_txt,
                  {
                    color: theme.textColor,
                  },
                ]}
              >
                Nhắn tin
              </Text>
            </TouchableOpacity>
            {storeStatus && (
              <View style={[styles.store_status, styles.store_status_close]}>
                <Text
                  style={[
                    styles.store_status_txt,
                    styles.store_status_close_txt,
                  ]}
                >
                  Đóng cửa
                </Text>
              </View>
            )}
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setLike((pre) => !pre);
          }}
        >
          <Ionicons
            style={{ color: like ? "red" : theme.textColor }}
            name="heart-circle-sharp"
            size={45}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tab_container}>
        <TouchableOpacity
          onPress={() => {
            setCurrent("");
          }}
          style={[styles.tab_wrap, !current && styles.tab_wrap_active]}
        >
          <Text
            style={[
              styles.tab_txt,
              {
                color: theme.textColor,
              },
            ]}
          >
            Gian hàng
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCurrent("news");
          }}
          style={[styles.tab_wrap, current == "news" && styles.tab_wrap_active]}
        >
          <Text
            style={[
              styles.tab_txt,
              {
                color: theme.textColor,
              },
            ]}
          >
            Tin tức
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.gap}></View>

      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        style={{ flex: 1 }}
      >
        {!current && (
          <View>
            <View style={styles.p_container}>
              <View style={styles.p_title}>
                <Text
                  style={[
                    styles.p_title_txt,
                    {
                      color: theme.textColor,
                    },
                  ]}
                >
                  Sản phẩm đặc biệt
                </Text>
              </View>
              <View style={styles.p_card_container}>
                <ProductCard
                  showStore={false}
                  cardStyle={{
                    bg: theme.cardBgColor,
                    txtColor: theme.cardTextColor,
                    bgImage: theme.cardBgImage,
                    bgOpacity: theme.bgOpacity,
                  }}
                />
                <ProductCard
                  showStore={false}
                  cardStyle={{
                    bg: theme.cardBgColor,
                    txtColor: theme.cardTextColor,
                    bgImage: theme.cardBgImage,
                    bgOpacity: theme.bgOpacity,
                  }}
                />
                <ProductCard showStore={false} />
                <ProductCard showStore={false} />
                <ProductCard showStore={false} />
              </View>
            </View>
            <View
              style={[
                styles.p_container,
                {
                  marginTop: 50,
                },
              ]}
            >
              <View style={styles.p_title}>
                <Text
                  style={[
                    styles.p_title_txt,
                    {
                      color: theme.textColor,
                    },
                  ]}
                >
                  Sản phẩm
                </Text>
              </View>
              <View style={styles.p_card_container}>
                <ProductCard showStore={false} />
                <ProductCard showStore={false} />
                <ProductCard showStore={false} />
                <ProductCard showStore={false} />
              </View>
            </View>
          </View>
        )}
        {current == "news" && (
          <View style={{ marginTop: 10, paddingHorizontal: 20, flex: 1 }}>
            <NewsCard tabbar={true} />
            <NewsCard tabbar={true} />
          </View>
        )}
      </ScrollView>

      <CustomBtnFloat />
      {!current && (
        <InteractStoreStatusBtnFloat
          handleInteractWithStoreStatus={handleInteractWithStoreStatus}
          storeStatus={storeStatus}
        />
      )}
      {current == "news" && <CreateNewsBtnFloat />}
    </View>
  );
};

const CustomBtnFloat = () => {
  return (
    <View style={btnStyles.container}>
      <View>
        <Ionicons
          style={{ color: "white", marginRight: 3 }}
          name="color-fill"
          size={20}
        />
      </View>
    </View>
  );
};
const InteractStoreStatusBtnFloat = ({
  handleInteractWithStoreStatus,
  storeStatus,
}) => {
  return (
    <TouchableOpacity
      onPress={handleInteractWithStoreStatus}
      style={interactBtnStyles.container}
    >
      <View>
        <Ionicons
          style={{ color: "white", marginRight: 3 }}
          name="storefront"
          size={20}
        />
      </View>
      <Text style={interactBtnStyles.txt}>
        {storeStatus ? "Mở cửa" : "Đóng cửa"}
      </Text>
    </TouchableOpacity>
  );
};
const CreateNewsBtnFloat = () => {
  const navigation = useNavigation();
  const handleCreateNews = () => {
    navigation.navigate("(news)",{
      screen:"create"
    })
  };
  return (
    <TouchableOpacity
      onPress={handleCreateNews}
      style={interactBtnStyles.container}
    >
      <View>
        <Ionicons
          style={{ color: "white", marginRight: 3 }}
          name="newspaper"
          size={20}
        />
      </View>
      <Text style={interactBtnStyles.txt}>Tạo tin</Text>
    </TouchableOpacity>
  );
};
const interactBtnStyles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 90,
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,15,0,1)",
    borderRadius: 50,
    elevation: 5,
    flexDirection: "row",
  },
  txt: {
    color: "white",
    fontFamily: "RobotoMedium",
    marginLeft:3
  },
});
const btnStyles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,15,0,1)",
    borderRadius: 50,
    elevation: 5,
    flexDirection: "row",
  },
  txt: {
    color: "white",
    fontFamily: "RobotoMedium",
  },
});

const styles = StyleSheet.create({
  container: {},
  bg_container: {
    height: 170,
  },
  bg_image: {
    width: "100%",
    height: "100%",
  },
  infor_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  infor_image_wrap: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  infor_image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  detail_container: {
    flex: 1,
  },
  detail_txt: {
    fontFamily: "RobotoBold",
    fontSize: 17,
  },
  detail_wrap: {
    marginBottom: 3,
    paddingLeft: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  store_status: {
    marginLeft: 10,
    paddingHorizontal: 10,
    height: 25,
    borderRadius: 50,
    borderColor: "rgba(0,0,0,0.3)",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  store_status_close: {
    backgroundColor: "red",
  },
  store_status_close_txt: {
    color: "white",
    fontFamily: "RobotoMedium",
    borderWidth: 0,
  },
  chat_wrap: {
    width: 90,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(0,0,0,0.4)",
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: "row",
  },
  tab_container: {
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 50,
  },
  tab_wrap: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: 50,
  },
  tab_wrap_active: {
    borderBottomColor: "rgba(0,0,0,0.5)",
    borderBottomWidth: 2,
  },
  tab_txt: {
    fontSize: 18,
    fontFamily: "RobotoMedium",
  },
  gap: {
    marginTop: 20,
    marginBottom: 5,
    marginHorizontal: 10,
    backgroundColor: "rgba(0,0,0,0.08)",
    height: 10,
    borderRadius: 5,
  },
  p_container: {
    marginTop: 7,
  },
  p_title: {
    alignItems: "center",
  },
  p_title_txt: {
    fontSize: 18,
    fontFamily: "RobotoBold",
  },
  p_card_container: {
    marginTop: 13,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default store;
