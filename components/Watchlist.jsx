import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import ItemCard from "./ItemCard";
import { UserContext } from "../Provider/Auth";
import axios from "axios";
import Empty from "./Empty";

const Watchlist = () => {


  const { user } = React.useContext(UserContext);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [childTracker, setChildTraker] = React.useState(true)

  const tracking = ()=>{
    setChildTraker(!childTracker);
  }

  React.useEffect(()=>{
    getData();
  }, [childTracker])

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get(
        `https://investoxx-node.vercel.app/api/watchlist/getWatchlist/${user.user.email}`
      )
      .then((res) => {
        const data = res.data.result;
        setData(data);
        // console.log(data)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <>
      {loading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Loading</Text>
        </View>
      ) : (
        <View>
          {data.length === 0 ? (
            <Empty />
          ) : (
            <View style={styles.ProfolioContainer}>
              <Text style={styles.userHeading}>
                {user.user.name}'s Watchlist
              </Text>
              <ScrollView style={{ marginBottom:50  }}>
                {data?.map((item, index) => {
                  return <ItemCard tracking={tracking} key={index} watchlist={true} data={item} />;
                })}
              </ScrollView>
            </View>
          )}
        </View>
      )}
    </>
  );
};

export default Watchlist;

const styles = StyleSheet.create({
  ProfolioContainer: {
    padding: 10,
  },
  userHeading: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
