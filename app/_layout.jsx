import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import 'react-native-reanimated';

import {useColorScheme} from '@/hooks/use-color-scheme';

export const unstable_settings = {
    anchor: '(tabs)',
};

export default function RootLayout() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="contact-us" options={{title: "Contact Us"}}/>
                <Stack.Screen name="about-us" options={{title: "About Us"}}/>
                <Stack.Screen name="(tabs)" options={{title: "Main"}}/>
            </Stack>
            <StatusBar style="auto"/>
        </ThemeProvider>
    );
}
