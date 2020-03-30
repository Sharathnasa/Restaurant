import React, {useState} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const ResultsDetail = (props) => {
    return <View style={styles.container}>
        <Image source={{uri: props.results.image_url}} style={styles.imageStyle}/>
        <Text style={styles.nameStyle}>{props.results.name}</Text>
        <Text style={styles.ratingStyle}>
            {props.results.rating} Stars,
            {props.results.review_count} Reviews
        </Text>
    </View>
};

const styles = StyleSheet.create({
    container:{
        marginLeft:15
    },
    imageStyle: {
        width: 250,
        borderRadius: 4,
        height: 120,
        marginTop: 10
    },
    nameStyle: {
        fontWeight: 'bold',
        marginTop: 10,

    },

    ratingStyle: {}
});

export default ResultsDetail;
