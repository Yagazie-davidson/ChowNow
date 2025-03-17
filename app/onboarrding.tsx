import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Onboarding() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      {/* <Link href="/onboarding">onboard</Link> */}
    </View>
  );
}
