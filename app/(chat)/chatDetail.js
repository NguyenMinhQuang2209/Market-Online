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
import { Link } from "expo-router";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
const chatDetail = () => {
  const route = useRoute();
  const { name } = route.params;
  const [targetName, setTargetName] = useState("");

  const [billShow, setBillShow] = useState(false);

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
                  onPress={() => {
                    setBillShow(true);
                  }}
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
      {billShow && <BillForm setBillShow={setBillShow} />}
    </SafeAreaView>
  );
};

const BillForm = ({ setBillShow }) => {

  const totalBillRef = useRef();

  const handleEditTotalBill = () => {
    if(totalBillRef.current){
      totalBillRef.current.focus();
    }
  }
  const handleCloseBill = () => {
    setBillShow(false);
  };
  return (
    <View style={billStyles.container}>
      <View style={billStyles.bill_container}>
        <TouchableOpacity
          style={billStyles.bill_close}
          onPress={handleCloseBill}
        >
          <Ionicons name="close" size={20} />
        </TouchableOpacity>
        <ScrollView style={billStyles.bill_detail_container}>
          <View style={tableStyles.table}>
            <View style={tableStyles.tableRow}>
              <View style={tableStyles.tableHeaderCell}>
                <Text style={tableStyles.headerText}>Tên</Text>
              </View>
              <View style={tableStyles.tableHeaderCell}>
                <Text style={tableStyles.headerText}>Số lượng x Giá tiền</Text>
              </View>
              <View style={tableStyles.tableHeaderCell}>
                <Text style={tableStyles.headerText}>Tổng tiền (VND)</Text>
              </View>
              <View style={tableStyles.tableHeaderCell}>
                <Text style={styles.headerText}></Text>
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
                style={tableStyles.text_input_edit}
                defaultValue="20.000"
              />
              <TouchableOpacity
                style={[
                  billStyles.bill_btn,
                  {
                    marginLeft: 5,
                  },
                ]}
                onPress={handleEditTotalBill}
              >
                <Text style={billStyles.bill_txt}>Sửa</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={billStyles.btn_container}>
            <TouchableOpacity
              style={billStyles.btn_cancel}
              onPress={handleCloseBill}
            >
              <Text style={billStyles.bill_txt}>Hủy bỏ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={billStyles.btn_confirm}
              onPress={handleCloseBill}
            >
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
    if(inputRef.current){
      inputRef.current.focus();
    }
  }
  return (
    <View style={tableStyles.tableRow}>
      <View style={tableStyles.tableCell}>
        <Text style={tableStyles.cellText}>Cá thu</Text>
      </View>
      <View style={tableStyles.tableCell}>
        <Text style={tableStyles.cellText}>20.000 x 2</Text>
      </View>
      <View style={tableStyles.tableCell}>
        <TextInput
          ref={inputRef}
          style={[tableStyles.cellText, tableStyles.text_input_edit]}
          defaultValue="40000"
          multiline
        />
      </View>
      <View style={tableStyles.tableCell}>
        <TouchableOpacity style={billStyles.bill_btn} onPress={handleEdit}>
          <Text style={billStyles.bill_txt}>Sửa</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 3,
    borderColor: "rgba(0,0,0,0.7)",
    borderWidth: 1,
    borderRadius: 10,
  },
});
const billStyles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bill_container: {
    width: "95%",
    minHeight: "70%",
    backgroundColor: "white",
    borderRadius: 10,
    paddind: 3,
    elevation: 10,
    position: "relative",
    justifyContent: "space-between",
    paddingTop: 32,
  },
  head: {
    justifyContent: "center",
    flexDirection: "row",
  },
  bill_close: {
    position: "absolute",
    right: 5,
    top: 5,
    width: 25,
    height: 25,
    borderBlockColor: "rgba(0,0,0,1)",
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
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
    paddingHorizontal: 10,
    backgroundColor: "rgba(255,0,0,0.5)",
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  btn_cancel: {
    marginHorizontal: 3,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    paddingHorizontal: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

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
