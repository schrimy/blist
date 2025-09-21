import React, { createContext } from 'react';
import { useColorScheme, ColorSchemeName } from 'react-native';
import { getTheme, setTheme } from '../../data/storage';

export const ThemeContext = createContext<[theme: ColorSchemeName, toggleTheme: () => void]>([
  'light',
  () => {},
]);

export function ThemeProvider({ children }: React.PropsWithChildren): React.JSX.Element {
  const [themeState, setThemeState] = React.useState<ColorSchemeName>(useColorScheme());

  React.useEffect(() => {
    const storedTheme = getTheme();

    storedTheme.then((theme) => {
      if (theme) {
        setThemeState(theme);
      }
    });
  }, []);

  const toggleTheme = (): void => {
    const newTheme = themeState === 'light' ? 'dark' : 'light';

    setThemeState(newTheme);
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={[ themeState, toggleTheme ]}>
      {children}
    </ThemeContext.Provider>
  );
}