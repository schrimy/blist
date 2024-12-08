import React from 'react';
import { TextInput } from'react-native';
import { CheckBox } from 'react-native-btr';
import { listItemData } from "@/components/ListContainer";

interface listItemProps {
    id: number;
    content: string;
    complete: boolean;
    onChange: (id:number, itemState: listItemData) => void;
}

export function ListItem(props: listItemProps) {
    const {id, complete, content} = props;

    const [itemComplete, setComplete] = React.useState(complete);
    const [itemContent, setItemContent] = React.useState(content);

    const onCompleteChange = (): void => {
        props.onChange(id, { content: itemContent, complete: !itemComplete });

        setComplete(!itemComplete);
    }

    const onContentChange = (text: string): void => {
        props.onChange(id, { content: text, complete: itemComplete });

        setItemContent(text);
    }

    return (
        <>
            <TextInput placeholder='list item' value={itemContent} onChangeText={(text) => onContentChange(text)} />
            <CheckBox
                checked={itemComplete}
                onPress={() => onCompleteChange()}
            />
        </>
    );
}