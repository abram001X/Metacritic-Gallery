import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { AboutIcon, HomeIcon } from '../../components/Icons';


export default function TabsLayout(){
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {backgroundColor: '#000'},
            tabBarActiveTintColor: 'blue'
        }}>
            <Tabs.Screen name='index'
            options={{
                title: 'Inicio',
                tabBarIcon: ({color})=> <HomeIcon color={color}/>
            }}/>
            <Tabs.Screen name='about'
            options={{
                title: 'About',
                tabBarIcon: ({color})=> <AboutIcon color={color}/>
            }}/>
        </Tabs>
    )
}







