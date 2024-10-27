import { noteData } from '@/data/notesData';
import React from 'react';
import { Text } from 'react-native';

export default function Note(props: { noteData: noteData }): React.JSX.Element {
    const { title, content } = props.noteData;

    return (
        <>
            <Text>
                <h2>
                    {title}
                </h2>
            </Text>
            <Text>
                {content}
            </Text>
        </>
    );
}