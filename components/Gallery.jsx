import { Link } from 'expo-router';
import { useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Animated,
  Pressable
} from 'react-native';
export function Gallery({ game }) {
  return (
    <Link asChild href={`/${game.slug}`}>
      <Pressable>
        <View className="flex-row p-1 m-2 rounded-md bg-zinc-900 justify-center items-center">
          <Image source={{ uri: game.image }} style={styles.image} />
          <View className="p-2  flex-shrink">
            <Text className="text-cyan-50 text-xl w-60 mb-2">
              {game.title}{' '}
            </Text>
            <Text className="text-white text-xl bg-green-600 rounded-full w-7 p-1 mb-2">
              {game.score}
            </Text>
            <Text className="text-slate-400 ">
              {game.description.slice(0, 200)}...
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}
export function AnimatedCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 500,
      useNativeDriver: true
    }).start();
  }, [opacity, index]);
  return (
    <Animated.View>
      <Gallery game={game} />
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 180,
    borderRadius: 5
  }
});
