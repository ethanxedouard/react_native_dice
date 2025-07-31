import {View, Text, ScrollView, Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const SignIn = () => {
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView contentContainerClassName='h-full'>
                <Image source={require("../assets/icons/dice.png")} />
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn