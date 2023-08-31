import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from "@ui-kitten/components";
import { HomeScreen } from "./src/screens/home.screen";

export default function App() {
  return (
    <SafeAreaView>
      <ApplicationProvider {...eva} theme={eva.light}>
        <View className="flex-auto">
          <StatusBar style="auto" />
          <HomeScreen />
        </View>
      </ApplicationProvider>
    </SafeAreaView>
  );
}

