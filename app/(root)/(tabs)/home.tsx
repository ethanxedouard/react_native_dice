import { getAuth } from '@firebase/auth';
import { Link, router } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Image, Alert, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { db } from '../../../FirebaseConfig';
import { collection, addDoc,getDocs, updateDoc, deleteDoc, query, where, onSnapshot, doc, increment } from 'firebase/firestore';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const diceImages: { [key: number]: any } = {
  1: require('../../../assets/dice/dice1.png'),
  2: require('../../../assets/dice/dice2.png'),
  3: require('../../../assets/dice/dice3.png'),
  4: require('../../../assets/dice/dice4.png'),
  5: require('../../../assets/dice/dice5.png'),
  6: require('../../../assets/dice/dice6.png'),
};

export default function Index() {
  const insets = useSafeAreaInsets();
  const [balance, setBalance] = useState<number>(0);
  const [dice, setDice] = useState<[number, number]>([1, 1]);
  const [bet, setBet] = useState<number>(10);
  const [point, setPoint] = useState<number | null>(null);
  const [roundActive, setRoundActive] = useState<boolean>(false);
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const uid = auth.currentUser?.uid;
    if (!uid) return;

    const unsub = onSnapshot(doc(db, "users", uid), (docSnap) => {
      if (docSnap.exists()) {
        setBalance(docSnap.data().balance);
      }
    });

    return unsub;
  }, []);

  const rollDice = async () => {
    if (bet > balance) return Alert.alert("Not enough balance");
    setRoundActive(true);

    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    setDice([die1, die2]);

    const total = die1 + die2;
    const auth = getAuth();
    const uid = auth.currentUser?.uid;
    if (!uid) return;
    const userRef = doc(db, 'users', uid);

    if (point === null) {
      if (total === 7 || total === 11) {
        await updateDoc(userRef, { balance: increment(bet) });
        setResultMessage("🎉 You Win!");
        setRoundActive(false);
      } else if ([2, 3, 12].includes(total)) {
        await updateDoc(userRef, { balance: increment(-bet) });
        setResultMessage("💀 You Lose!");
        setRoundActive(false);
      } else {
        setPoint(total);
        setResultMessage(`Point set to ${total}. Roll again!`);
      }
    } else {
      if (total === point) {
        await updateDoc(userRef, { balance: increment(bet) });
        setResultMessage("🎉 You Win!");
        setPoint(null);
        setRoundActive(false);
      } else if (total === 7) {
        await updateDoc(userRef, { balance: increment(-bet) });
        setResultMessage("💀 You Lose!");
        setPoint(null);
        setRoundActive(false);
      } else {
        setResultMessage(`Rolling... Need ${point} to win`);
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="bg-accent-300 h-full">
        
        <TouchableOpacity 
          onPress={() => router.replace('/settings')} 
          style={{ position: 'absolute', top: insets.top + 10, right: 20, zIndex: 10 }}
        >
          <Image source={require('../../../assets/icons/setting.png')} className="w-8 h-8" />
        </TouchableOpacity>

        <KeyboardAwareScrollView contentContainerClassName='h-full mt-10'>

        <Text className="text-xl text-center uppercase font-pressStart2P-Regular text-primary-300 mt-7">
          Test Your Luck
        </Text>

        <Text className="text-md text-center font-pressStart2P-Regular text-primary-300 mt-20">
          Balance: ${balance}
        </Text>

        <View className="flex-row justify-center mt-20 gap-8">
          <Image source={diceImages[dice[0]]} className="w-40 h-40" />
          <Image source={diceImages[dice[1]]} className="w-40 h-40" />
        </View>

        {resultMessage && (
          <Text className="text-center mt-4 text-white font-bold">
            {resultMessage}
          </Text>
        )}


        <View className="absolute bottom-10 left-0 right-0 flex-column justify-center space-x-4 mb-40 items-center gap-7">
          <TextInput
            className="bg-white px-4 py-2 rounded text-center w-4/5 h-12 font-pressStart2P-Regular"
            keyboardType="numeric"
            value={bet.toString()}
            editable={!roundActive}
            onChangeText={(text) => setBet(Number(text))}
          />
          <TouchableOpacity
            className="bg-primary-300 px-6 py-2 rounded w-4/5 h-2/4 font-pressStart2P-Regular"
            onPress={rollDice}
          >
            <Text className="text-black font-bold text-center">ROLL</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  </TouchableWithoutFeedback>
  );
}