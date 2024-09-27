import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, TextInput, View, Text } from 'react-native';

const CreateNote = (): React.JSX.Element => {
    const [date, setDate] = React.useState(new Date());
    const [showPicker, setShowPicker] = React.useState(false);

    return (
        <View>
            <TextInput placeholder="Title" />
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
            <TextInput placeholder="Content" multiline={true} />
            <Button title="Save" />
        </View>
    )
};

export default CreateNote;