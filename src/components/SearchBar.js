import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons';

const SearchBar = (props) => {
    return (<View style={styles.backgroundStyle}>
            <Feather name={"search"} style={styles.iconStyle}/>
            <TextInput placeholder={"search"} style={styles.inputStyle}
                       value={props.searchTerm}
                       onChangeText={newTerm => props.onSearchTermChange(newTerm)}
                       autoCapitalize={"none"}
                       autoCorrect={false}
                // to detect end of typing or editing
                       onEndEditing={() => props.onSearchTermSubmit()}>
            </TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 15,
        flexDirection: 'row',
        marginBottom:10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }

});

export default SearchBar;
