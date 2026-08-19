import {View, Text, StyleSheet, ImageBackground, Pressable} from "react-native";
import {Link} from "expo-router";

const natureImage = require("../../assets/images/nature.jpg")

const app = () => {
  return (
      <View style={styles.container}>
        <ImageBackground source={natureImage} resizeMode={"cover"} style={styles.image}>
          <Text style={styles.text}>Coffee Shop</Text>

          <Link href={"/about-us"} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>About Us</Text>
            </Pressable>
          </Link>

          <Link href={"/contact-us"} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Contact Us</Text>
            </Pressable>
          </Link>
        </ImageBackground>
      </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignSelf: "stretch"
  },

  button: {
    width: 120,
    height: 40,
    borderRadius: 20,
    backgroundColor: "green",
    justifyContent: "center",
    margin: 20
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  }
})