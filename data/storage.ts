import AsyncStorage from '@react-native-async-storage/async-storage';
import { ColorSchemeName } from 'react-native';
import { noteData } from './notesData';

// AsyncStorage for theme choice
const getTheme = async(): Promise<ColorSchemeName> => {
    const theme = await AsyncStorage.getItem('theme');

    if (theme) {
        return JSON.parse(theme);
    }

    return undefined;
}

const setTheme = async(theme: ColorSchemeName): Promise<void> => {
    try {
        const themeChoice = JSON.stringify(theme);

        await AsyncStorage.setItem('theme', themeChoice);
    } catch (error) {
        console.log(error);
    }
}

// AsyncStorage for notes data
const getData = async(): Promise<noteData[]> => {
    const data = await AsyncStorage.getItem('notes');

    if (data) {
        return JSON.parse(data);
    }

    return [];
}

const addData = (noteState: noteData[], newNote: noteData): noteData[] => {
    const newNotes = [...noteState, newNote];

    setData(newNotes);

    return newNotes;
}

const updateData = (noteState: noteData[], newNote: noteData): noteData[] => {
    const newNotes = noteState.map((note) => {
        if (note.id === newNote.id) {
            return newNote;
        } else {
            return note;
        }
    });

    setData(newNotes);

    return newNotes;
}

const setData = async (notes: noteData[]): Promise<void> => {
    try {
        const data = JSON.stringify(notes);

        await AsyncStorage.setItem('notes', data);
    } catch (error) {
        console.log(error);
    }
}

const deleteItem = (noteState: noteData[], id: number): noteData[] => {
    const newNotes = noteState.filter((note) => note.id !== id);

    setData(newNotes);

    return newNotes;
}

const clearData = (): void => {
    AsyncStorage.clear();
}

export { getTheme, setTheme, getData, addData, clearData, deleteItem, updateData };