import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
const beingStoreowner = () => {
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
    <ScrollView style={{ width: "100%", height: "100%" }}>
      <View style={styles.container}>
        <View style={styles.head_container}>
          <View style={styles.image_container}>
            <View style={{ marginBottom: 5 }}>
              <Text style={{ fontSize: 16 }}>Ảnh cửa hàng:</Text>
            </View>
            <TouchableOpacity
              onPress={handlePickupImage}
              style={styles.image_wrap}
            >
              <Image
                style={[
                  styles.image,
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
              <View style={styles.camera}>
                <Ionicons name="camera" size={30} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.edit_form}>
            <View style={styles.edit_field}>
              <View style={styles.label}>
                <Text style={styles.label_txt}>Tên thương nhân *</Text>
              </View>
              <View style={styles.textinput_wrap}>
                <TextInput style={styles.textinput} defaultValue="MinhQuang" />
              </View>
              <View style={{ marginTop: 5 }}>
                <Text style={{ fontFamily: "RobotoBoldItalic" }}>
                  Tên sản phẩm không được bỏ trống
                </Text>
              </View>
            </View>
            <View style={styles.edit_field}>
              <View style={styles.label}>
                <Text style={styles.label_txt}>Số điện thoại *</Text>
              </View>
              <View style={styles.textinput_wrap}>
                <TextInput style={styles.textinput} defaultValue="MinhQuang" />
              </View>
              <View style={{ marginTop: 5 }}>
                <Text style={{ fontFamily: "RobotoBoldItalic" }}>
                  Tên sản phẩm không được bỏ trống
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn_txt}>Đồng ý</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btn,
              {
                marginLeft: 5,
                backgroundColor: "rgba(0,0,0,0.4)",
              },
            ]}
          >
            <Text style={styles.btn_txt}>Hủy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
  },
  head_container: {
    marginTop: 30,
  },
  image_container: {
    alignItems: "center",
  },
  image_wrap: {
    width: 100,
    height: 100,
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
  edit_form: {
    marginTop: 30,
  },
  edit_field: {
    marginBottom: 20,
  },
  label: {},
  textinput_wrap: {},
  label_txt: {
    fontSize: 16,
    fontFamily: "RobotoBold",
    color: "rgba(255,0,0,0.8)",
  },
  textinput: {
    width: "100%",
    minHeight: 45,
    marginTop: 8,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 10,
  },
  textinput2: {
    width: "100%",
    minHeight: 45,
    marginTop: 8,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  btn_container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    marginBottom: 10,
    width: 150,
    height: 45,
    backgroundColor: "#E47070",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  btn_txt: {
    color: "white",
    fontSize: 18,
    fontFamily: "RobotoMedium",
  },
  unit_container: {
    borderColor: "rgba(0,0,0,0.1)",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  unit_wrap: {
    borderColor: "rgba(0,0,0,0.1)",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    position: "relative",
    width: "100%",
    marginBottom: 10,
  },
  close_wrap: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  add_container: {
    alignItems: "center",
  },
  add_wrap: {
    width: 30,
    height: 30,
    backgroundColor: "#E47070",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  add_icon: {
    color: "white",
    fontSize: 18,
  },
});

export default beingStoreowner;
