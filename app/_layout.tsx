import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { useFonts } from "expo-font";
export { ErrorBoundary } from "expo-router";
export const unstable_settings = {
  initialRouteName: "(app)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    DMSansSB: require(".././assets/fonts/DMSans-SemiBold.ttf"),
    DMSansR: require(".././assets/fonts/DMSans-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // <View onLayout={onLayoutRootView}>
    <Providers>
      <Stack
        initialRouteName="index"
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
        <Stack.Screen name="onboarding" />
      </Stack>
    </Providers>
    // </View>
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
