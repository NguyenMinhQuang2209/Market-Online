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
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
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
                {/* <ProductCard showStore={false} />
                <ProductCard showStore={false} />
                <ProductCard showStore={false} /> */}
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
              {/* <View style={styles.p_card_container}>
                <ProductCard showStore={false} />
                <ProductCard showStore={false} />
                <ProductCard showStore={false} />
                <ProductCard showStore={false} />
              </View> */}
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
      <StoreDetail />
    </View>
  );
};

const StoreDetail = () => {
  const [current, setCurrent] = useState("");

  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    if (event.type === "dismissed") {
      setShow(false);
      return;
    }
    if (selectedDate) {
      setDate(selectedDate);
    }
    setShow(false);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const [endDate, setendDate] = useState(null);
  const [endDateShow, setEndDateShow] = useState(false);

  const onEndDateChange = (event, selectedDate) => {
    if (event.type === "dismissed") {
      setEndDateShow(false);
      return;
    }
    if (selectedDate) {
      setendDate(selectedDate);
    }
    setEndDateShow(false);
  };

  const showEndDatepicker = () => {
    setEndDateShow(true);
  };

  const [startTime, setStartTime] = useState(null);
  const [startTimeShow, setStartTimeShow] = useState(false);

  const onStartTimeChange = (event, selectedDate) => {
    if (event.type === "dismissed") {
      setStartTimeShow(false);
      return;
    }
    if (selectedDate) {
      setStartTime(selectedDate);
    }
    setStartTimeShow(false);
  };

  const ShowStartTimePicker = () => {
    setStartTimeShow(true);
  };

  const [endTime, setEndTime] = useState(null);
  const [endTimeShow, setEndTimeShow] = useState(false);

  const onEndTimeChange = (event, selectedDate) => {
    if (event.type === "dismissed") {
      setEndTimeShow(false);
      return;
    }
    if (selectedDate) {
      setEndTime(selectedDate);
    }
    setEndTimeShow(false);
  };

  const showEndTimePicker = () => {
    setEndTimeShow(true);
  };

  return (
    <View style={detailStyles.container}>
      <View style={detailStyles.wrap}>
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View style={detailStyles.tab_container}>
            <View style={detailStyles.tab_wrap_1}>
              <TouchableOpacity
                onPress={() => {
                  setCurrent("");
                }}
                style={[
                  detailStyles.tab_wrap,
                  !current && detailStyles.tab_active,
                ]}
              >
                <Ionicons
                  name="storefront"
                  style={!current && { color: "white" }}
                  size={20}
                />
                <Text
                  style={[
                    detailStyles.tab_txt,
                    !current && detailStyles.tab_active_txt,
                  ]}
                >
                  Cửa hàng
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setCurrent("theme");
                }}
                style={[
                  detailStyles.tab_wrap,
                  current == "theme" && detailStyles.tab_active,
                ]}
              >
                <Ionicons
                  name="color-fill"
                  style={current == "theme" && { color: "white" }}
                  size={20}
                />
                <Text
                  style={[
                    detailStyles.tab_txt,
                    {
                      borderRightWidth: 0,
                    },
                    current == "theme" && detailStyles.tab_active_txt,
                  ]}
                >
                  Theme
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={detailStyles.content_container}>
            {current == "theme" && (
              <View>
                <View style={detailStyles.filter}>
                  <View style={detailStyles.filter_box}>
                    <View style={detailStyles.filter_label}>
                      <Text style={detailStyles.filter_label_txt}>
                        Ngày mở cửa
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        style={detailStyles.filter_box_wrap}
                        onPress={showDatepicker}
                      >
                        <Text>{date && date.toDateString()}</Text>
                      </TouchableOpacity>
                      {show && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={date || new Date()}
                          mode="date"
                          display="spinner"
                          onChange={onChange}
                          onClose={() => setShow(false)}
                        />
                      )}
                    </View>
                  </View>
                  <View style={detailStyles.filter_box}>
                    <View style={detailStyles.filter_label}>
                      <Text style={detailStyles.filter_label_txt}>
                        Ngày đóng cửa
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        style={detailStyles.filter_box_wrap}
                        onPress={showEndDatepicker}
                      >
                        <Text>{endDate && endDate.toDateString()}</Text>
                      </TouchableOpacity>
                      {endDateShow && (
                        <DateTimePicker
                          testID="endTimeDatePicker"
                          value={endDate || new Date()}
                          mode="date"
                          display="spinner"
                          onChange={onEndDateChange}
                          onClose={() => setEndDateShow(false)}
                          locale="vi-VN"
                        />
                      )}
                    </View>
                  </View>
                  <View style={detailStyles.filter_box}>
                    <View style={detailStyles.filter_label}>
                      <Text style={detailStyles.filter_label_txt}>
                        Giờ mở cửa
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        style={detailStyles.filter_box_wrap}
                        onPress={ShowStartTimePicker}
                      >
                        <Text>
                          {startTime && startTime.toLocaleTimeString()}
                        </Text>
                      </TouchableOpacity>
                      {startTimeShow && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={startTime || new Date()}
                          mode="time"
                          display="spinner"
                          onChange={onStartTimeChange}
                          onClose={() => setStartTimeShow(false)}
                          locale="vi-VN"
                        />
                      )}
                    </View>
                  </View>
                  <View style={detailStyles.filter_box}>
                    <View style={detailStyles.filter_label}>
                      <Text style={detailStyles.filter_label_txt}>
                        Giờ đóng cửa
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        style={detailStyles.filter_box_wrap}
                        onPress={showEndTimePicker}
                      >
                        <Text>{endTime && endTime.toLocaleTimeString()}</Text>
                      </TouchableOpacity>
                      {endTimeShow && (
                        <DateTimePicker
                          testID="endTimePicker"
                          value={endTime || new Date()}
                          mode="time"
                          display="spinner"
                          onChange={onEndTimeChange}
                          onClose={() => setEndTimeShow(false)}
                          locale="vi-VN"
                        />
                      )}
                    </View>
                  </View>
                </View>
              </View>
            )}

            {!current && (
              <ScrollView style={{ flex: 1 }}>
                <View>
                  <View style={detailStyles.input_wrap}>
                    <ColorPickerCustom />
                    <ImagePickerCustom />
                    <ImagePickerCustom />
                    <ImagePickerCustom />
                    <ImagePickerCustom />
                    <ImagePickerCustom />
                    <ImagePickerCustom />
                  </View>
                </View>
              </ScrollView>
            )}
          </View>

          <View style={detailStyles.btn_container}>
            <TouchableOpacity style={detailStyles.btn_wrap}>
              <Text style={detailStyles.btn_txt}>Đóng cửa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={detailStyles.btn_wrap}>
              <Text style={detailStyles.btn_txt}>Lưu</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                detailStyles.btn_wrap,
                {
                  backgroundColor: "rgba(0,0,0,0.6)",
                },
              ]}
            >
              <Text style={detailStyles.btn_txt}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={detailStyles.icon_wrap}>
          <Ionicons name="caret-down-circle" size={30} />
        </View>
      </View>
    </View>
  );
};
const ColorPickerCustom = () => {
  return (
    <View style={detailStyles.filter_box}>
      <View style={detailStyles.filter_label}>
        <Text style={detailStyles.filter_label_txt}>Chọn màu</Text>
      </View>
      <View>
        <TouchableOpacity style={detailStyles.filter_box_wrap}>
          <Text>Chọn màu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const ImagePickerCustom = () => {
  const [image, setImage] = useState("");
  const handlePickupImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={detailStyles.filter_box}>
      <View style={detailStyles.filter_label}>
        <Text style={detailStyles.filter_label_txt}>Chọn Ảnh</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={handlePickupImage}
          style={detailStyles.filter_box_wrap_2}
        >
          <Image
            style={[
              detailStyles.image,
              !image && {
                width: 50,
                height: 50,
              },
            ]}
            source={{
              uri:
                image ||
                "https://res.cloudinary.com/sttruyen/image/upload/v1716970566/e8bvdumw00lohutsbhcu.png",
            }}
          />
          <View style={detailStyles.camera}>
            <Ionicons name="camera" size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const detailStyles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    zIndex: 20,
    justifyContent: "flex-end",
  },
  wrap: {
    width: "100%",
    height: "90%",
    backgroundColor: "white",
  },
  icon_wrap: {
    position: "absolute",
    top: -15,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  tab_container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  tab_wrap: {
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(0,0,0,0.1)",
    borderRightWidth: 1,
    alignItems: "center",
    paddingVertical: 3,
  },
  tab_wrap_1: {
    borderColor: "rgba(0,0,0,0.3)",
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 5,
  },
  tab_active: {
    backgroundColor: "#E47070",
  },
  tab_active_txt: {
    color: "white",
  },
  tab_txt: {
    fontFamily: "RobotoMedium",
  },
  content_container: {
    flex: 1,
    marginTop: 5,
  },
  btn_container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  btn_wrap: {
    paddingHorizontal: 20,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: "rgba(255,0,0,0.7)",
  },
  btn_txt: {
    color: "white",
    fontFamily: "RobotoMedium",
  },

  filter_box: {
    width: "45%",
    marginHorizontal: "2.5%",
    marginBottom: 10,
  },
  filter_box_2: {
    width: "95%",
    marginHorizontal: "2.5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  filter_box_wrap: {
    minHeight: 40,
    borderColor: "rgba(0,0,0,0.4)",
    borderWidth: 1,
    borderRadius: 2,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  filter_label: {
    marginBottom: 5,
  },
  filter_label_txt: {
    fontFamily: "RobotoMedium",
  },
  textinput_container: {
    flex: 1,
  },
  textinput: {
    flex: 1,
    height: 40,
    borderColor: "rgba(0,0,0,0.4)",
    paddingHorizontal: 10,
    borderWidth: 1,
    marginRight: 5,
    borderRadius: 5,
  },
  search_btn: {
    width: 100,
    height: 40,
    borderRadius: 50,
    backgroundColor: "rgba(255,0,0,0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
  search_txt: {
    color: "white",
    fontSize: 15,
    fontFamily: "RobotoBold",
  },
  filter: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },

  input_wrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  filter_box_wrap_2: {
    width: "100%",
    aspectRatio: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  camera: {
    position: "absolute",
    right: 2,
    bottom: -2,
  },
});

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
const InteractStoreStatusBtnFloat = ({ handleInteractWithStoreStatus }) => {
  return (
    <TouchableOpacity
      onPress={handleInteractWithStoreStatus}
      style={interactBtnStyles.container}
    >
      <View>
        <EvilIcons
          style={{ color: "white", marginRight: 3 }}
          name="gear"
          size={20}
        />
      </View>
      <Text style={interactBtnStyles.txt}>Chi tiết</Text>
    </TouchableOpacity>
  );
};
const CreateNewsBtnFloat = () => {
  const navigation = useNavigation();
  const handleCreateNews = () => {
    navigation.navigate("(news)", {
      screen: "create",
    });
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
    marginLeft: 3,
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
