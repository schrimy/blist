import { noteData } from '../../data/notesData';
import React, { useContext } from 'react';
import { deleteItem } from '../../data/storage';
import { StateContext } from '../data/StateProvider';
import { Text, StyleSheet, View, Pressable } from 'react-native';

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

    return (
        <View style={styles.container}>
            <View style={styles.btnContainer}>
                <Pressable style={styles.deleteBtn} onPress={(): void => setNotes(deleteItem(notes, id))}>
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