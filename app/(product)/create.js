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
import Selection from "../Component/Select/Selection";
import { generateRandomString } from "../Component/Other/GenerateRandomString";
import DateTimePicker from "@react-native-community/datetimepicker";
const Create = () => {
  const [image, setImage] = useState("");
  const [activeSelection, setActiveSelection] = useState(false);
  const [current, setCurrent] = useState([]);
  const [productsString, setProductsString] = useState("");

  const [units, setUnits] = useState([
    {
      id: generateRandomString(),
      unit: "",
      price: "",
    },
  ]);

  const [categories, setCategories] = useState([
    {
      name: "Rau",
      value: "rau",
    },
    {
      name: "Thịt",
      value: "thit",
    },
    {
      name: "Cá",
      value: "ca",
    },
  ]);

  useEffect(() => {
    let str = "";
    current?.forEach((item) => {
      str += item.name + ", ";
    });
    if (str.endsWith(", ")) {
      str = str.slice(0, -2);
    }
    setProductsString(str);
  }, [current]);

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
  const handleAddUnit = () => {
    setUnits((pre) => [
      ...pre,
      {
        id: generateRandomString(),
        unit: "",
        price: "",
      },
    ]);
  };


  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.head_container}>
          <View style={styles.image_container}>
            <View style={{ marginBottom: 5 }}>
              <Text style={{ fontSize: 16 }}>Ảnh sản phẩm:</Text>
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
                <Text style={styles.label_txt}>Tên sản phẩm *</Text>
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
                <Text style={styles.label_txt}>Loại sản phẩm</Text>
              </View>
              <View style={styles.textinput_wrap}>
                <TouchableOpacity
                  style={styles.textinput2}
                  onPress={() => {
                    setActiveSelection(true);
                  }}
                >
                  <Text>{productsString}</Text>
                  <View>
                    <EvilIcons name="chevron-down" size={30} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.unit_container}>
              <View style={styles.add_container}>
                {units?.map((item, index) => (
                  <UnitCard
                    item={item}
                    setUnits={setUnits}
                    units={units}
                    index={index}
                    key={item?.id}
                  />
                ))}
                <TouchableOpacity
                  style={styles.add_wrap}
                  onPress={handleAddUnit}
                >
                  <Text style={styles.add_icon}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn_txt}>Tạo mới</Text>
          </TouchableOpacity>
        </View>
        {activeSelection && (
          <Selection
            setActive={setActiveSelection}
            datas={categories}
            current={current}
            setCurrent={setCurrent}
            isMultiple={false}
            useSearch={true}
          />
        )}
      </View>
    </ScrollView>
  );
};
const UnitCard = ({ item, setUnits, units, index }) => {
  const handleRemoveUnit = () => {
    let currentUnits = [...units];
    currentUnits.splice(index, 1);
    setUnits([...currentUnits]);
  };
  return (
    <View style={styles.unit_wrap}>
      <View style={styles.edit_field}>
        <View style={styles.label}>
          <Text style={styles.label_txt}>Đơn vị tính</Text>
        </View>
        <View style={styles.textinput_wrap}>
          <TextInput style={styles.textinput} />
        </View>
      </View>
      <View style={styles.edit_field}>
        <View style={styles.label}>
          <Text style={styles.label_txt}>Giá (trên mỗi đơn vị) VND</Text>
        </View>
        <View style={styles.textinput_wrap}>
          <TextInput
            style={styles.textinput}
            keyboardType="numeric"
            inputMode="numeric"
            defaultValue="20000"
          />
        </View>
      </View>
      <View style={styles.close_wrap}>
        <TouchableOpacity onPress={handleRemoveUnit}>
          <Ionicons name="close-circle-outline" size={25} />
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

export default Create;
