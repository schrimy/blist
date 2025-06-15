import { noteData } from '../../data/notesData';
import React, { useContext, useState } from 'react';
import { useRouter } from 'expo-router';
import { CheckBox } from 'react-native-btr';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { deleteItem, updateData } from '../../data/storage';
import { StateContext } from '../data/StateProvider';
import { Text, View, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import { notesStyles, styles } from '../../styles/main';

export default function Note(props: { noteData: noteData }): React.JSX.Element {
    const { title, content, id } = props.noteData;
    const [notes, setNotes] = useContext(StateContext);
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

    const upateListItem = (listItemIndex: number): void => {
        const currentNote = props.noteData;
        
        if (typeof currentNote.content === 'object') {
            const lisItemComplete = currentNote.content[listItemIndex].complete;

            currentNote.content[listItemIndex].complete = !lisItemComplete;
        }

        const newNotes = updateData(notes, currentNote);

        setNotes(newNotes);
    }

    // TODO: place in own module / component file
    const DeleteModal = (): React.JSX.Element => {
        return (
            <View style={notesStyles.modal}>
                <View style={notesStyles.modalContent}>
                    <Text style={notesStyles.modalText}>
                        Are you sure you want to delete this note?
                    </Text>
                    <TouchableOpacity style={modalStyles.modalButton} onPress={(): void => deleteNote(id)}>
                        <Text style={styles.buttonText}>
                            Yes
                        </Text>
                    </TouchableOpacity>
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:1093066757. */}
                    <TouchableOpacity style={modalStyles.modalButton} onPress={(): void => cancelDelete()}>
                        <Text style={styles.buttonText}>
                            No
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <>
            { showModal && <DeleteModal /> }
            <View style={notesStyles.container}>
                <View style={notesStyles.btnContainer}>
                    <Pressable style={notesStyles.deleteBtn} onPress={(): void => router.push({ pathname: '/createNote', params: { noteId: id } })}>
                        <AntDesign name='edit' size={16} color='white' />
                    </Pressable>
                    <Pressable style={notesStyles.deleteBtn} onPress={() => setShowModal(true)}>
                        <Ionicons name='trash-outline' size={16} color='white' />
                    </Pressable>
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                    {title}
                </Text>
                <View style={notesStyles.noteContent}>
                    {
                        typeof content === 'string'
                            ? <Text style={notesStyles.noteText}>{content}</Text>
                            : content.map((item, i) => {
                                return (
                                    <View key={i} style={notesStyles.listContent}>
                                        <Text style={notesStyles.listText}>
                                            {item.content}
                                        </Text>
                                        <View style={notesStyles.checkboxContainer}>
                                            <CheckBox checked={item.complete} onPress={() => upateListItem(i)} />
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

const modalStyles = StyleSheet.create({
    modalButton: {
        ...styles.button,
        marginBottom: 10,
    }
});