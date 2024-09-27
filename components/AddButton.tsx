import React from "react";
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1472066121.
import { Text, Pressable } from "react-native";
import { styles } from "../styles/main";
import { useRouter } from 'expo-router';


export function AddButton(): React.JSX.Element {
    const router = useRouter();

    return (
        <Pressable style={styles.Pressable} onPress={() => router.push("/createNote")}>
            <Text style={styles.Text}>+</Text>
        </Pressable>
    );
}