import React, { useContext, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, TextInput, View, Text } from 'react-native';
import { addData } from '../data/storage';
import { noteData } from '../data/notesData';
import { StateContext } from '../components/data/StateProvider';
import { useRouter, useLocalSearchParams } from 'expo-router';

function CreateNote(): React.JSX.Element {
    const [date, setDate] = React.useState(new Date());
    const [showPicker, setShowPicker] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const router = useRouter();

    const [notes, SetNoteState] = useContext(StateContext);
    const { id } = useLocalSearchParams();

    const storeOrUpdateNote = (): void => {
        const note: noteData = {
            title: title,
            id: parseInt(String(id)) ?? Math.floor(Math.random() * 1000000),
            type: 'note',
            dateStart: date,
            content: content,
            list: false,
            colour: '',
        };

        console.log('store note:', note);

        const newNotes = /*id 
            ? updateData(notes, note)
            : */ addData(notes ,note);

        SetNoteState(newNotes);

        router.replace('/');
    }

    useEffect(() => {
        if (id && typeof id === 'string') {
            const note = notes.find((note) => note.id === parseInt(id));

            if (note) {
                setTitle(note.title);
                setDate(note.dateStart);
                setContent(note.content);
            }
        }
    }, [id]);

    return (
        <View>
            <TextInput placeholder='Title' value={title} onChangeText={(text) => setTitle(text)} />
            <Text>{`Start date: ${date.toLocaleDateString()}`}</Text>
            <Button title='Pick a date' onPress={() => setShowPicker(true)} />
            {showPicker
                && <DateTimePicker
                    value={date}
                    mode='date'
                    onChange={(event, selectedDate) => {
                        const currentDate = selectedDate || date;
                        setDate(currentDate);
                        setShowPicker(false);
                    }}
                />}
            <TextInput placeholder='Content' value={content} onChangeText={(text) => setContent(text)} multiline={true} />
            <Button title='Save' onPress={storeOrUpdateNote}/>
            <Button title='Cancel' onPress={() => router.replace('/')} />
        </View>
    )
};

export default CreateNote;