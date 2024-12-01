import React from 'react';
import { TextInput } from'react-native';
import { CheckBox } from 'react-native-btr';

interface listItemProps {
    id: number;
    content: string;
    complete: boolean;
    onChange: () => void;
}

export function ListItem(props: listItemProps) {
    const [complete, setComplete] = React.useState(props.complete);
    const [itemContent, setItemContent] = React.useState(props.content);

    const onCompleteChange = (): void => {
        setComplete(!complete);
        props.onChange();
    }

    const onContentChange = (text: string): void => {
        setItemContent(text);
        props.onChange();
    }

    return (
        <>
            <TextInput placeholder='list item' value={itemContent} onChangeText={(text) => onContentChange(text)} />
            <CheckBox
                checked={complete}
                onPress={() => onCompleteChange()}
            />
        </>
    );
}