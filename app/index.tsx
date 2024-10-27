import React, { useContext } from "react";
import { View, Text } from "react-native";
import { AddButton } from '../components/AddButton';
import { Stack } from "expo-router/stack";
import { titles } from "../constants/Strings";
import { StateContext } from "../components/data/StateProvider";

export default function Index() {
  const [notes, setNotes] = useContext(StateContext);

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
