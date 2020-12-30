import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

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

    return (
        <>
            <Text>This is the Restaurant Container</Text>
        </>
    )
}

const styles = StyleSheet.create({});
