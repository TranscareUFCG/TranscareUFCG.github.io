import { Box, Center, Container, Image } from "native-base";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Back } from "../../../components/Back";
import { Footer } from "../../../components/Footer";
import { NavigationProps } from "../../../types/navigation";

export const Path6 = ({ navigation }: NavigationProps) => {
  return (
    <>
      <Back navigation={navigation} pag="Path" />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <ImageBackground
            source={require("./imgs/hq.png")}
            resizeMode="stretch"
            style={styles.image}
          >
            <Container h={"2312px"}>
              <Box></Box>
            </Container>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
      <Footer navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    width: 400,
    height: 90,
    backgroundColor: "#DDF5FF",
  },
  image: {
    flex: 1,
    height: "2312px",
  },
});
