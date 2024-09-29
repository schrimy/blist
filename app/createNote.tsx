import React, { useRef } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, TextInput, View, Text } from 'react-native';
import { noteData } from '../data/notesData';
import { setData } from '../data/storage';

const CreateNote = (): React.JSX.Element => {
    const [date, setDate] = React.useState(new Date());
    const [showPicker, setShowPicker] = React.useState(false);
    const title = useRef('');
    const content = useRef('');

    return (
        <View>
            <TextInput ref={"title"} placeholder="Title" />
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
            <TextInput ref={"content"} placeholder="Content" multiline={true} />
            <Button title="Save" onPress={() => storeNote({
                title: title.current.valueOf(),
                type: 'note',
                dateStart: date,
                content: content.current.valueOf(),
                list: false,
                colour: '',
            })}/>
        </View>
    )
};

const storeNote = (note: noteData): void => {
    setData([note]);
}

export default CreateNote;