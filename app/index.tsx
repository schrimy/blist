import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { AddButton } from '../components/AddButton';
import { Stack } from "expo-router/stack";
import { titles } from "../constants/Strings";
import { getData } from "../data/storage";
import { noteData } from "../data/notesData";
import { StateContext } from "./_layout";

export const unstable_settings = {
  initialRouteName: "home",
}

export default function Index() {
  const [notes, setNotes] = useContext(StateContext);

  const retreiveNotes = async (): Promise<void> => {
    const data = await getData();

    console.log('retrieve notes:', notes);
    setNotes(data);
  };

  useEffect(() => {
    retreiveNotes();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen options={{ title: titles.app, headerTitleAlign: 'center' }} />
      {notes.length > 0 && notes.map((note, index) => {
        return (
          <Text key={index}>{note.title}</Text>
        );
      })}
      <AddButton />
    </View>
  );
}
