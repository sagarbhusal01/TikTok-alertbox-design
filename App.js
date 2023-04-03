import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function App() {
  // Variables
  const winWidth = Dimensions.get("window").width;
  const winHeight = Dimensions.get("window").height;
  const [MessageBoxTrigger, setMessageBoxTrigger] = React.useState(false);
  //
  const AlertBox = ({
    title,
    description,
    btn1,
    btn2,
    btn1Onpress,
    btn2Onpress,
  }) => {
    return (
      <View
        style={{
          zIndex: 2,
          position: "absolute",
          height: winHeight + 45,
          width: winWidth,
          top: 0,
        }}
      >
        <TouchableOpacity
          style={{
            height: winHeight + 45,
            backgroundColor: "grey",
            opacity: 0.5,
          }}
          activeOpacity={0.5}
          onPress={() => setMessageBoxTrigger(false)}
        />

        <View
          style={{
            backgroundColor: "white",
            minHeight: 150,
            width: winWidth * 0.75,
            borderRadius: 8,
            position: "absolute",
            top: winHeight * 0.434,
            left: winWidth * 0.127,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              padding: 15,
              fontSize: 17,
              fontWeight: "800",
            }}
          >
            {title}
          </Text>

          <View style={{ width: "85%", alignSelf: "center" }}>
            <Text
              style={{
                textAlign: "center",
                marginTop: 5,
                color: "grey",
                marginBottom: 20,
              }}
            >
              {description}
            </Text>
          </View>
          <View
            style={{
              height: 55,
              width: "100%",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.5}
              onPress={btn1Onpress}
            >
              <Text>{btn1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={btn2Onpress}
              activeOpacity={0.5}
              style={[styles.button, { borderLeftWidth: 0.2 }]}
            >
              <Text>{btn2}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {MessageBoxTrigger ? (
        <AlertBox
          title={"Log Out?"}
          description={"you will log out of the_gamey "}
          btn1={"cancel"}
          btn2={"Log out"}
          btn1Onpress={() => {
            setMessageBoxTrigger(false);
          }}
          btn2Onpress={() => {
            setMessageBoxTrigger(false);
          }}
        />
      ) : null}
 
      <Button
        title="Trigger message box "
        onPress={() => setMessageBoxTrigger(true)}
      />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 0.2,
    borderColor: "grey",
  },
});
