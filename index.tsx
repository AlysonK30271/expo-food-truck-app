import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View className="flex-1 bg-slate-950 px-6 justify-center">
      <Text className="text-4x1 font-bold text-white mb-3">
        Mobile Food Truck
      </Text>

      <Text className="text-slate-400 lext-lg mb-10">
        Faster than most.
      </Text>

      <Link href="/menu" asChild>
        <Pressable className="bg-emerald-500 py-4 rounded-2xl">
          <Text className="text-center text-black font-semibold text-lg">
          View Menu
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
