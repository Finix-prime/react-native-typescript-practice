import { NavigationProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CheckBoxComponent from '../components/CheckBox';
import Button from '../components/button';
import TextField from '../components/textInput';
import { Validate } from '../helper/validate';

type PreInfoProps = {
    thFirstname: string,
    thFirstnameError: number,
    thSurname: string,
    thSurnameError: number,
    enFirstname: string,
    enFirstnameError: number,
    enSurname: string,
    enSurnameError: number,
    mobile: string,
    mobileError: number,
    email: string,
    emailError: number,
    isCheck: boolean,
    isSubmit: boolean,
}

const PreInfo: React.FC<NavigationProps<'PreInfo'>> = ({ navigation }) => {

    const [preInfo, setPreInfo] = useState<PreInfoProps>({
        thFirstname: '',
        thFirstnameError: 0,
        thSurname: '',
        thSurnameError: 0,
        enFirstname: '',
        enFirstnameError: 0,
        enSurname: '',
        enSurnameError: 0,
        mobile: '',
        mobileError: 0,
        email: '',
        emailError: 0,
        isCheck: false,
        isSubmit: false,
    });

    const handleThFirstname = (event: string) => {
        setPreInfo(e => ({ ...e, thFirstname: event }));
    }
    const handleThSurname = (event: string) => {
        setPreInfo(e => ({ ...e, thSurname: event }));
    }
    const handleEnFirstname = (event: string) => {
        setPreInfo(e => ({ ...e, enFirstname: event }));
    }
    const handleEnSurname = (event: string) => {
        setPreInfo(e => ({ ...e, enSurname: event }));
    }
    const handleMobile = (event: string) => {
        setPreInfo(e => ({ ...e, mobile: event }));
    }
    const handleEmail = (event: string) => {
        setPreInfo(e => ({ ...e, email: event }));
    }
    const handleCheckBox = (event: boolean) => {
        setPreInfo(e => ({ ...e, isCheck: event }));
        console.log("check box: ", event);
    }

    const handleSubmit = () => {
        setPreInfo(e => ({ ...e, isSubmit: true }));
        fieldsValidation()
            ? navigation.navigate('IdCard')
            : console.log("check all failed");
    }

    const fieldsValidation = () => {
        const validThfirstname = validateThFirstname();
        const validThSurname = validateThSurname();
        const validEnFirstname = validateEnFirstname();
        const validEnSurname = validateEnSurname();
        const validMobile = validateMobile();
        const validEmail = validateEmail();

        return (
            validThfirstname &&
            validThSurname &&
            validEnFirstname &&
            validEnSurname &&
            validMobile &&
            validEmail &&
            preInfo.isCheck
        );
    }

    const validateThFirstname = () => {
        if (Validate.isEmpty(preInfo.thFirstname)) {
            setPreInfo(e => ({ ...e, thFirstnameError: 1 }));
            return false;
        }
        setPreInfo(e => ({ ...e, thFirstnameError: 0 }));
        return true;
    }

    const validateThSurname = () => {
        if (Validate.isEmpty(preInfo.thSurname)) {
            setPreInfo(e => ({ ...e, thSurnameError: 1 }));
            return false;
        }
        setPreInfo(e => ({ ...e, thSurnameError: 0 }));
        return true;
    }

    const validateEnFirstname = () => {
        if (Validate.isEmpty(preInfo.enFirstname)) {
            setPreInfo(e => ({ ...e, enFirstnameError: 1 }));
            return false;
        }
        setPreInfo(e => ({ ...e, enFirstnameError: 0 }));
        return true;
    }

    const validateEnSurname = () => {
        if (Validate.isEmpty(preInfo.enSurname)) {
            setPreInfo(e => ({ ...e, enSurnameError: 1 }));
            return false
        }
        setPreInfo(e => ({ ...e, enSurnameError: 0 }));
        return true;
    }

    const validateMobile = () => {
        if (Validate.isEmpty(preInfo.mobile)) {
            setPreInfo(e => ({ ...e, mobileError: 1 }));
            return false;
        } else if (!Validate.isNumber(preInfo.mobile)) {
            setPreInfo(e => ({ ...e, mobileError: 2 }));
            return false;
        } else {
            setPreInfo(e => ({ ...e, mobileError: 0 }));
            return true;
        }
    }

    const validateEmail = () => {
        if (Validate.isEmpty(preInfo.email)) {
            setPreInfo(e => ({ ...e, emailError: 1 }));
            return false;
        } else if (!Validate.isEmail(preInfo.email)) {
            setPreInfo(e => ({ ...e, emailError: 3 }));
            return false;
        } else {
            setPreInfo(e => ({ ...e, emailError: 0 }));
            return true;
        }
    }

    return (
        <View>
            <View style={styles.row}>
                <TextField
                    placeholder="th firstname"
                    onChangeText={e => handleThFirstname(e)}
                    value={preInfo.thFirstname}
                    error={preInfo.thFirstnameError}
                />
                <TextField
                    placeholder="th surname"
                    onChangeText={e => handleThSurname(e)}
                    value={preInfo.thSurname}
                    error={preInfo.thSurnameError}
                />
            </View>
            <View style={styles.row}>
                <TextField
                    placeholder="en firstname"
                    onChangeText={e => handleEnFirstname(e)}
                    value={preInfo.enFirstname}
                    error={preInfo.enFirstnameError}
                />
                <TextField
                    placeholder="en surname"
                    onChangeText={e => handleEnSurname(e)}
                    value={preInfo.enSurname}
                    error={preInfo.enSurnameError}
                />
            </View>
            <TextField
                placeholder="mobile"
                onChangeText={e => handleMobile(e)}
                value={preInfo.mobile}
                error={preInfo.mobileError}
            />
            <TextField
                placeholder="email"
                onChangeText={e => handleEmail(e)}
                value={preInfo.email}
                error={preInfo.emailError}
            />
            <View style={styles.checkBox}>
                <CheckBoxComponent
                    label="Agrement"
                    value={preInfo.isCheck}
                    onValueChange={(e) => handleCheckBox(e)}
                    isSubmit={preInfo.isSubmit}
                />
            </View>
            <Button onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkBox: {
        alignItems: 'center',
    }
});

export default PreInfo