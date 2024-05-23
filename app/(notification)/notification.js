import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

const Notification = () => {
  let notificationData = [
    {
      image:"https://res.cloudinary.com/sttruyen/image/upload/v1711270496/Sttruyenxyz/nksjx8vrslok3m0cmg4j.jpg",
      from:"bà tám",
      content:"Vừa đang 1 sản phẩm đặc biệt thịt bò hảo hạn ok"
    },
    {
      image:"https://res.cloudinary.com/sttruyen/image/upload/v1711269323/Sttruyenxyz/u2a0bb4khx55wj1wzrdv.jpg",
      from:"bà Tân vlog",
      content:"Vừa đang 1 sản phẩm đặc biệt thịt lợn siêu to khổng lồ bà Tân vlog chắc suất 1%"
    }
    ,
    {
      image:"https://res.cloudinary.com/sttruyen/image/upload/v1711270496/Sttruyenxyz/nksjx8vrslok3m0cmg4j.jpg",
      from:"bà Tân vlog",
      content:"Vừa đang 1 sản phẩm đặc biệt thịt lợn siêu to khổng lồ bà Tân vlog chắc suất 1%"
    }
    ,
    {
      image:"https://res.cloudinary.com/sttruyen/image/upload/v1711269323/Sttruyenxyz/u2a0bb4khx55wj1wzrdv.jpg",
      from:"bà Tân vlog",
      content:"Vừa đang 1 sản phẩm đặc biệt thịt lợn siêu to khổng lồ bà Tân vlog chắc suất 1%"
    }
    ,
    {
      image:"https://res.cloudinary.com/sttruyen/image/upload/v1711270496/Sttruyenxyz/nksjx8vrslok3m0cmg4j.jpg",
      from:"bà Tân vlog",
      content:"Vừa đang 1 sản phẩm đặc biệt thịt lợn siêu to khổng lồ bà Tân vlog chắc suất 1%"
    }
    ,
    {
      image:"https://res.cloudinary.com/sttruyen/image/upload/v1711269323/Sttruyenxyz/u2a0bb4khx55wj1wzrdv.jpg",
      from:"bà Tân vlog",
      content:"Vừa đang 1 sản phẩm đặc biệt thịt lợn siêu to khổng lồ bà Tân vlog chắc suất 1%"
    }
    ,
    {
      image:"https://res.cloudinary.com/sttruyen/image/upload/v1711270496/Sttruyenxyz/nksjx8vrslok3m0cmg4j.jpg",
      from:"bà Tân vlog",
      content:"Vừa đang 1 sản phẩm đặc biệt thịt lợn siêu to khổng lồ bà Tân vlog chắc suất 1%"
    }
    ,
    {
      image:"https://res.cloudinary.com/sttruyen/image/upload/v1711269323/Sttruyenxyz/u2a0bb4khx55wj1wzrdv.jpg",
      from:"bà Tân vlog",
      content:"Vừa đang 1 sản phẩm đặc biệt thịt lợn siêu to khổng lồ bà Tân vlog chắc suất 1%"
    }
  ]
  return (
    <ScrollView style={styles.container}>
      {notificationData?.map((item,index) => <NotificationCard key={index + "notiCard"} item={item}/>)}
      <View style={{height:10}}>

      </View>
    </ScrollView>
  );
};
const NotificationCard = ({item}) => {
  return (
    <View style={styles.card_container}>
      <View style={styles.card_image_container}>
        <Image
          style={styles.card_image}
          source={{
            uri: item?.image,
          }}
        />
      </View>
      <View style={styles.card_infor_container}>
        <View style={styles.card_infor_from_container}>
          <Text style={styles.card_infor_from_txt}>Từ <Text style={styles.card_infor_from_link}> {item?.from}</Text></Text>
        </View>
        <View>
          <Text style={styles.card_infor_infor_txt}>{item?.content}</Text>
        </View>
      </View>
      <View style={styles.card_close_btn}>
        <EvilIcons name="close" size={13} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.08)",
    flex: 1,
    paddingVertical: 10
  },
  card_container: {
    flex:1,
    marginBottom: 10,
    minHeight: 40,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    position:"relative",
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
  },
  card_image_container: {
    width: 80,
    flexDirection: "row",
    alignItems: "center",
  },
  card_image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  card_infor_container: {
    flex: 1,
  },
  card_infor_from_container: {
    marginBottom: 5,
  },
  card_infor_from_txt: {
    fontSize:15,
    fontFamily:"RobotoBold"
  },
  card_infor_from_link:{
    color:"rgba(0,0,255,0.7)",
    textDecorationLine:"underline"
  },
  card_infor_infor_txt:{
    fontSize:13.5,
  },
  card_close_btn:{
    position:"absolute",
    top:5,
    right:5,
    width:18,
    height:18,
    borderBlockColor:"rgba(0,0,0,0.7)",
    borderWidth:1,
    borderRadius:10,
    flexDirection:"row",
    alignItems:'center',
    justifyContent:"center"
  }
});

export default Notification;
