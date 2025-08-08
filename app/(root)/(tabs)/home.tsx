import { auth } from '@/FirebaseConfig';
import { getAuth } from '@firebase/auth';
import { Link, router } from 'expo-router';
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  getAuth().onAuthStateChanged((user) => {
          if (!user) router.replace('/');
      });
      
  return (
    <SafeAreaView>

    <Text className="font-bold my-10 font-pressStart2P-Regular text-2xl">Welcome to Dice</Text>
    <Link href="/explore">Explore</Link>
    <Link href="/profile">Profile</Link>
    <Link href="/properties/1">Property</Link>
    <Text>Sign Out</Text>
    <TouchableOpacity onPress={() => auth.signOut()}>
      <Text>Sign Out</Text>
    </TouchableOpacity>

    </SafeAreaView>
  );
}
