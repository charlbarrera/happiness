import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { HomeScreen } from "./screens/home.screen";
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from "@ui-kitten/components";

export default function App() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <View>
          <StatusBar style="auto" />
          <HomeScreen />
        </View>
      </ApplicationProvider>
    );
}

