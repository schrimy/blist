import React, { useContext } from "react";
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1472066121.
import { Pressable } from "react-native";
import IonIcons from '@expo/vector-icons/Ionicons';
import { styles } from "../styles/main";
import { useRouter } from 'expo-router';
import { ThemeContext } from "../app/theme/ThemeProvider";

export function AddButton(): React.JSX.Element {
    const router = useRouter();
    const [theme] = useContext(ThemeContext);

    return (
        <Pressable style={styles(theme).newNote} onPress={() => router.push('/createNote')}>
            <IonIcons name='add' size={50} color='#2c3e50' />
        </Pressable>
    );
}