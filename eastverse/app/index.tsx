import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 bg-gray-50 justify-center items-center p-6">
      {/* Welcome Card */}
      <View className="bg-white shadow-lg rounded-2xl p-8 mb-8 w-full max-w-md">
        <Text className="text-2xl font-bold text-gray-800 text-center">
          Welcome to My App
        </Text>
        <Text className="text-gray-500 text-center mt-2">
          Explore and connect with us!
        </Text>
      </View>

      {/* Login Button */}
      <Link href="/(auth)/login" asChild>
        <Pressable className="bg-indigo-600 px-8 py-4 rounded-lg w-full max-w-md mb-4 active:opacity-80">
          <Text className="text-white text-lg font-semibold text-center">
            Go to Login
          </Text>
        </Pressable>
      </Link>

      {/* Register Button */}
      <Link href="/(auth)/register" asChild>
        <Pressable className="bg-blue-500 px-8 py-4 rounded-lg w-full max-w-md active:opacity-80">
          <Text className="text-white text-lg font-semibold text-center">
            Go to Register
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}