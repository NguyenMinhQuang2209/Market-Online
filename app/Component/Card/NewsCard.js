import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const NewsCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head_card}>
        <View style={styles.image_container}>
          <Image
            style={styles.image}
            source={{
              uri: "https://res.cloudinary.com/sttruyen/image/upload/v1711269323/Sttruyenxyz/u2a0bb4khx55wj1wzrdv.jpg",
            }}
          />
        </View>
        <View style={styles.infor_container}>
          <View style={styles.infor_name}>
            <Text style={styles.infor_name_txt}>Bà Sáu</Text>
          </View>
          <View style={styles.infor_time}>
            <Text style={styles.infor_time_txt}>3 phút trước</Text>
          </View>
        </View>
        <View style={styles.icon_container}>
          <Ionicons style={styles.icon} name="ellipsis-horizontal-circle-outline" size={30} />
        </View>
      </View>
      <View style={styles.news_container}>
        <Text style={styles.news_txt}>
          Bên cạnh thịt heo, thịt bò là một trong những loại thịt mang đến nguồn
          dinh dưỡng cao và luôn có mặt trong các bữa ăn trong gia đình ở khắp
          thế giới. Trong thịt bò có chứa rất nhiều protein và chất sắt,… đây là
          những chất dinh dưỡng rất tốt cho sức khỏe và sắc đẹp. Đặc biệt, đây
          cũng là một loại thực phẩm rất tốt dành cho người muốn giảm cân, tăng
          cơ bắp rất hiệu quả.
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: "rgba(255,255,255,0.85)",
    padding: 10,
    borderRadius: 10,
  },
  head_card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image_container: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  infor_container: {
    flex: 1,
  },
  infor_name_txt: {
    fontSize: 16,
    fontFamily: "RobotoBold",
  },
  infor_time_txt: {
    fontSize: 14,
    marginTop: 3,
    fontFamily: "RobotoMediumItalic",
  },
  news_container: {
    marginTop: 12,
  },
  news_txt: {
    fontSize: 16,
  },
});

export default NewsCard;
