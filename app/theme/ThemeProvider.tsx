import React, { createContext } from 'react';
import { useColorScheme, ColorSchemeName } from 'react-native';

export const ThemeContext = createContext<[theme: ColorSchemeName]>([
  'light',
//   toggleTheme: () => {}
]);

export function ThemeProvider({ children }: React.PropsWithChildren): React.JSX.Element {
  const theme = useColorScheme();

// TODO: set provider value based on native theme i.e. theme === 'dark' ? 'dark' : 'light' and set up module with dark and light colours
// TODO: setup toggle function to switch themes
  return (
    <ThemeContext.Provider value={[ theme ]}>
      {children}
    </ThemeContext.Provider>
  );
}