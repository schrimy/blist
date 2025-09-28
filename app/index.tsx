import React, { useContext, useState } from 'react';
import { ScrollView } from 'react-native';
import { AddButton } from '../components/AddButton';
import { Stack } from 'expo-router';
import { DeleteModal } from '../components/ui/DeleteModal';
import { deleteItem } from '../data/storage';
import { styles } from '../styles/main';
import { titles } from '../constants/Strings';
import { StateContext } from '../components/data/StateProvider';
import Note from '../components/ui/Note';

export default function Index() {
  const [notes, setNotes] = useContext(StateContext);
  const [showModal, setShowModal] = useState(false);
  const [noteId, setNoteId] = useState<number>();

  const deleteNote = (id: number): void => {
      const newNotes = deleteItem(notes, id);

      setShowModal(false);
      setNotes(newNotes);
  }

  const cancelDelete = (): void => {
      setShowModal(false);
  }

  const openModal = (id: number): void => {
      setNoteId(id);
      setShowModal(true);
  }

  return (
    <>
      { (showModal && noteId) && <DeleteModal deleteNote={deleteNote} cancelDelete={cancelDelete} id={noteId} /> }
      <ScrollView contentContainerStyle={styles().scrollContainer}>
        <Stack.Screen options={{ title: titles.app, headerTitleAlign: 'center' }} />
        {notes.length > 0 && notes.map((note, index) => {
          return (
            <Note key={index} noteData={note} showModal={openModal} />
          );
        })}
      </ScrollView>
      <AddButton />
    </>
  );
}
