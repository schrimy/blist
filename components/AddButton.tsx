import React from "react";
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1472066121.
import { Pressable } from "react-native";
import IonIcons from '@expo/vector-icons/Ionicons';
import { styles } from "../styles/main";
import { useRouter } from 'expo-router';

export function AddButton(): React.JSX.Element {
    const router = useRouter();

    return (
        <Pressable style={styles.Pressable} onPress={() => router.push('/createNote')}>
            <IonIcons name='add-circle' size={56} color='black' />
        </Pressable>
    );
}