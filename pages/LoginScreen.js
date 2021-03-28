import {Container, Content, Header, Form, Input, Item, Button, Label, Root } from "native-base";
import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";
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
    
    signUpUser = (email, password) =>{
        try {
            firebase.auth().createUserWithEmailAndPassword(email,password)
        } catch (error) {
            console.log(error.toString());
        }
    }
    loginUser = (email, password) =>{
        try {
            firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
                console.log(user.toString())
            })
        } catch (error) {
            console.log(error.toString());
        }
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
                        onPress={()=> this.signUpUser(this.state.email, this.state.password)}
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
