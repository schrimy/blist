import React from 'react';
import { ListItem } from '../components/ListItem';
import { Pressable, Text } from 'react-native';

interface listItemData {
    content: string;
    complete: boolean;
}

export const ListContainer = (props: { setContent: (content: string) => void }): React.JSX.Element => {
    const [listItems, setListItems] = React.useState<listItemData[]>([{ content: '', complete: false }]);

    // TODO: implement list item change with the local state and use callback to set note content with list
    const onListItemChange = (): void => {
        console.log('list item change');
    }

    const addListItem = (): void => {
        setListItems([...listItems, { content: '', complete: false }]);
    }

    // TODO pass in id, content and complete variables to list item
    return (
        <>
            {
                listItems.map((listItem, i) => {
                    return (
                        <ListItem
                            key={i}
                            id={i}
                            content={listItem.content}
                            complete={listItem.complete}
                            onChange={onListItemChange} />
                    );
                })
            }
            <Pressable onPress={addListItem}>
                <Text>+</Text>
            </Pressable>
        </>
    );
}