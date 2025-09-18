import { noteData } from '../../data/notesData';
import React, { useContext, useState } from 'react';
import { useRouter } from 'expo-router';
import { CheckBox } from 'react-native-btr';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { DeleteModal } from './DeleteModal';
import { deleteItem, updateData } from '../../data/storage';
import { StateContext } from '../data/StateProvider';
import { ThemeContext } from "../../app/theme/ThemeProvider";
import { Text, View, Pressable } from 'react-native';
import { notesStyles, themeColours } from '../../styles/main';

export default function Note(props: { noteData: noteData }): React.JSX.Element {
    const { title, content, id, pinned } = props.noteData;
    const [notes, setNotes] = useContext(StateContext);
    const [theme] = useContext(ThemeContext);
    const router = useRouter();

    const [showModal, setShowModal] = useState(false);

    const deleteNote = (id: number): void => {
        const newNotes = deleteItem(notes, id);

        setShowModal(false);
        setNotes(newNotes);
    }

    const cancelDelete = (): void => {
        setShowModal(false);
    }

    const updateNote = (listItemIndex?: number): void => {
        const currentNote = props.noteData;
        
        if (listItemIndex && typeof currentNote.content === 'object') {
            const lisItemComplete = currentNote.content[listItemIndex].complete;

            currentNote.content[listItemIndex].complete = !lisItemComplete;
        }

        const newNotes = updateData(notes, currentNote);

        setNotes(newNotes);
    }

    const onPinnedToggled = (): void => {
        const currentNote = props.noteData;
        currentNote.pinned = !currentNote.pinned;

        const currentIndex = notes.findIndex(note => note.id === currentNote.id);

        if (currentNote.pinned && currentIndex !== 0) {
            // If the note is currently pinned and not at the top, move it to the top
            notes.splice(currentIndex, 1);
            notes.unshift(currentNote);
        }

        updateNote();
    }

    return (
        <>
            { showModal && <DeleteModal deleteNote={deleteNote} cancelDelete={cancelDelete} id={id} /> }
            <View style={notesStyles(theme).container}>
                <View style={notesStyles(theme).btnContainer}>
                    <Pressable style={notesStyles(theme).deleteBtn} onPress={(): void => onPinnedToggled()}>
                        <AntDesign name={pinned ? 'pushpin' : 'pushpino'} size={16} color={themeColours(theme).buttonText} />
                    </Pressable>
                    <Pressable style={notesStyles(theme).deleteBtn} onPress={(): void => router.push({ pathname: '/createNote', params: { noteId: id } })}>
                        <AntDesign name='edit' size={16} color={themeColours(theme).buttonText} />
                    </Pressable>
                    <Pressable style={notesStyles(theme).deleteBtn} onPress={() => setShowModal(true)}>
                        <Ionicons name='trash-outline' size={16} color={themeColours(theme).buttonText} />
                    </Pressable>
                </View>
                <Text style={notesStyles(theme).noteTitle}>
                    {title}
                </Text>
                <View style={notesStyles(theme).noteContent}>
                    {
                        typeof content === 'string'
                            ? <Text style={notesStyles(theme).noteText}>{content}</Text>
                            : content.map((item, i) => {
                                return (
                                    <View key={i} style={notesStyles(theme).listContent}>
                                        <Text style={notesStyles(theme).listText}>
                                            {item.content}
                                        </Text>
                                        <View style={notesStyles(theme).checkboxContainer}>
                                            <CheckBox checked={item.complete} onPress={() => updateNote(i)} />
                                        </View>
                                    </View>
                                );
                            })
                    }
                </View>
            </View>
        </>
    );
}