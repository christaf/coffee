import {Pressable, StyleSheet, Text, View} from "react-native";
import {Avatar, Button, List} from "react-native-paper";
import React from "react";
import {styles} from "../Styles/styles";


const InCartItem = ({title, description}) => (
    <View>
        <List.Item
            title = {title}
            description = {description}
            left={props =>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar.Image size={64} source=
                        {{
                            uri:('https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')
                        }} />
                </View>
            }
            right={props =>
                <View>
                    <Button style={{ marginTop: 5}}
                            buttonColor={'#213769'}
                            icon="alpha-x-circle-outline"
                            mode="contained"
                            onPress={() => console.log('Deleted')}>
                        Delete Item
                    </Button>
                    <Button style={{ marginTop: 5 }}
                            dark={true}
                            buttonColor={'#213769'}
                            icon="apple"
                            mode="contained"
                            onPress={() => alert("Move to customisation")}>
                        Customize
                    </Button>
                </View>
            }
        />
    </View>
);
/*
const styles = StyleSheet.create({
    quizAttrContent:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        height: 25,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        margin: 5,
        paddingTop: 3
    },
    quizAttrLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 2
    },
    quizAttrMid:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    quizAttrRight:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 2
    },
    infoText:{
        color: '#676767',
        fontSize: 15
    },
    infoIcon:{
        color: "#676767",
        marginRight: 5
    }
});

 */

export default InCartItem;