import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { getGameDetails } from '../lib/metacritic';

export default function Detail() {
  const [details, setDetails] = useState();
  const { id } = useLocalSearchParams();
  useEffect(() => {
    if (id) {
      getGameDetails(id).then((details) => setDetails(details));
    }
  }, []);
  return (
    <View style={styles.contDetail}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#69f' },
          headerTintColor: 'black',
          headerTitle: `${id}`,
          headerRight: () => {},
          headerLeft: () => {}
        }}
      />
      {details == null ? (
        <ActivityIndicator />
      ) : (
        <>
          <Image source={{ uri: details.img }} style={styles.image} />
          <Text style={{ color: '#fff', fontSize: 25, marginTop: 15, textAlign: 'center'}} >
            {details.title}
          </Text>
          <Text style={{color:'#888', marginTop: 15, fontWeight: 700,fontSize: 20}}>{details.description} </Text>
          <Link href="/" style={{ color: '#03d', fontSize: 20, marginTop: 10 }}>
            Ir a inicio </Link>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contDetail: {
    flex: 1,
    backgroundColor: '#000',
    textAlign: 'center',
    alignItems: 'center',
    padding: 10
  },
  image: {
    width: 230,
    height: 280,
    borderRadius: 10
  }
});
