import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Link href="/(auth)/login" className="bg-indigo-600 px-6 py-3 rounded-lg">
        <Text className="text-white text-lg">Go to Login</Text>
      </Link>
      
      <Link href="/(auth)/register" className="bg-blue-500 px-6 py-3 rounded-lg">
        <Text className="text-white text-lg">Go to Register</Text>
      </Link>
    </View>
  );
}
