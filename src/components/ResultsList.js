import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import ResultsDetail from "./ResultsDetail";
import {withNavigation} from "react-navigation";

const ResultsList = (props) => {

    if(!props.results.length){
        return null;
    }

    return <View style={styles.container}>
        <Text style={styles.titleStyle}>{props.title}</Text>
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={props.results}
            keyExtractor={(result) =>
                result.id
            }
            renderItem={({item}) => {
               // console.log(item.id);
                return (
                    <TouchableOpacity onPress={() => props.navigation.navigate('ResultDetail', {
                        id: item.id
                    })}>
                        <ResultsDetail results={item}> </ResultsDetail>
                    </TouchableOpacity>
                )
            }}

        />
    </View>
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 15
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);
