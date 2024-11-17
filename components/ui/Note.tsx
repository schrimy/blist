import { noteData } from '../../data/notesData';
import React, { useContext, useState } from 'react';
import { useRouter } from 'expo-router';
import { deleteItem } from '../../data/storage';
import { StateContext } from '../data/StateProvider';
import { Text, StyleSheet, View, Pressable, Modal } from 'react-native';

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

export default function Note(props: { noteData: noteData }): React.JSX.Element {
    const { title, content, id } = props.noteData;
    const [notes, setNotes] = useContext(StateContext);
    const router = useRouter();

    const [showModal, setShowModal] = useState(false);

    const DeleteModal = (): React.JSX.Element => {
        // TODO: get data to delete certain note clicked on set id to a state object and use with deleItem call
        return (
            <>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={showModal}
                    onRequestClose={() => setShowModal(false)}
                >
                    <Text>
                        Are you sure you want to delete this note?
                    </Text>
                    <Pressable onPress={(): void => console.log('delete note')}>
                        <Text>
                            Yes
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => router.replace('/')}>
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
                {content}
            </Text>
        </View>
    );
}