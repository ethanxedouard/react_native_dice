import {View, Text, ScrollView, Image, ImageBackground} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Assets } from '@react-navigation/elements'

const SignIn = () => {
    return (
        <SafeAreaView className="bg-accent-300 h-full">
                <ScrollView contentContainerClassName='h-full'>  
                    <Image source={require("../assets/icons/DiceLogo.png")} className="w-full h-3/6 my-17" resizeMode="contain" />
                    <View className='px-10'>
                        <Text className='justify-center text-6xl text-center uppercase font-pressStart2P-Regular text-primary-300 my'>Pixel</Text>
                        <Text className='justify-center text-5xl text-center uppercase font-pressStart2P-Regular text-secondary-300'>Dice</Text>
                    </View>
                </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn