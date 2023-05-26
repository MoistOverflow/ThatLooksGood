import { StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Settings({theme, changeTheme, themeMode}:any){
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(themeMode);
    const [items, setItems] = useState([
        {label: 'System', value: 'auto'},
        {label: 'Light', value: 'light'},
        {label: 'Dark', value: 'dark'}
    ]);

    useEffect(() => {changeTheme(value)}, [value]);

    return (
        <View style={style(theme).container}>
            <View style={style(theme).row}>
                <Text style={style(theme).text}>Choose Theme: </Text>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={style(theme).dropdown}
                />
            </View>
        </View>
    )
}

const style = (theme:any) => {
    return StyleSheet.create({
        container: {
            width: '100%',
        },
        text: {
            color: theme.text,
            width: '40%',
            marginLeft: '20%',
            padding: 10,
        },
        dropdown: {
            backgroundColor: theme.primary,
            color: theme.text,
            width: '35%',
        },
        row: {
            flexDirection: 'row',
            width: '100%',
        },
    });
}