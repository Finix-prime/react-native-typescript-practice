import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

type inputProps = {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    error: number;
};

const TextField: React.FC<inputProps> = ({ value, onChangeText, placeholder, error }) => {

    const errorMsg: { [key: number]: string } = {
        0: "",
        1: "This field is empty",
        2: "Mobile number is invalid",
        3: "This email is invalid",
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
            />
            {<Text style={styles.error}>{errorMsg[error]}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: "gray",
        borderRadius: 15,
        borderColor: "gray"
    },
    error: {
        color: 'red',
        marginBottom: 10,
    }
});

export default TextField;