import { Stack } from "expo-router/stack";
import { styles, themeColours } from "../styles/main";
import { StateProvider } from "../components/data/StateProvider";
import { ThemeProvider, ThemeContext } from "./theme/ThemeProvider";
import React, { useContext } from "react";
import { Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Layout(): React.JSX.Element {
  return (
    <StateProvider>
      <ThemeProvider>
        <RootLayout />
      </ThemeProvider>
    </StateProvider>
  );
}

function RootLayout() {
  const [theme, toggleTheme] = useContext(ThemeContext);

  return <Stack screenOptions={{
    contentStyle: {
      backgroundColor: themeColours(theme).backgroundColor
    },
    headerRight: () => (
        <Pressable style={styles(theme).themeButton} onPressIn={() => toggleTheme()}>
          <Ionicons name={theme === 'dark' ? 'sunny-outline' : 'moon-outline'} size={20} color='#000' />
        </Pressable>
      ),
  }}/>
}
