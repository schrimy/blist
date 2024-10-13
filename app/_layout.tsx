import { Stack } from "expo-router/stack";

// TODO: try unsig eith useContext or redux-toolkit for persisting the notes data when using the app
// wrap the stack in a provider for useContext: https://react.dev/reference/react/useContext#updating-data-passed-via-context

export default function Layout() {
  return <Stack initialRouteName="/" />;
}
