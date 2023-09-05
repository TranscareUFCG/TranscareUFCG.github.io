import {
  Box,
  HStack,
  Image,
  ScrollView
} from "native-base";
import { useEffect } from "react";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Footer } from "../../components/Footer";
import { MenuHeader } from "../../components/MenuHeader";
import { Database } from "../../database/Database";
import { NavigationProps } from "../../types/navigation";

export const Home = ({ navigation }: NavigationProps) => {
  useEffect(() => {
    (async () => {
      const database = new Database();
      const quiz1 = await database.getItem("@quiz1");
      const name = await database.getItem("@name");
      const email = await database.getItem("@email");
      if (!quiz1) {
        console.log(quiz1);
        navigation.navigate("Quiz", {
          name: name,
          email: email,
          isQuiz2: false,
          isLogin: true,
        });
      }
    })();
  }, []);
  return (
    <>
      <MenuHeader navigation={navigation} />
      <ImageBackground
        source={require("./imgs/Group.png")}
        style={styles.image}
      >
        <ScrollView _web={{

        }}>
          <Box marginTop={"56"}>
            <HStack justifyContent={"flex-end"} p={1}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Universe")}
                activeOpacity={0.9}
              >
                <Image
                  source={require(`./imgs/balao.png`)}
                  alt="Alternate Text"
                  size="2xl"
                />
              </TouchableOpacity>
            </HStack>
            <Image
              source={require(`./imgs/isa.png`)}
              alt="Alternate Text"
              size="2xl"
            />
          </Box>
        </ScrollView>
      </ImageBackground>
      <Footer navigation={navigation} />

      {/* <HStack justifyContent={"flex-end"}> */}

      {/* </HStack> */}
      {/* <Image source={require(`./imgs/isa.png`)} /> */}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    position: "relative"
  },
  container: {
    paddingTop: StatusBar.currentHeight,
  },
});
