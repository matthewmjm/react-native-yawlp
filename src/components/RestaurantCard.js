import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default function RestaurantCard({restaurant, index}) {
    return(
        <View style={styles.container}>
            <Image style={styles.cardImage} source={{uri: restaurant.image_url}} />
            <View style={styles.infoContainer}>
                <View style={styles.rowView}>
                    <Text style={styles.name}>{index}. {restaurant.name}</Text>
                    <Text style={styles.price}>{restaurant.price}</Text>
                </View>
                <Text style={styles.rating}>Rating: {restaurant.rating}</Text>
                <Text style={styles.address}>Address: {restaurant.location.address1}</Text>
                <View style={styles.rowViewCategories} >
                    {restaurant.categories.map(category => {
                        return <Text key={category.id}>{category.title}, </Text>
                    })}
                </View>
                <TouchableOpacity title="Visit Website" style={styles.visitWebsiteButton}>
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