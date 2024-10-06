import React, { useRef } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, TextInput, View, Text } from 'react-native';
import { setData } from '../data/storage';

function CreateNote(): React.JSX.Element {
    const [date, setDate] = React.useState(new Date());
    const [showPicker, setShowPicker] = React.useState(false);
    const title = useRef<TextInput>(null);
    const content = useRef<TextInput>(null);

    const storeNote = (): void => {
        const note = {
            title: title.current ? title.current.value : '',
            type: 'note',
            dateStart: date,
            content: content.current ? content.current.value : '',
            list: false,
            colour: '',
        };

        setData([note]);
    }

    return (
        <View>
            <TextInput ref={title} placeholder="Title" />
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
            <TextInput ref={content} placeholder="Content" multiline={true} />
            <Button title="Save" onPress={() => storeNote()}/>
        </View>
    )
};

export default CreateNote;