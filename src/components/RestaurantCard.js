import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function RestaurantCard({restaurant, index}) {

    const dispatch = useDispatch()

    const handleFavorite = () => {
        dispatch({ type: "ADD_FAVORITE", payload: restaurant})
    }

    return (
        <View style={styles.container}>
            <Image style={styles.cardImage} source={{uri: restaurant.image_url}} />
            <View style={styles.infoContainer}>
                <View style={styles.rowView}>
                    <Text style={styles.name}>{index}. {restaurant.name}</Text>
                    <Text style={styles.price}>{restaurant.price}</Text>
                </View>
                    <View style={styles.detailsContainer}>
                        <View style={styles.detailColumn}>
                            <Text style={styles.rating}>Rating: {restaurant.rating}</Text>
                            <Text style={styles.address}>Address: {restaurant.location.address1}</Text>
                            <View style={[styles.rowView, {justifyContent: "flex-start"}]}>
                                {restaurant.categories.map((category, index) => (
                                    <Text key={index}>{category.title}, </Text>
                                ))}
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => handleFavorite()}>
                            <Ionicons 
                                style={styles.detailColumn} 
                                name='heart' 
                                color='red' 
                                size={20} 
                            />
                        </TouchableOpacity>
                    </View>
                <TouchableOpacity 
                    title="Visit Website" 
                    style={styles.visitWebsiteButton}
                    onPress={() => Linking.openURL(restaurant.url)}
                >
                    <Text style={styles.buttonText}>Visit Website</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: 'hsl(0, 0%, 90%)',
        paddingVertical: 20,
    },
    cardImage: {
        width: '100%',
        height: 200
        ,
    },
    infoContainer: {
        marginVertical: 15,
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
    },
    price: {
        color: 'darkgreen',
        paddingRight: 5,
    },
    detailsContainer: {
        flexDirection: 'row',
    },
    detailColumn: {

    },
    rating: {
        marginVertical: 5,
    },
    address: {
        color: 'hsl(0, 0%, 45%)',
    },
    rowViewCategories: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    visitWebsiteButton: {
        backgroundColor: '#009fff',
        padding: 10,
        marginTop: 10,
        borderRadius: 6,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
    },
})