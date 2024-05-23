import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { EvilIcons } from "@expo/vector-icons";

const Chat = () => {

  const handleSearch = () => {};

  let chats = [
    {
        image:"https://res.cloudinary.com/sttruyen/image/upload/v1711269323/Sttruyenxyz/u2a0bb4khx55wj1wzrdv.jpg",
        name:"bà Tân",
        content:"Hello bà Tân",
        time:"10 PM",
        remain:"1"
    },
    {
        image:"https://res.cloudinary.com/sttruyen/image/upload/v1711270496/Sttruyenxyz/nksjx8vrslok3m0cmg4j.jpg",
        name:"Bà New",
        content:"Hello bà New new new new",
        time:"10/10/22",
        remain:"2"
    }
    ,
    {
        image:"https://res.cloudinary.com/sttruyen/image/upload/v1711270496/Sttruyenxyz/nksjx8vrslok3m0cmg4j.jpg",
        name:"Bà New",
        content:"Hello bà New new new new",
        time:"10/10/22",
        remain:"2"
    }
    ,
    {
        image:"https://res.cloudinary.com/sttruyen/image/upload/v1711270496/Sttruyenxyz/nksjx8vrslok3m0cmg4j.jpg",
        name:"Bà New",
        content:"Hello bà New new new new",
        time:"10/10/22",
        remain:"2"
    }
    ,
    {
        image:"https://res.cloudinary.com/sttruyen/image/upload/v1711270496/Sttruyenxyz/nksjx8vrslok3m0cmg4j.jpg",
        name:"Bà New",
        content:"Hello bà New new new new",
        time:"10/10/22",
        remain:"2"
    }
    ,
    {
        image:"https://res.cloudinary.com/sttruyen/image/upload/v1711270496/Sttruyenxyz/nksjx8vrslok3m0cmg4j.jpg",
        name:"Bà New",
        content:"Hello bà New new new new",
        time:"10/10/22",
        remain:"2"
    }
    ,
    {
        image:"https://res.cloudinary.com/sttruyen/image/upload/v1711270496/Sttruyenxyz/nksjx8vrslok3m0cmg4j.jpg",
        name:"Bà New",
        content:"Hello bà New new new new",
        time:"10/10/22",
        remain:"2"
    }
    ,
    {
        image:"https://res.cloudinary.com/sttruyen/image/upload/v1711270496/Sttruyenxyz/nksjx8vrslok3m0cmg4j.jpg",
        name:"Bà New",
        content:"Hello bà New new new new",
        time:"10/10/22",
        remain:"2"
    }
    ,
    {
        image:"https://res.cloudinary.com/sttruyen/image/upload/v1711270496/Sttruyenxyz/nksjx8vrslok3m0cmg4j.jpg",
        name:"Bà New",
        content:"Hello bà New new new new",
        time:"10/10/22",
        remain:"2"
    }
    ,
    {
        image:"https://res.cloudinary.com/sttruyen/image/upload/v1711270496/Sttruyenxyz/nksjx8vrslok3m0cmg4j.jpg",
        name:"Bà New",
        content:"Hello bà New new new new",
        time:"10/10/22",
        remain:"2"
    }
    ,
    {
        image:"https://res.cloudinary.com/sttruyen/image/upload/v1711270496/Sttruyenxyz/nksjx8vrslok3m0cmg4j.jpg",
        name:"Bà New",
        content:"Hello bà New new new new",
        time:"10/10/22",
        remain:"2"
    }
    ,
    {
        image:"https://res.cloudinary.com/sttruyen/image/upload/v1711270496/Sttruyenxyz/nksjx8vrslok3m0cmg4j.jpg",
        name:"Bà New",
        content:"Hello bà New new new new",
        time:"10/10/22",
        remain:"2"
    }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.search_container}>
        <TouchableOpacity
          style={styles.search_icon_container}
          onPress={handleSearch}
        >
          <EvilIcons name="search" size={30} color="#000" />
        </TouchableOpacity>
        <TextInput style={styles.text_input} placeholder="Tìm kiếm..." />
      </View>
      <ScrollView style={styles.card_big_container}>
        {chats?.map((item,index) => <ChatCard key={index + "Chat"} item={item}/>)}
        <View style={{height:40}}>
        </View>
      </ScrollView>
    </View>
  );
};

const ChatCard = ({item}) => {
    const [content,setContent] = useState('');
    useEffect(() => {
        if(item){
            let newContent = item?.content?.length >  20 ? item?.content?.substring(0,20) + "..." : item?.content;
            setContent(newContent);
        }
    },[item]);
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
        <View style={styles.card_infor_name_container}>
          <View>
            <Text style={styles.card_infor_name_txt}>{item?.name}</Text>
          </View>
          <View style={styles.card_infor_remain_container}>
            <Text style={styles.card_infor_remain_txt}>{item?.remain}</Text>
          </View>
        </View>
        <View style={styles.card_infor_content_time_container}>
          <View style={styles.card_infor_content_container}>
            <Text style={styles.card_infor_content_txt}>{content}</Text>
          </View>
          <View style={styles.card_infor_time_container}>
            <Text style={styles.card_infor_time_txt}> {item?.time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  card_big_container:{
    paddingHorizontal:10,
  },
  search_container: {
    borderRadius: 40,
    backgroundColor: "rgba(0,0,0,0.07)",
    height: 40,
    marginHorizontal: "5%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  text_input: {
    width: "90%",
    paddingHorizontal: 10,
    height: 40,
    fontSize: 15,
  },
  search_icon_container: {
    backgroundColor: "transparent",
    width: "10%",
  },
  card_container: {
    minHeight: 50,
    flexDirection: "row",
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  card_image_container: {
    width: 60,
    flexDirection:"row",
    alignItems:"center"
  },
  card_image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  card_infor_container: {
    flex: 1,
    justifyContent: "center",
  },
  card_infor_name_container: {
    marginBottom: 5,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  card_infor_remain_container:{
    width: 18,
    height:18,
    backgroundColor:"red",
    borderRadius:10,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
  },
  card_infor_remain_txt:{
    color:"white",
    fontSize:12,
    fontFamily:"SpaceMono"
  },
  card_infor_name_txt: {
    fontSize: 15,
    fontFamily: "RobotoBold",
  },
  card_infor_content_time_container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card_infor_content_container: {},
  card_infor_content_txt: {
    fontSize: 13,
  },
  card_infor_time_container: {},
  card_infor_time_txt: {
    fontSize: 13,
    fontFamily: "SpaceMono",
  },
});
export default Chat;
