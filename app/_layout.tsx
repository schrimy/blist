import { Stack } from "expo-router/stack";
import { StateProvider } from "../components/data/StateProvider";

export default function Layout(): React.JSX.Element {
  return (
    <StateProvider>
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
    </StateProvider>
  );
}
