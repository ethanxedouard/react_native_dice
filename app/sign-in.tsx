import {View, Text, ScrollView, Image, ImageBackground, TouchableOpacity, TextInput} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { auth } from '../FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { router } from 'expo-router'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            if (user) router.replace('/explore');
        } catch (error: any) {
            console.log(error)
            alert('Sign in failed: ' + error.message)
        }
    }

    const signUp = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            if (user) router.replace('/explore');
        } catch (error: any) {
            console.log(error)
            alert('Sign up failed: ' + error.message)
        }
    }
    return (
        <SafeAreaView className="bg-accent-300 h-full">
                 <KeyboardAwareScrollView contentContainerClassName='h-full mt-10'>  
                    <Image source={require("../assets/icons/DiceLogo.png")} className="w-full h-3/6 my-17" resizeMode="contain" />
                    <View className='px-10 my-10'>
                        <Text className='justify-center text-6xl text-center uppercase font-pressStart2P-Regular text-primary-300 my'>Pixel</Text>
                        <Text className='justify-center text-5xl text-center uppercase font-pressStart2P-Regular text-secondary-300'>Dice</Text>

                        <Text className='text-lg font-pressStart2P-Regular text-black-300 text-center mt-5'>Let's Play</Text>
                        <TextInput placeholder='email' value={email} onChangeText={setEmail} className='text-lg border border-solid border-primary-300 rounded-md mt-3 pb-2 pl-1 pr-1 placeholder:to-black-300'/>
                        <TextInput placeholder='password' value={password} onChangeText={setPassword} secureTextEntry className='text-lg border border-solid border-primary-300 rounded-md mt-3 pb-2 pl-1 pr-1 placeholder:to-black-300'/>

                        {/* <Text className='text-lg font-josefinSans-Medium text-black-300 text-center mt-12'>Login With Google</Text>
                        <TouchableOpacity className='bg-primary-100 border-2 border-solid border-primary-300 rounded-full w-full py-4 mt-7'>
                            <View className='flex flex-row items-center justify-center'>
                                <Image source={require("../assets/icons/GoogleLogo.png")} className='w-5 h-5' resizeMode='contain'/>
                                <Text className='text-lg font-josefinSans-Medium text-black-300 ml-2'>Continue with Google</Text>
                            </View>
                        </TouchableOpacity> */}
                    </View>
                </KeyboardAwareScrollView>  
            
        </SafeAreaView>
    )
}

export default SignIn