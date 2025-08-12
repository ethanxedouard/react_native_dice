# 🎲 Craps Dice Game (React Native + Expo)

A mobile dice game based on the classic **Craps** rules, built with **React Native**, **Expo**, and **Firebase** authentication & Firestore database.  
Players can sign up, log in, and bet **fake money** while testing their luck.

---

## ✨ Features
- **Firebase Authentication** – Sign up & sign in with email/password.
- **Firestore Integration** – Stores and updates player balance.
- **Classic Craps Rules** – Win or lose based on dice rolls.
- **Betting System** – Place bets before rolling; bet is locked until the round ends.
- **Persistent Balance** – Player’s balance is saved to Firestore.
- **Responsive UI** – Works on iOS and Android.
- **Settings Screen** – Accessed via top-right corner icon.

---

## 🕹 How to Play
1. **Sign In or Sign Up** to start.
2. **Place Your Bet** before the first roll.
3. Roll two dice:
   - **7 or 11** → Win instantly 🎉
   - **2, 3, or 12** → Lose instantly ❌
   - **4, 5, 6, 8, 9, or 10** → That number becomes your **Point**.
4. If you have a point:
   - Keep rolling until you roll your **Point** again → **Win** 🎉
   - If you roll a **7** before hitting your point → **Lose** ❌
5. Balance updates after each round.

---

## 📂 Project Structure
