import AsyncStorage from '@react-native-async-storage/async-storage';
import { noteData } from './notesData';

const getData = async(): Promise<noteData[]> => {
    const data = await AsyncStorage.getItem('notes');

    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
}

const addData = (noteState: noteData[], newNote: noteData): noteData[] => {
    const newNotes = [...noteState, newNote];

    setData(newNotes);

    return newNotes;
}

const setData = async (notes: noteData[]) => {
    try {
        const data = JSON.stringify(notes);
        await AsyncStorage.setItem('notes', data);
    } catch (error) {
        console.log(error);
    }
}

const clearData = (): void => {
    AsyncStorage.clear();
}

export { getData, addData, clearData };