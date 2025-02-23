import React, { useEffect } from 'react';
import { TextInput, View, StyleSheet } from'react-native';
import { CheckBox } from 'react-native-btr';
import { listItemData } from "@/components/ListContainer";
import { styles } from '../styles/main';

interface listItemProps {
    id: number;
    content: string;
    complete: boolean;
    onChange: (itemState: listItemData) => void;
}

export function ListItem(props: listItemProps) {
    const {id, complete, content} = props;

    const [itemComplete, setComplete] = React.useState(false);
    const [itemContent, setItemContent] = React.useState('');
    const [itemId, setItemId] = React.useState(0);

    useEffect(() => {
        setItemId(id);
        setComplete(complete);
        setItemContent(content);
    }, [complete, content]);

    const onCompleteChange = (): void => {
        props.onChange({ id: itemId, content: itemContent, complete: !itemComplete });

        setComplete(!itemComplete);
    }

    const onContentChange = (text: string): void => {
        props.onChange({ id: itemId, content: text, complete: itemComplete });

        setItemContent(text);
    }

    return (
        <View style={styles.listItemContainer}>
            <TextInput style={inlinestyles.listItemTextInput} placeholder='list item' value={itemContent} onChangeText={(text) => onContentChange(text)} />
            <CheckBox
                checked={itemComplete}
                onPress={() => onCompleteChange()}
            />
        </View>
    );
}

const inlinestyles = StyleSheet.create({
    listItemTextInput: {
        ...styles.textInput,
        marginRight: 5,
        width: '92%',
    },
});