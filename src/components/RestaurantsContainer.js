import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantCard from './RestaurantCard';

const apiKey = 

const apiUrl = "https://api.yelp.com/v3/businesses/search?term=restaurant&location=Saint Louis";

export default function RestaurantsContainer() {
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`${apiUrl}`, {
            headers: {
                "Authorization": `Bearer ${apiKey}`
            }
        })
        .then(response => response.json())
        .then(({businesses}) => dispatch({type: 'SET_RESTAURANTS', payload: businesses}))
    }, []);

    const restaurants = useSelector(state => state.restaurants)
    const showRestaurants = () => restaurants.map((restaurant, i) => {
        return (
            <RestaurantCard 
                key={restaurant.id} 
                restaurant={restaurant} 
                index={i + 1}
            />
        );   
    })

    return (
        <ScrollView style={styles.container}>
            {showRestaurants()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    }
});