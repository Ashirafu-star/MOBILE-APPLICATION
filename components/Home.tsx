import React from "react";
import { Text, Image, TextInput, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "rgb(215, 229, 241)",
      }}
    >
        
      <Text style={styles.form}>CREATE ACCOUNT</Text>

      <Image
        source={require('../assets/profile.png')}
        style={{ height: 150, width: 150, borderRadius: 75 }}
      />
      <Text style={{ fontWeight: "bold", fontStyle: "italic", fontSize: 30 }}>
        SignUp
      </Text>
     
      <Text>FirstName</Text>
      <TextInput
        style={styles.textinputo}
        placeholder="Enter your first name"
      />
      <Text>LastName</Text>
      <TextInput style={styles.textinputo} placeholder="Enter your Last name" />
      <Text>Gender</Text>
      <TextInput style={styles.textinputo} placeholder="Enter your gender" />
      <Text>Contact</Text>
      <TextInput
        style={styles.textinputo}
        placeholder="Enter your Mobile Contact"
        keyboardType="phone-pad"
      />
      <Text>Email</Text>
      <TextInput
        style={styles.textinputo}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Text>Password</Text>
      <TextInput
        style={styles.textinputo}
        placeholder="Enter your Password"
        secureTextEntry={true}
      />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textinputo: {
    height: 40,
    width: 320,
    borderWidth: 3,
    borderRadius: 5,
    padding: 10,
    paddingTop: 1,
  },
  form: {
    fontStyle: "italic",
    fontSize: 30,
    textAlign: "center",
    color: "rgb(71, 16, 236)",
    fontWeight: "bold",
  },
  keyboardView:{
    flex:1,
  }
});

export default HomeScreen;
