import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const address = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.card_container}>
        <AddressCard
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <AddressCard
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <AddressCard
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <AddressCard
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <AddressCard
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <AddressCard
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <AddressCard
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <AddressCard
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <AddressCard
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <AddressCard
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      </ScrollView>
      <View style={styles.btn_container}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btn_txt}>Thêm mới</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const AddressCard = ({ selectedValue, setSelectedValue }) => {
  return (
    <View style={styles.ship_address}>
      <View style={styles.ship_to_container}>
        <View style={styles.ship_to}>
          <Text style={styles.ship_to_txt}>Người nhận: Minh Quang</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Text style={styles.ship_btn_txt}>Sửa</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[
                styles.ship_btn_txt,
                {
                  marginLeft: 10,
                },
              ]}
            >
              Xóa
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.address}>
        <Text style={styles.address_txt}>Địa chỉ: Thạch Thất Hà Nội</Text>
        <Text style={styles.address_txt}>Số điện thoại liên lạc: 00000000</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <RadioButton
          label={"Sử dụng địa chỉ này"}
          value={"1"}
          selected={selectedValue === "1"}
          onSelect={setSelectedValue}
        />
      </View>
    </View>
  );
};

const RadioButton = ({ label, value, selected, onSelect }) => {
  return (
    <TouchableOpacity
      onPress={() => onSelect(value)}
      style={radioStyles.radioButtonContainer}
    >
      <View style={radioStyles.radioButton}>
        {selected && <View style={radioStyles.radioButtonSelected} />}
      </View>
      <Text style={radioStyles.radioButtonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};
const radioStyles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#000",
  },
  radioButtonLabel: {
    marginLeft: 10,
  },
});
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
  },
  card_container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btn_container: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 10,
  },
  btn: {
    marginBottom: 10,
    width: 150,
    height: 50,
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
  ship_address: {
    minHeight: 80,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
    elevation: 3,
  },
  ship_to_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  ship_btn_txt: {
    color: "rgba(255,0,0,0.7)",
  },
  ship_to_txt: {
    fontSize: 14,
    fontFamily: "RobotoMedium",
  },
  address_txt: {
    fontSize: 14,
    marginTop: 3,
  },
});
export default address;
