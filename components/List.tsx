import React from "react";
import { View, Text, FlatList,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  { id: 1, title: "Land" },
  {
    id: 2,
    title: "Car",
  },
  {
    id: 3,
    title: "House",
  },
  {
    id: 4,
    title: "MotorCyle",
  },
  {
    id: 5,
    title: "Iphone 17 pro max",
  },
  {
    id: 6,
    title: "Airtel Wifi",
  },
  {
    id: 7,
    title: "external Drive",
  },
  {
    id: 8,
    title: "Ethernet Cable",
  },
  {
    id: 9,
    title: "Feature Phone",
  },
  {
    id: 10,
    title: "Back Pack",
  },
];
type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ListScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor ={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default ListScreen;
