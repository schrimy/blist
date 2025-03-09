import React, { useContext, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { addData, updateData } from '../data/storage';
import { noteData } from '../data/notesData';
import RadioGroup from 'react-native-radio-buttons-group';
import { styles } from '../styles/main';
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
                             
    const { noteId } = useLocalSearchParams();

    // TODO: check to make sure the random id doens't already exist in the notes
    const storeOrUpdateNote = (): void => {
        const note: noteData = {
            title: title,
            id: noteId ? parseInt(String(noteId)) : Math.floor(Math.random() * 1000000),
            type: selectedNoteStyle,
            dateStart: date,
            content: content,
            list: typeof content === 'object',
            colour: '',
        };

        const newNotes = noteId 
            ? updateData(notes, note)
            : addData(notes ,note);

        SetNoteState(newNotes);

        router.back();
    }

    const setNoteType = (noteType: string): void => {
        if (noteType !== selectedNoteStyle) {
            setSelectedNoteStyle(noteType);
            setContent('');
        }
    }

    useEffect(() => {
        if (noteId && typeof noteId === 'string') {
            const note = notes.find((note) => note.id === parseInt(noteId));

            if (note) {
                setTitle(note.title);
                setDate(note.dateStart);
                setContent(note.content);
                setSelectedNoteStyle(note.type);
            }
        }
    }, [noteId]);

    return (
        <View style={styles.createNoteContainer}>
            <TextInput style={styles.textInput} placeholder='Title' value={title} onChangeText={(text) => setTitle(text)} />
            <View style={styles.dateContainer}>
                <Text>{`Start date: ${new Date(date).toLocaleDateString()}`}</Text>     
                <TouchableOpacity style={styles.button} onPress={() => setShowPicker(true)}>
                    <Text style={styles.buttonText}>PICK A DATE</Text>
                </TouchableOpacity>
            </View>
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
                {!noteId &&
                    <RadioGroup
                        containerStyle={styles.radioContainer} 
                        layout='row'
                        radioButtons={radioData}
                        onPress={setNoteType}
                        selectedId={selectedNoteStyle}
                    />
                }
            {
                selectedNoteStyle === '1' && typeof content === 'string'
                ? <TextInput style={styles.textInput} placeholder='Content' value={content} onChangeText={(text) => setContent(text)} multiline={true} />
                : <ListContainer setContent={setContent} currentContent={content as listItemData[]} />
            }
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.button} onPress={storeOrUpdateNote}>
                    <Text style={styles.buttonText}>SAVE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                    <Text style={styles.buttonText}>CANCEL</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default CreateNote;