import {Container, Content, Header, Form, Input, Item, Button, Label} from "native-base";
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Alert} from "react-native";
import {setUpFirebase} from "../Firebase";
import * as firebase from "firebase";

export default class SignUpScreen extends Component {
    constructor(props){
        super(props);
        setUpFirebase();

        this.state = ({
            email: "",
            password: "",
        })
    }

    signUpUser = (email, password) =>{
        firebase.auth().createUserWithEmailAndPassword(email,password).then((user) => {
            this.props.navigation.navigate("Login");
        }).catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                Alert.alert(
                    "Unable to Register Email",
                    "This email is already in use.",
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                      },
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                  );
              }
          
              if (error.code === 'auth/invalid-email') {
                Alert.alert(
                    "Unable to Register Email",
                    "This email is invalid.",
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                      },
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                  );
              }
        })
    }

    render() {
        return (
            <Container style = {styles.container} >
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(email) => this.setState({email})}
                        />
                    </Item>

                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(password) => this.setState({password})}
                        />
                    </Item>
                    <Button style = {styles.button}
                    full
                    primary
                    onPress={()=> this.signUpUser(this.state.email, this.state.password)}
                    >
                        <Text>Sign Up!</Text>
                    </Button>
                </Form>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
    },
    button: {
        marginTop: 10,
    },
    txtSignUp: {
        marginTop: 20,
    },
})