import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const IdCard = () => {
    const [userId, setUserId] = useState();
    return (
        <View>
            <Text style={styles.text}>
                Hello page 2;
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        color: "red",
    },

});
export default IdCard