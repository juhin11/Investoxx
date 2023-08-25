import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import axios from 'axios';
import { UserContext } from '../Provider/Auth';

const ItemCard = ({ watchlist,data,tracking }) => {
    const { user } = React.useContext(UserContext);
    const dateTimeString = data?.added_date;
    const dateString = dateTimeString.substring(0, 10);

    const handelRemove = async() => {
        const API = watchlist ? "https://investoxx-node.vercel.app/api/watchlist/deleteStock":"https://investoxx-node.vercel.app/api/portfolio/deleteStock"
        await axios
        .post(API, {
          symbol: data.symbol,
          email: user.user.email,
        })
        .then( (res) => {
            alert("Stock Removed Successfully");
            tracking();
        })
        .catch((err) => {
            console.log(err)
            alert("Something went wrong");
        });
    }

  return (
    <View style={styles.ItemCardContainer}>
        <Text>Predicted at : {dateString}</Text>
        <Text style={styles.stockName}>{data?.symbol} : {data?.name} </Text>
        {!watchlist ? <Text style={styles.pprice}>Predicted Price: ${data?.predicted_price} </Text> : <></>}
        <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.AnalyseBTN} onPress={()=>Linking.openURL("https://www.investoxx.tech/")}>
                <Text style={styles.removeBTNtxt}>Analyse</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.removeBTN} onPress={handelRemove}>
                <Text style={styles.removeBTNtxt}>Remove</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ItemCard

const styles = StyleSheet.create({
    ItemCardContainer: {
        backgroundColor: 'white',
        width: '90%',
        minHeight: 100,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 10,
    },

    stockName: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    price: {
        fontSize: 15,
        fontWeight: 'bold',
        // color: 'green',
    },

    pprice: {
        fontSize: 15,
        fontWeight: 'bold',
        // color: 'red',
    },
    optionContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },

    removeBTN: {
        backgroundColor: 'red',
        width: 100,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    AnalyseBTN: {
        backgroundColor: 'green',
        width: 100,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    removeBTNtxt: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    }


})