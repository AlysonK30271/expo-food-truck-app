import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack
        screenOptions={{
            headerStyle: {backgroundColor: '#020617' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: '600'},
        }}
    />
    );
}