import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Link, useNavigation } from "expo-router";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
const chatDetail = () => {
  const route = useRoute();
  const { name } = route.params;
  const [targetName, setTargetName] = useState("");
  const navigation = useNavigation();
  const handleShowBill = () => {
    navigation.navigate("(orderDetail)", {
      screen: "orderDetail",
      params: {
        name,
      },
    });
  };

  useEffect(() => {
    setTargetName(name);
  }, [name]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.infor_container}>
          <View style={styles.header_container}>
            <View style={styles.header_custom_container}>
              <View style={styles.icon_container}>
                <Link href={"(chat)/chat"}>
                  <EvilIcons name="arrow-left" size={25} />
                </Link>
              </View>
              <View style={styles.title_container}>
                <Text style={styles.title_txt}>{"Bà tân"}</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.bill_container}
                  onPress={handleShowBill}
                >
                  <Image
                    style={styles.bill_image}
                    source={require("@/assets/images/bill.png")}
                  />
                  <Text style={styles.bill_txt}>Đơn hàng</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <ScrollView style={styles.card_container}>
            <ChatDetailCard content={"Not hello"} />
            <ChatDetailCard isNotOwner={true} content={"Hello world"} />
            <ChatDetailCard isNotOwner={true} content={"Hello world"} />
            <ChatDetailCard content={"Not hello"} />
            <ChatDetailCard isNotOwner={true} content={"Hello world"} />
            <ChatDetailCard content={"Not hello"} />
            <ChatDetailCard isNotOwner={true} content={"Hello world"} />
            <ChatDetailCard content={"Not hello"} />
            <ChatDetailCard isNotOwner={true} content={"Hello world"} />
            <ChatDetailCard content={"Not hello"} />
            <ChatDetailCard isNotOwner={true} content={"Hello world"} />
            <ChatDetailCard content={"Not hello"} />
            <ChatDetailCard isNotOwner={true} content={"Hello world"} />
            <ChatDetailCard content={"Not hello"} />
            <ChatDetailCard isNotOwner={true} content={"Hello world"} />
            <ChatDetailCard content={"Not hello"} />
            <ChatDetailCard isNotOwner={true} content={"Hello world"} />
            <ChatDetailCard content={"Not hello"} />
            <ChatDetailCard isNotOwner={true} content={"Hello world"} />
            <ChatDetailCard content={"Not hello"} />
            <ChatDetailCard isNotOwner={true} content={"Hello world"} />
            <ChatDetailCard content={"Not hello"} />
            <ChatDetailCard isNotOwner={true} content={"Hello world"} />
            <View style={{ height: 20 }}></View>
          </ScrollView>
        </View>
        <View style={styles.input_big_container}>
          <View style={styles.input_container}>
            <View style={styles.input_text_container}>
              <TextInput
                style={styles.input_text}
                placeholder="Nội dung..."
                multiline={true}
              />
            </View>
            <View style={styles.input_btn_container}>
              <TouchableOpacity>
                <Text style={{ color: "white" }}>Gửi</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const ChatDetailCard = ({ isNotOwner, content }) => {
  return (
    <View style={isNotOwner ? styles.left : styles.right}>
      <View
        style={[
          styles.card_detail_container,
          isNotOwner ? styles.left_color : styles.right_color,
        ]}
      >
        <Text
          style={isNotOwner ? styles.left_txt_color : styles.right_txt_color}
        >
          {content}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    position: "relative",
    height: "100%",
  },
  header_container: {
    height: 50,
  },
  card_container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  infor_container: {
    height: "100%",
    paddingBottom: 50,
  },
  input_big_container: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "column-reverse", // Reverse column direction
    alignItems: "flex-end",
  },
  input_container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  input_icon_container: {
    width: 30,
    height: 30,
    borderBlockColor: "rgba(0,0,0,1)",
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 3,
  },
  input_text: {
    padding: 5,
    paddingHorizontal: 10,
    textAlignVertical: "top",
  },
  input_text_container: {
    flex: 1,
    minHeight: 30,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.1)",
    justifyContent: "center",
    paddingTop: 5,
  },
  input_btn_container: {
    width: 50,
    height: 35,
    backgroundColor: "rgba(288,122,122,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 0,
  },
  left: {
    flexDirection: "row",
  },
  right: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  card_detail_container: {
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginVertical: 3,
  },
  left_color: {
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  right_color: {
    backgroundColor: "rgba(0,0,255,0.5)",
  },
  left_txt_color: {
    color: "black",
  },
  right_txt_color: {
    color: "white",
  },

  header_custom_container: {
    height: 50,
    borderBottomColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  icon_container: {
    width: "10%",
  },
  title_container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title_txt: {
    fontSize: 17,
  },

  bill_container: {
    alignItems: "center",
    borderBlockColor: "rgba(0,0,0,0.7)",
    borderWidth: 1,
    borderRadius: 5,
    padding: 2,
  },
  bill_image: {
    width: 20,
    height: 20,
  },
  bill_txt: {
    fontSize: 10,
  },
});

export default chatDetail;
