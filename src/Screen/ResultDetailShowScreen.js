import React, {useState, useEffect} from 'react'
import {View, Image, StyleSheet, FlatList, Text} from 'react-native'
import yelp from "../api/yelp";


const ResultDetailShowScreen = ({navigation}) => {
    const id = navigation.state.params.id;

    const [images, setImages] = useState(null);

    const getImagesToShow = async (id) => {
        const response = await yelp.get(`/${id}`);
        setImages(response.data);
    };

    //it will make sure to call when UI renders for the first time or whenever values gets change. Based on the requirement
    useEffect(() => {
        getImagesToShow(id).then();
    }, []);


    if (!images) {
        return null;
    } else {
        console.log(images.photos);
    }

    return (
        <View>
            <FlatList
                data={images.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.imageStyle} source={{uri: item}}/>
                }}/>
        </View>
    )
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 200,
        height: 200,
        margin:10
    }
});

export default ResultDetailShowScreen;

