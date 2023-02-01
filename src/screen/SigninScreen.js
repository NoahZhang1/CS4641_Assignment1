import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../assets/Logo.png';
import CustomInput from "../components/CustomInput/CustomInput";
import CustomButton from "../components/CustomButton/CustomButton";

const SigninScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign in");
    };

    const onForgotPasswordPressed = () => {
        console.warn("forgot password");
    };

    const onSignInGoogle = () => {
        console.warn("google");
        //123124312
    };

    const onSignInApple = () => {
        console.warn("Apple");
    };

    return (
        <View style={styles.root}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />

            <CustomInput
                placeholder="Username"
                value={username}
                setValue={setUsername}
            />

            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword} 
                secureTextEntry={true} 
            />

            <CustomButton
                text="Sign In" 
                onPress={onSignInPressed}
            />


            <CustomButton 
                text="Forgot Password?"
                onPress={onForgotPasswordPressed} type="TERTIARY"
            />

            <CustomButton 
                text="Sign In with Google" 
                onPress={onSignInGoogle} 
                bgColor = "#FAE9EA"
                fgColor= "#DD4D44"
                type = "TERTIARY"
            />

            <CustomButton 
                text="Sign In with Apple" 
                onPress={onSignInApple}
                bgColor = "#e3e3e3"
                fgColor= "#363636"
                type = "TERTIARY"
            />

        </View>
    )
};

const styles = StyleSheet.create({

    root: {
        alignItems: 'center',
        padding: 40,
    },

    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },

});

export default SigninScreen;
