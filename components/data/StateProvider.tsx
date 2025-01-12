import React, { createContext, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { noteData } from '../../data/notesData';
import { getData } from '../../data/storage';

export const StateContext = createContext<[noteData[], (notes: noteData[]) => void]>([[], () => {}]);

export function StateProvider (props: React.PropsWithChildren): React.JSX.Element {
    const [notes, setNotes] = useState<noteData[]>([]);
    const [initText, setInitText] = useState('Loadging...');
  
    useEffect(() => {
      const initData = getData();
  
      initData.then((data) => {
        setNotes(data);
      }).catch((error) => {
        setInitText('oops, there has been an error. Please reload the app');
      });
    }, []);
  
    return (
      <StateContext.Provider value={[notes, setNotes]}>
        {notes.length
          ? props.children
          : <Text>{initText}</Text>
        }
      </StateContext.Provider>
    );
  }