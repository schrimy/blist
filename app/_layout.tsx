import { Stack } from "expo-router/stack";
import React, { createContext, useState } from 'react';
import { noteData } from "../data/notesData";
import { Router } from "expo-router";

export const StateContext = createContext<[noteData[], (notes: noteData[]) => void]>([[], () => {}]);

const StateProvider = (props: React.PropsWithChildren) => {
  const [notes, setNotes] = useState<noteData[]>([]);

  return (
    <StateContext.Provider value={[notes, setNotes]}>
      {props.children}
    </StateContext.Provider>
  );
}

export default function Layout(): React.JSX.Element {
  return (
    <StateProvider>
      <Stack />
    </StateProvider>
  );
}
