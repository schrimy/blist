import React, { useEffect, useContext } from 'react';
import { TextInput, View, StyleSheet } from'react-native';
import { CheckBox } from 'react-native-btr';
import { listItemData } from "@/components/ListContainer";
import { styles } from '../styles/main';
import { ThemeContext } from "../app/theme/ThemeProvider";

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

    const [theme] = useContext(ThemeContext);

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
        <View style={styles(theme).listItemContainer}>
            <TextInput style={[styles(theme).textInput, { marginRight: 5, width: '92%' } ]} placeholder='list item' value={itemContent} onChangeText={(text) => onContentChange(text)} />
            <CheckBox
                checked={itemComplete}
                onPress={() => onCompleteChange()}
            />
        </View>
    );
}