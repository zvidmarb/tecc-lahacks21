import React, {Component} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from "react-native";
import {getData} from '../Firebase';

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.email,
            restaurants: []
        };
    }
    
    componentDidMount = async () => {
        let updatedRestaurants = await getData('restaurants');
        this.setState({restaurants: updatedRestaurants});
    };

    renderItem = ({item}) => {
        return (
            <View style={styles.itemContainer}>
                <Image style={styles.itemLogo} source={item.logo ? {uri: item.logo} : undefined} />
                <Text style={styles.itemName}>{item.name}</Text>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image style={styles.headerPicture} source={require('../assets/adaptive-icon.png')} />
                    <Text style={styles.headerName}>{this.state.username}</Text>
                </View>
                <FlatList 
                    data={this.state.restaurants}
                    renderItem={this.renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainer}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20
    },
    headerPicture: {
        height: 80,
        width: 80,
        flex: 0.3
    },
    headerName: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        flex: 0.7
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20
    },
    itemLogo: {
        height: 80,
        width: 80,
        flex: 0.3
    },
    itemName: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        flex: 0.7
    }
});