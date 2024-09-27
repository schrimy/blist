import { View, Text } from "react-native";
import { AddButton } from '../components/AddButton';
import { Stack } from "expo-router/stack";
import { titles } from "../constants/Strings";

export const unstable_settings = {
  initialRouteName: "home",
}

export default function Index() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen options={{ title: titles.app, headerTitleAlign: 'center' }} />
      <Text>Hiya</Text>
      <AddButton />
    </View>
  );
}
