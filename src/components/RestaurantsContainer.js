import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TextInput, Button, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantCard from './RestaurantCard';
import {YAWLP_API_KEY} from "@env";

const apiUrl = "https://api.yelp.com/v3/businesses/search?term=restaurant&location=Saint Louis";


export default function RestaurantsContainer() {
    const dispatch = useDispatch();
    const restaurants = useSelector(state => state.restaurants)
    const favorites = useSelector(state => state.favorites)
    console.log(favorites, 'favorites')
    
    const [searchTerm, setSearchTerm] = useState('')
    useEffect(() => {
        fetch(`${apiUrl}`, {
            headers: {
                "Authorization": `Bearer ${YAWLP_API_KEY}`
            }
        })
        .then(response => response.json())
        .then(({businesses}) => dispatch({type: 'SET_RESTAURANTS', payload: businesses}))
    }, []);

    const showRestaurants = () => restaurants.map((restaurant, i) => {
        return (
            <RestaurantCard 
                key={restaurant.id} 
                restaurant={restaurant} 
                index={i + 1}
            />
        );   
    })

    const handleSearchText = (text) => {
        setSearchTerm(text)
    }

    const handleSearch = () => {
        const updatedUrl = `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${searchTerm}`;

        fetch(`${updatedUrl}`, {
            headers: {
                "Authorization": `Bearer ${YAWLP_API_KEY}`
            }
        })
        .then(response => response.json())
        .then(({businesses}) => dispatch({type: 'SET_RESTAURANTS', payload: businesses}))
    }

    return (
        <>
            <View style={styles.searchArea}>
                <TextInput 
                    style={styles.textInputBox}
                    onChangeText={handleSearchText}
                    value={searchTerm}
                    placeholder="Enter Search Location"
                    clearButtonMode='always'
                />
                <Button 
                    onPress={handleSearch}
                    style={styles.enterButton}
                    title="Start Search"
                />
            </View>
            <ScrollView style={styles.container}>
                {showRestaurants()}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    },
    textInputBox: {
        height: 40,
        flex: 2,
        borderColor: 'gray',
        borderWidth: 1,
        marginLeft: 15,
        marginTop: 10,
        borderRadius: 6,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 10,
    },
    searchArea: {
        flexDirection: 'row',
    },
    enterButton: {
        flex: 1,
    }
});