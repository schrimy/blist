import React, { createContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../styles/main';
import { noteData } from '../../data/notesData';
import { getData } from '../../data/storage';

export const StateContext = createContext<[noteData[], (notes: noteData[]) => void]>([[], () => {}]);

export function StateProvider (props: React.PropsWithChildren): React.JSX.Element {
    const [notes, setNotes] = useState<noteData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [initText, setInitText] = useState('Loading...');
  
    useEffect(() => {
      const initData = getData();
  
      initData.then((data) => {
        setNotes(data);
        setIsLoading(false);
      }).catch((error) => {
        setInitText('oops, there has been an error. Please reload the app');
      });
    }, []);

    const buildLoader = (): React.JSX.Element => {
      return (
        <View style={styles.InfoContainer}>
          <Text>{initText}</Text>
        </View>
      )
    }
  
    return (
      <StateContext.Provider value={[notes, setNotes]}>
        {isLoading
          ? buildLoader()
          : props.children
        }
      </StateContext.Provider>
    );
  }