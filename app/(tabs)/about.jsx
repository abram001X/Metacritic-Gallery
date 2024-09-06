import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';
import { HomeIcon } from '../../components/Icons';

export default function About() {
  return (
    <ScrollView>
      <View style={styles.contAbout}>
        <Stack.Screen options={{
            headerStyle: {backgroundColor: '#69f'},
            headerTitle: 'About',
            headerRight: ()=>{},
            headerLeft: ()=>{},
        }}/>
          <Link asChild href="/">
            <Pressable>
             <HomeIcon/>
            </Pressable>
          </Link>

        <Text style={styles.link}>Sobre el proyecto</Text>

        <Text style={styles.text}>
          Todo el contenido de este canal son fragmentos del Stream de LA COBRA
          en KICK. Este canal es el secundario, si queres ver mas contenido
          podes seguirnos en nuestro canal principal que esta orientado al
          futbol y el humor, si queres debatir y divertirte podes unirte al
          stream a las 23hs.
        </Text>

        <Text style={styles.text}>
          Todo el contenido de este canal son fragmentos del Stream de LA COBRA
          en KICK. Este canal es el secundario, si queres ver mas contenido
          podes seguirnos en nuestro canal principal que esta orientado al
          futbol y el humor, si queres debatir y divertirte podes unirte al
          stream a las 23hs.
        </Text>

        <Text style={styles.text}>
          Todo el contenido de este canal son fragmentos del Stream de LA COBRA
          en KICK. Este canal es el secundario, si queres ver mas contenido
          podes seguirnos en nuestro canal principal que esta orientado al
          futbol y el humor, si queres debatir y divertirte podes unirte al
          stream a las 23hs.
        </Text>

        <Text style={styles.text}>
          Todo el contenido de este canal son fragmentos del Stream de LA COBRA
          en KICK. Este canal es el secundario, si queres ver mas contenido
          podes seguirnos en nuestro canal principal que esta orientado al
          futbol y el humor, si queres debatir y divertirte podes unirte al
          stream a las 23hs.
        </Text>

        <Text style={styles.text}>
          Todo el contenido de este canal son fragmentos del Stream de LA COBRA
          en KICK. Este canal es el secundario, si queres ver mas contenido
          podes seguirnos en nuestro canal principal que esta orientado al
          futbol y el humor, si queres debatir y divertirte podes unirte al
          stream a las 23hs.
        </Text>

        <Text style={styles.text}>
          Todo el contenido de este canal son fragmentos del Stream de LA COBRA
          en KICK. Este canal es el secundario, si queres ver mas contenido
          podes seguirnos en nuestro canal principal que esta orientado al
          futbol y el humor, si queres debatir y divertirte podes unirte al
          stream a las 23hs.
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  contAbout: {
    backgroundColor: '#000',
    height: 900,
    padding: 10
  },
  text: {
    color: '#fff',
    marginBottom: 30
  },
  link: {
    color: '#06a',
    fontSize: 30,
    marginTop: 10,
    marginBottom: 30
  }
});
