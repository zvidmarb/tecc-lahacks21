import {Container, Content, Header, Form, Input, Item, Button, Label} from "native-base";
import React, {Component, useState, useEffect} from 'react';
import {View, Text, StyleSheet, Alert} from "react-native";
import {setUpFirebase} from "../Firebase";
import * as firebase from "firebase";


export default class LoginScreen extends Component {
    constructor(props){
        super(props);
        setUpFirebase();

        this.state = ({
            email: "",
            password: "",
        })
    }
    // App() {
    //     // Set an initializing state whilst Firebase connects
    //     const [initializing, setInitializing] = useState(true);
    //     const [user, setUser] = useState();
      
    //     // Handle user state changes
    //     function onAuthStateChanged(user) {
    //       setUser(user);
    //       if (initializing) setInitializing(false);
    //     }
      
    //     useEffect(() => {
    //       const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //       return subscriber; // unsubscribe on unmount
    //     }, []);
      
    //     if (initializing) return null;

    //     if (!user) {
    //         return (
    //             this.props.navigation.navigate("Login")
    //         );
    //       }
        
    //       return (
    //         this.props.navigation.navigate("Temp")
    //       );
    //     }

    loginUser = (email, password) =>{
            firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
                this.props.navigation.navigate("Temp", {username: email});
            }).catch(error => {
                Alert.alert(
                    "Incorrect Credentials",
                    "The password or email you entered was incorrect.",
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                      },
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                  );
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
                        onPress={()=> this.loginUser(this.state.email, this.state.password)}
                        >
                            <Text>Login</Text>
                        </Button>

                        <Text style = {styles.txtSignUp}>Don't have an account?</Text>
                        <Button style = {styles.button}
                        full
                        info
                        onPress={()=> this.props.navigation.navigate("SignUp")}
                        >
                            <Text>Sign Up</Text>
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
