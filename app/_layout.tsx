import { Stack } from "expo-router/stack";
import { StateProvider } from "../components/data/StateProvider";
import { ThemeProvider } from "./theme/ThemeProvider";

export default function Layout(): React.JSX.Element {
  return (
    <StateProvider>
      <ThemeProvider>
        <Stack screenOptions={
          {
            contentStyle: {
              backgroundColor: '#33d2a4',
            },
            headerStyle: {
              backgroundColor: '#fffefe',
            },
          }
        } />
      </ThemeProvider>
    </StateProvider>
  );
}
