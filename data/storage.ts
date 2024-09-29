import { MMKV } from 'react-native-mmkv';
import { noteData } from './notesData';

const storage = new MMKV();

const getData = (): noteData[] => {
    const data = storage.getString('notes');

    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
}

const setData = (notes: noteData[]): void => {
    const data = JSON.stringify(notes);

    storage.set('notes', data);
}

const clearData = (): void => {
    storage.clearAll();
}

export { getData, setData, clearData };