import React, { createContext, useEffect, useState } from "react";
import { noteData } from "../../data/notesData";
import { getData } from "../../data/storage";

export const StateContext = createContext<[noteData[], (notes: noteData[]) => void]>([[], () => {}]);

export function StateProvider (props: React.PropsWithChildren): React.JSX.Element {
    const [notes, setNotes] = useState<noteData[]>([]);
  
    useEffect(() => {
      const initData = getData();
  
      console.log('doing notes get from storage');
  
      initData.then((data) => {
        setNotes(data);
      });
    }, []);
  
    return (
      <StateContext.Provider value={[notes, setNotes]}>
        {props.children}
      </StateContext.Provider>
    );
  }