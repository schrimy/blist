import { noteData } from '../../data/notesData';
import React, { useContext, useState } from 'react';
import { useRouter } from 'expo-router';
import { deleteItem } from '../../data/storage';
import { StateContext } from '../data/StateProvider';
import { Text, StyleSheet, View, Pressable, Modal } from 'react-native';

export default function Note(props: { noteData: noteData }): React.JSX.Element {
    const { title, content, id } = props.noteData;
    const [notes, setNotes] = useContext(StateContext);
    const router = useRouter();

    const [showModal, setShowModal] = useState(false);

    const deleteNote = (currentNotes: noteData[], id: number): void => {
        const newNotes = deleteItem(currentNotes, id);

        setShowModal(false);
        setNotes(newNotes);
    }

    const cancelDelete = (): void => {
        setShowModal(false);
        router.replace('/');
    }

    // TODO: place in own module / component file
    const DeleteModal = (): React.JSX.Element => {
        return (
            <>
                <Modal
                    animationType='slide'
                    transparent={false}
                    visible={showModal}
                    onRequestClose={() => setShowModal(false)}
                >
                    <Text>
                        Are you sure you want to delete this note?
                    </Text>
                    <Pressable onPress={(): void => deleteNote(notes, id)}>
                        <Text>
                            Yes
                        </Text>
                    </Pressable>
                    <Pressable onPress={(): void => cancelDelete()}>
                        <Text>
                            No
                        </Text>
                    </Pressable>
                </Modal>
            </>
        );
    }

    return (
        <View style={styles.container}>
            <DeleteModal />
            <View style={styles.btnContainer}>
                <Pressable style={styles.deleteBtn} onPress={(): void => router.push({ pathname: '/createNote', params: { id: id } })}>
                    <Text>
                        edit
                    </Text>
                </Pressable>
                <Pressable style={styles.deleteBtn} onPress={() => setShowModal(true)}>
                    <Text>
                        x
                    </Text>
                </Pressable>
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                {title}
            </Text>
            <Text>
                {
                    typeof content === 'string'
                        ? content
                        : content.map((item, i) => {
                            return (
                                <Text key={i}>
                                    {item.content}<br />
                                </Text>
                            );
                        })
                }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        width: '50%',
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    deleteBtn: {
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#000',
        marginTop: 5,
        marginRight: 5,
        padding: 1,
    },
    btnContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});