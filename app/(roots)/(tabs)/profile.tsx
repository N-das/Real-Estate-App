import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";

const profile = () => {
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems:"baseline",
            margin: 20,
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>profile</Text>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2529/2529521.png",
            }}
            style={{ height: 20, width: 20 }}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: "column",
              margin: 20,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQziHssT0gxKrX1jjaCCQ9HV-PVAmQi-WqipdM7V7OrpFBFk-YU2-b9B6Hj&s=10",
              }}
              style={{ height: 100, width: 100, borderRadius: 50 }}
            />
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>John Doe</Text>
              <Icon
                name="edit"
                size={20}
                style={{ color: "blue", position: "absolute", left: "105%" }}
              />
              {/* <Text style={{ fontSize: 15 }}>+91 1234567890</Text>   */}
            </View>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "column", margin: 20, gap: 20 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/7322/7322265.png",
                  }}
                  style={{ height: 20, width: 20 }}
                />
                <Text style={{ fontSize: 15, marginLeft: 10 }}>My Bookings</Text>
              </View>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/5343/5343102.png",
                }}
                style={{ height: 15, width: 15 }}
              />
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/4725/4725292.png",
                  }}
                  style={{ height: 20, width: 20 }}
                />
                <Text style={{ fontSize: 15, marginLeft: 10 }}>Payments</Text>
              </View>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/5343/5343102.png",
                }}
                style={{ height: 15, width: 15 }}
              />
            </View>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
