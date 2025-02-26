import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync(); 

class SplashScreenComponent extends Component<{ onFinish: () => void }> {
  componentDidMount() {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
      this.props.onFinish(); 
    }, 4000); 
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../assets/images/Electoral.png")} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff", 
  },
  image: {
    width: 800, 
    height: 800,
    resizeMode: "contain",
  },
});

export default SplashScreenComponent;
