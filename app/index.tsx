import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { AddButton } from '../components/AddButton';
import { Stack } from "expo-router/stack";
import { titles } from "../constants/Strings";
import { getData } from "../data/storage";
import { noteData } from "../data/notesData";

export const unstable_settings = {
  initialRouteName: "home",
}

export default function Index() {
  const [notes, setNotes] = React.useState<noteData[]>([]);

  const retreiveNotes = async (): Promise<void> => {
    const data = await getData();

    setNotes(data);
  }

  // TODO: hook up with the actual storage so it updates it when added to in create note
  useEffect(() => {
    retreiveNotes();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen options={{ title: titles.app, headerTitleAlign: 'center' }} />
      <Text>Hiya</Text>
      <AddButton />
    </View>
  );
}
