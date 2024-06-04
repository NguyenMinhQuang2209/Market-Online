import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { Ionicons } from "@expo/vector-icons";
import HomeHeader from "../Component/Header/HomeHeader";
import { SafeAreaView } from "react-native-safe-area-context";
const statistic = () => {
  const [chartDetailShow, setChartDetailShow] = useState(false);
  return (
    <SafeAreaView>
      <HomeHeader showSearch={false}/>
      <ScrollView>
        <View style={styles.box_container}>
          <View style={styles.box_wrap}>
            <Text>Tổng doanh thu</Text>
            <Text>20M VND</Text>
          </View>
          <View style={styles.box_wrap}>
            <Text>Tổng đơn hàng</Text>
            <Text>300</Text>
          </View>
          <View style={styles.box_wrap}>
            <Text>Tổng sản phẩm</Text>
            <Text>50</Text>
          </View>
          <View style={styles.box_wrap_2}>
            <Text>Doanh thu tháng 2</Text>
            <Text>20M VND</Text>
            <TouchableOpacity
              onPress={() => {
                setChartDetailShow("Month");
              }}
            >
              <Text style={chartStyles.detail_txt}>(Chi tiết)</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box_wrap_2}>
            <Text>Đơn hàng tháng 2</Text>
            <Text>20.000</Text>
            <TouchableOpacity
              onPress={() => {
                setChartDetailShow("Month");
              }}
            >
              <Text style={chartStyles.detail_txt}>(Chi tiết)</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <Text style={chartStyles.header}>Doanh thu hàng tuần</Text>
            <TouchableOpacity
              onPress={() => {
                setChartDetailShow("Week");
              }}
            >
              <Text style={chartStyles.detail_txt}> (Chi tiết)</Text>
            </TouchableOpacity>
          </View>
          <CustomBarChart />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <Text style={chartStyles.header}>Đơn hàng hàng tuần</Text>
            <TouchableOpacity
              onPress={() => {
                setChartDetailShow("Week");
              }}
            >
              <Text style={chartStyles.detail_txt}> (Chi tiết)</Text>
            </TouchableOpacity>
          </View>
          <CustomBarChart />
        </View>
      </ScrollView>
      {chartDetailShow && (
        <ChartDetail setChartDetailShow={setChartDetailShow} />
      )}
    </SafeAreaView>
  );
};
const CustomBarChart = () => {
  const data = {
    labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 10],
      },
    ],
  };

  return (
    <View style={chartStyles.container}>
      <BarChart
        data={data}
        width={Dimensions.get("window").width - 50}
        height={250}
        yAxisLabel=""
        yAxisSuffix="K"
        yAxisInterval={1}
        fromZero={true}
        chartConfig={{
          backgroundGradientFrom: "rgb(230,230,230)",
          backgroundGradientTo: "rgb(230,230,230)",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};
const ChartDetail = ({ setChartDetailShow }) => {
  const handleCloseBill = () => {
    setChartDetailShow(false);
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
        <View style={billStyles.bill_detail_container}>
          <View style={tableStyles.table}>
            <View style={tableStyles.tableRow}>
              <View style={tableStyles.tableHeaderCell}>
                <Text style={tableStyles.headerText}>Ngày</Text>
              </View>
              <View style={tableStyles.tableHeaderCell}>
                <Text style={tableStyles.headerText}>Số đơn hàng</Text>
              </View>
              <View style={tableStyles.tableHeaderCell}>
                <Text style={tableStyles.headerText}>Tổng doanh thu (VND)</Text>
              </View>
            </View>
            <ScrollView>
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
            </ScrollView>
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
        <Text style={tableStyles.cellText}>20/05/2022</Text>
      </View>
      <View style={tableStyles.tableCell}>
        <Text style={tableStyles.cellText}>20</Text>
      </View>
      <View style={tableStyles.tableCell}>
        <Text>20.000.000</Text>
      </View>
    </View>
  );
};
const tableStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  table: {
    borderWidth: 1,
    borderColor: "#C1C0B9",
    width: "100%",
    height: "100%",
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
    paddingHorizontal: 10,
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
    width: "85%",
    height: "70%",
    backgroundColor: "white",
    borderRadius: 10,
    paddind: 3,
    elevation: 10,
    position: "relative",
    justifyContent: "space-between",
    paddingTop: 32,
    paddingBottom: 20,
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
const chartStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "black",
    fontSize: 15,
    marginTop: 20,
    textAlign: "center",
    fontFamily: "RobotoBold",
  },
  detail_txt: {
    color: "rgba(0,0,255,0.6)",
    fontFamily: "RobotoMedium",
    textDecorationLine: "underline",
  },
});

const styles = StyleSheet.create({
  container: {},
  box_container: {
    marginTop: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  box_wrap: {
    width: "30%",
    minHeight: 70,
    borderColor: "rgba(0,0,0,0.5)",
    borderWidth: 1,
    marginHorizontal: "1.5%",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  box_wrap_2: {
    width: "46%",
    minHeight: 70,
    borderColor: "rgba(0,0,0,0.5)",
    borderWidth: 1,
    marginHorizontal: "2%",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});

export default statistic;
