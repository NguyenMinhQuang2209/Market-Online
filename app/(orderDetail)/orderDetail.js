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
import DefaultHeader from "../Component/Header/DefaultHeader";
const orderDetail = () => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <DefaultHeader title="Chi tiết hóa đơn" />
      <BillForm />
    </View>
  );
};
const BillForm = () => {
  const totalBillRef = useRef();
  const navigation = useNavigation();

  const handleEditTotalBill = () => {
    if (totalBillRef.current) {
      totalBillRef.current.focus();
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={billStyles.container}>
      <View style={billStyles.bill_container}>
        <ScrollView style={billStyles.bill_detail_container}>
          <View style={tableStyles.table}>
            <View style={tableStyles.tableRow}>
              <View style={tableStyles.tableHeaderCell}>
                <Text style={tableStyles.headerText}>Tên</Text>
              </View>
              <View style={tableStyles.tableHeaderCell}>
                <Text style={tableStyles.headerText}>Số lượng</Text>
              </View>
              <View style={tableStyles.tableHeaderCell}>
                <Text style={tableStyles.headerText}>Giá tiền</Text>
              </View>
              <View style={tableStyles.tableHeaderCell}>
                <Text style={tableStyles.headerText}>Tổng tiền (VND)</Text>
              </View>
            </View>
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
          </View>
        </ScrollView>
        <View style={billStyles.bill_btn_container}>
          <View style={billStyles.total_bill_container}>
            <Text>Tổng số tiền (VND): </Text>
            <View style={billStyles.total_bill_wrap}>
              <TextInput
                ref={totalBillRef}
                style={tableStyles.text_input_edit_2}
                defaultValue="20.000"
              />
            </View>
          </View>
          <View style={billStyles.btn_container}>
            <TouchableOpacity
              style={billStyles.btn_cancel}
              onPress={handleBack}
            >
              <Text style={billStyles.bill_txt}>Quay lại</Text>
            </TouchableOpacity>
            <TouchableOpacity style={billStyles.btn_confirm}>
              <Text style={billStyles.bill_txt}>Đồng ý</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const TableItem = () => {
  const inputRef = useRef();
  const handleEdit = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <View style={tableStyles.tableRow}>
      <View style={tableStyles.tableCell}>
        <Text style={tableStyles.cellText}>Cá thu</Text>
      </View>
      <View
        style={[
          tableStyles.tableCell,
          {
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          },
        ]}
      >
        <Text>20</Text>
        <Text> Lạng</Text>
      </View>
      <View style={tableStyles.tableCell}>
        <TextInput
          ref={inputRef}
          style={[tableStyles.cellText, tableStyles.text_input_edit]}
          defaultValue="10.000"
          multiline
          keyboardType="numeric"
          editable={true}
        />
      </View>
      <View style={tableStyles.tableCell}>
        <TextInput
          ref={inputRef}
          style={[tableStyles.cellText, tableStyles.text_input_edit]}
          defaultValue="40.000"
          multiline
        />
      </View>
    </View>
  );
};
const tableStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  table: {
    borderWidth: 1,
    borderColor: "#C1C0B9",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableHeaderCell: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f1f8ff",
    borderWidth: 1,
    borderColor: "#C1C0B9",
  },
  tableCell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#C1C0B9",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    textAlign: "center",
  },
  cellText: {
    textAlign: "center",
  },
  text_input: {
    paddingVertical: 0,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  text_input_edit: {
    paddingHorizontal: 1,
    borderColor: "rgba(0,0,0,0.7)",
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    color: "black",
  },
  text_input_edit_2: {
    paddingHorizontal: 30,
    borderColor: "rgba(0,0,0,0.7)",
    borderWidth: 1,
    borderRadius: 10,
    color: "black",
  },
});
const billStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bill_container: {
    flex: 1,
    borderRadius: 10,
    padding: 3,
    justifyContent: "space-between",
    paddingTop: 10,
  },
  head: {
    justifyContent: "center",
    flexDirection: "row",
  },
  bill_close: {},
  bill_detail_container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  total_bill_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBlockColor: "rgba(0,0,0,.4)",
    borderWidth: 1,
    padding: 5,
    borderRadius: 15,
  },
  bill_btn_container: {
    height: 100,
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  total_bill_wrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  bill_btn: {
    width: 60,
    height: 30,
    backgroundColor: "rgba(255,0,0,0.5)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  bill_txt: {
    color: "white",
  },
  btn_container: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  btn_confirm: {
    marginHorizontal: 3,
    paddingHorizontal: 30,
    backgroundColor: "rgba(255,0,0,0.5)",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  btn_cancel: {
    marginHorizontal: 3,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    paddingHorizontal: 30,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
export default orderDetail;
