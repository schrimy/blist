import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { notesStyles, styles } from '../../styles/main';
import { ThemeContext } from "../../app/theme/ThemeProvider";

interface DeleteModalProps {
    id: number;
    deleteNote: (id: number) => void;
    cancelDelete: () => void;
}

// TODO: need the overlay to cover full view not just notes container

export const DeleteModal = ({ deleteNote, cancelDelete, id }: DeleteModalProps): React.JSX.Element => {
    const [theme] = useContext(ThemeContext);

    return (
        <View style={notesStyles(theme).modal}>
            <View style={notesStyles(theme).modalContent}>
                <Text style={notesStyles(theme).modalText}>
                    Are you sure you want to delete this note?
                </Text>
                <TouchableOpacity style={[styles(theme).button, { marginBottom: 10 }]} onPress={(): void => deleteNote(id)}>
                    <Text style={styles(theme).buttonText}>
                        Yes
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles(theme).button, { marginBottom: 10 }]} onPress={(): void => cancelDelete()}>
                    <Text style={styles(theme).buttonText}>
                        No
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}