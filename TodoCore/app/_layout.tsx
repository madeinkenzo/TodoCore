import { Stack } from "expo-router";

export default function RootLayout() {
  // Hide the default header for all routes in this stack
  return <Stack screenOptions={{ headerShown: false }} />;
}
