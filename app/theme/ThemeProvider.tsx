import React, { createContext } from 'react';
import { useColorScheme, ColorSchemeName } from 'react-native';

export const ThemeContext = createContext<[theme: ColorSchemeName, toggleTheme: () => void]>([
  'light',
  () => {},
]);

export function ThemeProvider({ children }: React.PropsWithChildren): React.JSX.Element {
  const [themeState, setThemeState] = React.useState<ColorSchemeName>(useColorScheme());

  // TODO: cache theme preference with AsyncStorage
  const toggleTheme = (): void => {
    setThemeState((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={[ themeState, toggleTheme ]}>
      {children}
    </ThemeContext.Provider>
  );
}