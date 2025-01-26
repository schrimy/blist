import React, { useEffect } from 'react';
import { ListItem } from '../components/ListItem';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/main';

export interface listItemData {
    id: number;
    content: string;
    complete: boolean;
}

export const ListContainer = (props: { setContent: (content: listItemData[]) => void, currentContent: listItemData[] }): React.JSX.Element => {
    const [listItems, setListItems] = React.useState<listItemData[]>([{ id: 0, content: '', complete: false }]);

    useEffect(() => {
        if (props.currentContent) {
            setListItems(props.currentContent);
        }
    }, [props.currentContent]);

    const onListItemChange = (itemState: listItemData): void => {
        const newListItems = listItems.map((listItem) => {
            if (listItem.id === itemState.id) {
                return itemState;
            } else {
                return listItem;
            }
        });

        setListItems(newListItems);
        props.setContent(newListItems);
    }

    const addListItem = (): void => {
        setListItems([...listItems, { id: Math.floor(Math.random() * 10000), content: '', complete: false }]);
    }

    const removeListItem = (itemId: number): void => {
        const newListItems = listItems.filter((listItem) => listItem.id !== itemId);

        setListItems(newListItems);
        props.setContent(newListItems);
    };

    return (
        <>
            {
                listItems.map((listItem) => {
                    return (
                        <View key={listItem.id}>
                            <ListItem
                                key={listItem.id}
                                id={listItem.id}
                                content={listItem.content}
                                complete={listItem.complete}
                                onChange={onListItemChange} />
                            <TouchableOpacity style={styles.button} onPress={() => removeListItem(listItem.id)}>
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    );
                })
            }
            <TouchableOpacity style={styles.button} onPress={addListItem}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </>
    );
}