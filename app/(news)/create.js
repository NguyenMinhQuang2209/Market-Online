import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";

const create = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.form}>
        <View style={styles.edit_form}>
          <View style={styles.edit_field}>
            <View style={styles.label}>
              <Text style={styles.label_txt}>Tiêu đề *</Text>
            </View>
            <View style={styles.textinput_wrap}>
              <TextInput multiline={true} style={styles.textinput} defaultValue="Đóng cửa" />
            </View>
            <View style={{ marginTop: 5 }}>
              <Text style={{ fontFamily: "RobotoBoldItalic" }}>
                Tiêu đề không được bỏ trống
              </Text>
            </View>
          </View>
          <View style={styles.edit_field}>
            <View style={styles.label}>
              <Text style={styles.label_txt}>Nội dung</Text>
            </View>
            <View style={styles.textinput_wrap}>
              <TextInput
                style={[
                  styles.textinput,
                  {
                    minHeight: 80,
                  },
                ]}
                multiline={true}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btn_container}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btn_txt}>Tạo mới</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  form: {
    paddingHorizontal: 20,
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
    minHeight:45,
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
  },
});

export default create;
