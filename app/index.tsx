import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import { AddButton } from '../components/AddButton';
import { Stack } from 'expo-router';
import { styles } from '../styles/main';
import { titles } from '../constants/Strings';
import { StateContext } from '../components/data/StateProvider';
import Note from '../components/ui/Note';

export default function Index() {
  const [notes, setNotes] = useContext(StateContext);

  // TODO: remove delete modal from note.tsx and set up here passing in state set function to note component

  return (
    <>
      <ScrollView contentContainerStyle={styles().scrollContainer}>
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
