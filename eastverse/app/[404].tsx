import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-4xl font-bold text-gray-900 mb-4">404</Text>
      <Text className="text-xl text-gray-600 mb-8 text-center">
        Oops! The page you're looking for doesn't exist.
      </Text>
      
      <Link href="/" className="bg-indigo-600 px-6 py-3 rounded-lg">
        <Text className="text-white text-lg font-semibold">
          Go back home
        </Text>
      </Link>
    </View>
  );
}
