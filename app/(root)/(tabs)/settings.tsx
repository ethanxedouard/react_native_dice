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
            <View className='items-center justify-center h-full gap-4'>
                <TouchableOpacity onPress={() => router.replace('/home')}>
                    <Text className='text-xl font-pressStart2P-Regular'>Return</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => auth.signOut()}>
                    <Text className='text-xl font-pressStart2P-Regular'>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Explore