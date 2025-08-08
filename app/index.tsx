import {View, Text, ScrollView, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react'
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
            if (user) router.replace('/home');
        } catch (error: any) {
            console.log(error)
            alert('Sign in failed: ' + error.message)
        }
    }

    const signUp = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            if (user) router.replace('/home');
        } catch (error: any) {
            console.log(error)
            alert('Sign up failed: ' + error.message)
        }
    }
    return (
        <SafeAreaView className="bg-accent-300 h-full">
                 <KeyboardAwareScrollView contentContainerClassName='h-full mt-10'>  
                    <Image source={require("../assets/icons/DiceLogo.png")} className="w-full h-2/5 my-17" resizeMode="contain" />
                    <View className='px-10 my-7 items-center'>
                        <Text className='justify-center text-6xl text-center uppercase font-pressStart2P-Regular text-primary-300 my'>Pixel</Text>
                        <Text className='justify-center text-5xl text-center uppercase font-pressStart2P-Regular text-secondary-300'>Dice</Text>

                        <Text className='text-lg font-pressStart2P-Regular text-black-300 text-center mt-5'>Let's Play</Text>
                        <TextInput 
                        placeholder='email' 
                        value={email} 
                        onChangeText={setEmail} 
                        placeholderTextColor="#000000" 
                        className=' font-pressStart2P-Regular text-md border-4 border-solid border-primary-300 rounded-md mt-3 py-3 pl-1 pr-1 w-11/12'
                        />
                        <TextInput 
                        placeholder='password' 
                        value={password} 
                        onChangeText={setPassword} 
                        secureTextEntry 
                        placeholderTextColor="#000000" 
                        className='font-pressStart2P-Regular text-md border-4 border-solid border-primary-300 rounded-md mt-3 py-3 pl-1 pr-1 w-11/12'
                        />
                        <TouchableOpacity 
                        onPress={signIn} 
                        className='items-center w-1/2 h-10 border-3 bg-primary-300 mt-3 rounded-lg justify-center'
                        >
                            <Text className='font-pressStart2P-Regular text-sm'>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={signUp} 
                        className=' items-center w-1/2 h-10 border-3 bg-primary-300 mt-3 rounded-lg justify-center'
                        >
                            <Text className='font-pressStart2P-Regular text-sm'>Make Account</Text>
                        </TouchableOpacity>

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