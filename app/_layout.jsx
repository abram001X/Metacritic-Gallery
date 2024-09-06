import { Link, Stack } from 'expo-router';
import { Pressable, View } from 'react-native';
import { Logo } from '../components/Logo';
import { AboutIcon, HomeIcon } from '../components/Icons';


export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: 'white',
        headerTitle: '',
        headerLeft: () => <Logo />,
        headerRight: () => (
          <Link
            asChild
            href="/about"
            className="text-blue-500 text-xl text-center m-2"
          >
            <Pressable>
              <AboutIcon/>
            </Pressable>
          </Link>
        )
      }}
    />
  );
}
