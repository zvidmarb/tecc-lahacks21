import React, {Component} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class FavoritesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: []
        };
    }

    componentDidMount = async () => {
        let jsonOrder = await AsyncStorage.getItem(this.props.route.params.restaurant);
        let cachedOrder = JSON.parse(jsonOrder);
        this.setState({order: cachedOrder.favorites});
    };

    renderItem = ({item}) => {
        return (
            <View>
                <Text>{item}</Text>
            </View>
        );
    };

    render() {
        return (
            <View>
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

});