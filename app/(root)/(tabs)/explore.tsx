import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { auth } from '@/FirebaseConfig'
import { getAuth } from '@firebase/auth'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'


const Explore = () => {
    getAuth().onAuthStateChanged((user) => {
        if (!user) router.replace('/');
    });

    return (
        <SafeAreaView className="bg-accent-300 h-full">
            <Text>Sign Out</Text>
            <TouchableOpacity onPress={() => auth.signOut()}>
                <Text>Sign Out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Explore