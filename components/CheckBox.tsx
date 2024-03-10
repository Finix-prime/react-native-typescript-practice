import Checkbox from 'expo-checkbox';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type CheckBoxProps = {
    label: string;
    value: boolean;
    onValueChange: (value: boolean) => void;
    isSubmit: boolean;

};

const CheckBoxComponent: React.FC<CheckBoxProps> = ({ label, value, onValueChange, isSubmit }) => {
    return (
        <View>
            <View style={styles.container}>
                <Checkbox
                    value={value}
                    onValueChange={onValueChange}
                    color={value ? '#4630EB' : undefined}
                />
                <Text style={styles.text}>{label}</Text>
            </View>
            {isSubmit ? value ? null : <Text style={styles.error}>Please accept term</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    text: {
        marginLeft: 5,
    },
    error: {
        color: "red"
    },
});

export default CheckBoxComponent;
