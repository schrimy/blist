import React, { createContext, useEffect, useState, useContext } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { styles } from '../../styles/main';
import { noteData } from '../../data/notesData';
import { getData } from '../../data/storage';
import { ThemeContext } from "../../app/theme/ThemeProvider";

export const StateContext = createContext<[noteData[], (notes: noteData[]) => void]>([[], () => {}]);

export function StateProvider (props: React.PropsWithChildren): React.JSX.Element {
    const [notes, setNotes] = useState<noteData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);

    const [theme] = useContext(ThemeContext);
  
    useEffect(() => {
      const initData = getData();
  
      initData.then((data) => {
        setNotes(data);
        setIsLoading(false);
      }).catch((error) => {
        setLoadingError(true);
        setIsLoading(false);
      });
    }, []);

    const buildLoader = (): React.JSX.Element => {
      return (
        <View style={styles(theme).InfoContainer}>
          <ActivityIndicator size='large' color='#000' />
        </View>
      )
    }

    const showError = (): React.JSX.Element => {
      return (
        <View style={styles(theme).InfoContainer}>
          <Text>Oops, there has been an error. Please reload the app</Text>
        </View>
      )
    }
  
    // Provide the notes state and the function to update it to children components
    return (
      <StateContext.Provider value={[notes, setNotes]}>
        {isLoading
          ? buildLoader()
          : loadingError
            ? showError()
            : props.children
        }
      </StateContext.Provider>
    );
  }