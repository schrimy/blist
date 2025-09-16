import { Stack } from "expo-router/stack";
import { themeColours } from "../styles/main";
import { StateProvider } from "../components/data/StateProvider";
import { ThemeProvider, ThemeContext } from "./theme/ThemeProvider";
import React, { useContext } from "react";

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
  const [theme] = useContext(ThemeContext);

  return <Stack screenOptions={{
    contentStyle: {
      backgroundColor: themeColours(theme).backgroundColor
    }
  }}/>
}
