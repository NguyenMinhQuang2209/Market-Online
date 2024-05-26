import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const Profile = () => {
  const [image, setImage] = useState(
    "https://res.cloudinary.com/sttruyen/image/upload/v1711270496/Sttruyenxyz/nksjx8vrslok3m0cmg4j.jpg"
  );
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
    <View style={styles.container}>
      <View style={styles.head_container}>
        <View style={styles.image_container}>
          <TouchableOpacity
            onPress={handlePickupImage}
            style={styles.image_wrap}
          >
            <Image
              style={styles.image}
              source={{
                uri: image,
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
              <Text style={styles.label_txt}>Tên hiển thị</Text>
            </View>
            <View style={styles.textinput_wrap}>
              <TextInput
                multiline={true}
                style={styles.textinput}
                defaultValue="MinhQuang"
              />
            </View>
          </View>
          <View style={styles.edit_field}>
            <View style={styles.label}>
              <Text style={styles.label_txt}>Số điện thoại</Text>
            </View>
            <View style={styles.textinput_wrap}>
              <TextInput
                multiline={true}
                style={styles.textinput}
                keyboardType="numeric"
                inputMode="numeric"
                defaultValue="0111"
              />
            </View>
          </View>
          <View style={styles.edit_field}>
            <View style={styles.label}>
              <Text style={styles.label_txt}>Địa chỉ</Text>
            </View>
            <View style={styles.textinput_wrap}>
              <TextInput
                multiline={true}
                style={styles.textinput}
                defaultValue="Thạch Thất"
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btn_container}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btn_txt}>Lưu thay đổi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  head_container: {
    marginTop: 30,
  },
  image_container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image_wrap: {
    width: 100,
    height: 100,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    objectFit: "contain",
    borderColor: "rgba(0,0,0,0.1)",
    borderWidth: 1,
  },
  camera: {
    position: "absolute",
    right: 5,
    bottom: -5,
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
  btn_container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    marginBottom: 10,
    width: 200,
    height: 50,
    backgroundColor: "#E47070",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  btn_txt:{
    color:"white",
    fontSize:18,
    fontFamily:"RobotoMedium"
  }
});

export default Profile;
