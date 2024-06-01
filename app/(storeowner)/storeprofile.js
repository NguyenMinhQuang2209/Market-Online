import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const storeprofile = () => {
  const navigation = useNavigation();
  const handleNavigation = ({ folder, screen, params }) => {
    navigation.navigate(folder, {
      screen: screen,
      params: { ...params },
    });
  };
  const navigateProfile = () => {
    handleNavigation({ folder: "(profile)", screen: "profile", params: {} });
  };
  const handleLogout = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.user_infor_container}>
        <View style={styles.user_image_container}>
          <Image
            style={styles.user_image}
            source={{
              uri: "https://res.cloudinary.com/sttruyen/image/upload/v1711270496/Sttruyenxyz/nksjx8vrslok3m0cmg4j.jpg",
            }}
          />
        </View>
        <View style={styles.user_detail_container}>
          <View style={styles.user_name_container}>
            <Text style={styles.username}>Minh Quang</Text>
          </View>
          <View style={styles.user_phone_container}>
            <Text style={styles.user_phone}>000000999000</Text>
          </View>
          <View style={styles.user_phone_container}>
            <Text style={styles.user_phone}>Hòa Lạc - Thạch Thất - Hà Nội</Text>
          </View>
        </View>
      </View>
      <View style={styles.user_function_container}>
        <View style={styles.user_function_wrap}>
          <View style={styles.user_function_main}>
            <View style={styles.user_function_title}>
              <View style={styles.user_function_icon}>
                <EvilIcons name="calendar" size={25} />
              </View>
              <Text style={styles.user_function_title_txt}>
                Lịch sử giao hàng
              </Text>
              <View style={styles.number_icon}>
                <Text style={styles.number_txt}>1</Text>
              </View>
            </View>
          </View>
          <View>
            <EvilIcons name="chevron-right" size={35} />
          </View>
        </View>
        <TouchableOpacity
          onPress={navigateProfile}
          style={styles.user_function_wrap}
        >
          <View style={styles.user_function_main}>
            <View style={styles.user_function_title}>
              <View style={styles.user_function_icon}>
                <EvilIcons name="user" size={25} />
              </View>
              <Text style={styles.user_function_title_txt}>
                Thông tin cá nhân
              </Text>
            </View>
          </View>
          <View>
            <EvilIcons name="chevron-right" size={35} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.user_function_wrap}>
          <View style={styles.user_function_main}>
            <View style={styles.user_function_title}>
              <View style={styles.user_function_icon}>
                <Ionicons name="archive" size={25} />
              </View>
              <Text style={styles.user_function_title_txt}>Bên cung cấp</Text>
            </View>
          </View>
          <View>
            <EvilIcons name="chevron-right" size={35} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleNavigation({
              folder: "(auth)",
              screen: "changePassword",
              params: {},
            });
          }}
          style={styles.user_function_wrap}
        >
          <View style={styles.user_function_main}>
            <View style={styles.user_function_title}>
              <View style={styles.user_function_icon}>
                <Ionicons name="key" size={20} />
              </View>
              <Text style={styles.user_function_title_txt}>Đổi mật khẩu</Text>
            </View>
          </View>
          <View>
            <EvilIcons name="chevron-right" size={35} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleLogout}
          style={styles.user_function_wrap}
        >
          <View style={styles.user_function_main}>
            <View style={styles.user_function_title}>
              <View style={styles.user_function_icon}>
                <Ionicons name="log-out-outline" size={25} />
              </View>
              <Text style={styles.user_function_title_txt}>Đăng xuất</Text>
            </View>
          </View>
          <View>
            <EvilIcons name="chevron-right" size={35} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  user_infor_container: {
    flexDirection: "row",
    borderColor: "rgba(0,0,0,0.4)",
    borderWidth: 1,
    padding: 7,
    borderRadius: 10,
  },
  user_image_container: {
    marginRight: 10,
  },
  user_image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  user_detail_container: {
    justifyContent: "center",
  },
  user_name_container: {
    marginBottom: 0,
  },
  username: {
    fontSize: 20,
    fontFamily: "RobotoBold",
  },
  user_phone_container: {
    marginTop: 1,
  },
  user_phone: {
    fontSize: 14,
    fontFamily: "SpaceMono",
  },
  user_function_container: {
    marginTop: 50,
  },
  user_function_wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    alignItems: "center",
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
    height: 55,
  },
  user_function_title_txt: {
    fontSize: 16,
    fontFamily: "SpaceMono",
  },
  user_function_icon: {
    marginRight: 8,
  },
  user_function_title: {
    flexDirection: "row",
    alignItems: "center",
  },
  number_icon: {
    marginLeft: 5,
    width: 18,
    height: 18,
    borderRadius: 10,
    backgroundColor: "rgba(255,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  number_txt: {
    fontSize: 13,
    color: "white",
  },
});

export default storeprofile;
