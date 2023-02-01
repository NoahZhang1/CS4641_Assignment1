import React, { useState } from "react";
import { Alert, View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../assets/Logo.png';
import CustomInput from "../components/CustomInput/CustomInput";
import CustomButton from "../components/CustomButton/CustomButton";
import { useForm, Controller } from 'react-hook-form';
import { Auth } from "aws-amplify";

const SigninScreen = () => {

    const [loading, setLoading] = useState(false);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { height } = useWindowDimensions();

    const onSignInPressed = async data => {

        console.log(data.username)
        if (loading) {
            return;
        }

        setLoading(true);
        try {
            const response = await Auth.signIn(data.username, data.password);
            console.log(response);
        } catch (e) {
            Alert.alert('Oops', e.message);
        }
        setLoading(false);

        Alert.alert("login successful")

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

    const onSignUpPress = () => {
        console.warn("signup");
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode="contain"
                />

                <CustomInput
                    name="username"
                    placeholder="Username"
                    control={control}
                    rules={{ required: 'Username is required' }}
                />

                <CustomInput
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    control={control}
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 3,
                            message: 'Password should be minimum 3 characters long',
                        },
                    }}
                />

                <CustomButton
                    text={loading ? 'Loading...' : 'Sign In'}
                    onPress={handleSubmit(onSignInPressed)}
                />


                <CustomButton
                    text="Forgot Password?"
                    onPress={onForgotPasswordPressed} type="TERTIARY"
                />

                <CustomButton
                    text="Sign In with Google"
                    onPress={onSignInGoogle}
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                    type="TERTIARY"
                />

                <CustomButton
                    text="Sign In with Apple"
                    onPress={onSignInApple}
                    bgColor="#e3e3e3"
                    fgColor="#363636"
                    type="TERTIARY"
                />

                <CustomButton
                    text="Don't have an account?"
                    onPress={onSignUpPress}
                    type="TERTIARY"
                />

            </View>
        </ScrollView>
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