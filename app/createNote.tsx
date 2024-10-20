import React, { useContext } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, TextInput, View, Text } from 'react-native';
import { setData } from '../data/storage';
import { noteData } from "../data/notesData";
import { StateContext } from './_layout';
import { useRouter } from 'expo-router';

function CreateNote(): React.JSX.Element {
    const [date, setDate] = React.useState(new Date());
    const [showPicker, setShowPicker] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const router = useRouter();

    const [notes, SetNoteState] = useContext(StateContext);

    const storeNote = (): void => {
        const note: noteData = {
            title: title,
            type: 'note',
            dateStart: date,
            content: content,
            list: false,
            colour: '',
        };

        console.log('store note:', note);

        setData([note]);
        SetNoteState([note]);

        router.replace('/');
    }

    return (
        <View>
            <TextInput placeholder="Title" onChangeText={(text) => setTitle(text)} />
            <Text>{`Start date: ` + date.toLocaleDateString()}</Text>
            <Button title="Pick a date" onPress={() => setShowPicker(true)} />
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
            <TextInput placeholder="Content" onChangeText={(text) => setContent(text)} multiline={true} />
            <Button title="Save" onPress={storeNote}/>
        </View>
    )
};

export default CreateNote;