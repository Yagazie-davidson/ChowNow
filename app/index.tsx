import AppButton from "@/app-example/components/AppButton";
import { Image } from "expo-image";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "@expo-google-fonts/dm-sans";

const Index = () => {
  let [fontsLoaded] = useFonts({
    DMSansSB: require(".././assets/fonts/DMSans-SemiBold.ttf"),
    DMSansR: require(".././assets/fonts/DMSans-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.half1}>
        <Image
          style={styles.image}
          source="https://i.ibb.co/pBK5yjFk/chownow.png"
          contentFit="contain"
          // transition={1000}
        />
      </View>
      <View style={styles.half2}>
        <View>
          <Text
            style={{
              color: "#141B27",
              textAlign: "center",
              fontSize: 32,
              fontFamily: "DMSansSB",
            }}
          >
            Food You Love,
          </Text>
          <Text
            style={{
              color: "#141B27",
              textAlign: "center",
              fontSize: 32,
              fontFamily: "DMSansSB",
            }}
          >
            Right to Your Door
          </Text>
          <Text
            style={{
              color: "#697586",
              textAlign: "center",
              fontSize: 12,
              fontFamily: "DMSansR",
              paddingRight: 31,
              paddingLeft: 31,
              marginTop: 9,
            }}
          >
            Craving something delicious? Order in seconds and get it delivered
            fresh to your door!
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton backgroundColor="#F97216">
            <Text
              style={{
                fontSize: 16,
                color: "#FFF",
                fontFamily: "DMSansSB",
              }}
            >
              Create account
            </Text>
          </AppButton>
          <AppButton backgroundColor="#FFF">
            <Text
              style={{
                fontSize: 16,
                color: "#161C29",
                fontFamily: "DMSansSB",
              }}
            >
              Sign in
            </Text>
          </AppButton>
        </View>
      </View>
    </View>
  );
};
// #F97216;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  half1: {
    flex: 1.5,
    // backgroundColor: "blue",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  half2: {
    flex: 1,
    // backgroundColor: "red",
    justifyContent: "flex-start",
    paddingTop: 10,

    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 24,
    width: "100%",
    rowGap: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  image: {
    flex: 1,
    width: "100%",
    marginTop: 70,
  },
  content: {
    color: "#FFF",
  },
});

export default Index;

// import { Image } from "expo-image";
// import React, { useState } from "react";
// import { View, TouchableOpacity, Text, StyleSheet, Button } from "react-native";
// import { FlatList } from "react-native-gesture-handler";
// import { FlatGrid } from "react-native-super-grid";
// const blurhash =
//   "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

// const Onboarding = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.half1}>
//         <Image
//           style={styles.image}
//           source="https://beyondamazingexhibition.com/assets/img/info/info-1.6a79189e.png"
//           contentFit="contain"
//           transition={1000}
//         />
//         <View style={{ flex: 1 }}>
//           <Text>Food You Love,</Text>
//           <Text>Right to Your Door</Text>
//           <Text>
//             Craving something delicious? Order in seconds and get it delivered
//             fresh to your door!
//           </Text>
//           <View style={styles.buttonContainer}>
//             <Button title="Create account" />
//             <Button title="Sign in" />
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },
//   half1: {
//     flex: 1,
//     backgroundColor: "blue",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   image: {
//     flex: 1,
//     width: "70%",
//   },
// });

// export default Onboarding;
