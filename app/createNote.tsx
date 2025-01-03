import React, { useContext, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, TextInput, View, Text } from 'react-native';
import { addData, updateData } from '../data/storage';
import { noteData } from '../data/notesData';
import RadioGroup from 'react-native-radio-buttons-group';
import { ListContainer, listItemData } from '../components/ListContainer';
import { StateContext } from '../components/data/StateProvider';
import { useRouter, useLocalSearchParams } from 'expo-router';

const radioData = [
    {
        id: '1',
        label: 'Note',
    },
    {
        id: '2',
        label: 'List',
    },
];

function CreateNote(): React.JSX.Element {
    const [date, setDate] = React.useState(new Date());
    const [showPicker, setShowPicker] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState<string | listItemData[]>('');
    const [selectedNoteStyle, setSelectedNoteStyle] = React.useState('1');

    const router = useRouter();

    const [notes, SetNoteState] = useContext(StateContext);
    
    const { id } = useLocalSearchParams();

    // TODO: check to make sure the random id doens't already exist in the notes
    // TODO: save and start list obj implementation
    const storeOrUpdateNote = (): void => {
        const note: noteData = {
            title: title,
            id: id ? parseInt(String(id)) : Math.floor(Math.random() * 1000000),
            type: selectedNoteStyle,
            dateStart: date,
            content: content,
            list: typeof content === 'object',
            colour: '',
        };

        const newNotes = id 
            ? updateData(notes, note)
            : addData(notes ,note);

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
                setSelectedNoteStyle(note.type);
            }
        }
    }, [id]);

    return (
        <View>
            <TextInput placeholder='Title' value={title} onChangeText={(text) => setTitle(text)} />
            <Text>{`Start date: ${new Date(date).toLocaleDateString()}`}</Text>
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
            <RadioGroup 
                layout='row'
                radioButtons={radioData}
                onPress={setSelectedNoteStyle}
                selectedId={selectedNoteStyle}
            />
            {
                selectedNoteStyle === '1' && typeof content === 'string'
                ? <TextInput placeholder='Content' value={content} onChangeText={(text) => setContent(text)} multiline={true} />
                : <ListContainer setContent={setContent} currentContent={content as listItemData[]} />
            }
            <Button title='Save' onPress={storeOrUpdateNote} />
            <Button title='Cancel' onPress={() => router.replace('/')} />
        </View>
    )
};

export default CreateNote;