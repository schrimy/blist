import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import { AddButton } from '../components/AddButton';
import { Stack } from 'expo-router';
import { titles } from '../constants/Strings';
import { StateContext } from '../components/data/StateProvider';
import Note from '../components/ui/Note';

export default function Index() {
  const [notes, setNotes] = useContext(StateContext);

  return (
    <>
      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
        <Stack.Screen options={{ title: titles.app, headerTitleAlign: 'center' }} />
        {notes.length > 0 && notes.map((note, index) => {
          return (
            <Note key={index} noteData={note} />
          );
        })}
      </ScrollView>
      <AddButton />
    </>
  );
}
