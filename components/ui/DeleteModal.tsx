import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { notesStyles, styles } from '../../styles/main';

interface DeleteModalProps {
    id: number;
    deleteNote: (id: number) => void;
    cancelDelete: () => void;
}

export const DeleteModal = ({ deleteNote, cancelDelete, id }: DeleteModalProps): React.JSX.Element => {
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
                <TouchableOpacity style={modalStyles.modalButton} onPress={(): void => cancelDelete()}>
                    <Text style={styles.buttonText}>
                        No
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const modalStyles = StyleSheet.create({
    modalButton: {
        ...styles.button,
        marginBottom: 10,
    }
});