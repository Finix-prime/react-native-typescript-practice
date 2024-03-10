import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type ButtonProps = {
    onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({ onPress }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
    countContainer: {
        alignItems: 'center',
        padding: 10,
    },
});

export default Button;