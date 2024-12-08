import React from 'react';
import { ListItem } from '../components/ListItem';
import { Pressable, Text } from 'react-native';

export interface listItemData {
    content: string;
    complete: boolean;
}

export const ListContainer = (props: { setContent: (content: listItemData[]) => void }): React.JSX.Element => {
    const [listItems, setListItems] = React.useState<listItemData[]>([{ content: '', complete: false }]);

    // TODO: implement list item change with the local state and use callback to set note content with list
    const onListItemChange = (id: number, itemState: listItemData): void => {
        const newListItems = listItems.map((listItem, index) => {
            if (index === id) {
                return itemState;
            } else {
                return listItem;
            }
        });

        setListItems(newListItems);
        props.setContent(newListItems);
    }

    const addListItem = (): void => {
        setListItems([...listItems, { content: '', complete: false }]);
    }

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