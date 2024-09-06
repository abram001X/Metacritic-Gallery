import { AnimatedCard } from './Gallery';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { useEffect, useState } from 'react';
import { getLatestGames } from '../lib/metacritic.js';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function Main() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: '#000'
      }}
    >
      <StatusBar style="light"/>
      {games.length == 0 ? (
        <ActivityIndicator color={'#f00'} />
      ) : (
        <>
          <FlatList
            data={games}
            keyExtractor={(game) => game.slug}
            renderItem={({ item, index }) => (
              <AnimatedCard game={item} index={index} />
            )}
          />
        </>
      )}
    </View>
  );
}

