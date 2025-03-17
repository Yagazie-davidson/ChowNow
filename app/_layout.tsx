import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export { ErrorBoundary } from "expo-router";
export const unstable_settings = {
  initialRouteName: "(app)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();
// // Set the animation options. This is optional.
// SplashScreen.setOptions({
//   duration: 100,
//   fade: true,
// });
export default function RootLayout() {
  return (
    <Providers>
      <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" />
      </Stack>
    </Providers>
    // <Stack />
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  // const theme = useThemeConfig();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <GestureHandlerRootView
          style={styles.container}
          // className={theme.dark ? `dark` : undefined}
        >
          {/* <ThemeProvider value={theme}> */}
          {/* <BottomSheetModalProvider> */}
          {children}
          {/* </BottomSheetModalProvider> */}
          {/* </ThemeProvider> */}
        </GestureHandlerRootView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
