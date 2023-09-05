import { Box, Center, Text, Image } from "native-base";
import { ScrollView } from "react-native";
import { Back } from "../../../components/Back";
import { ContainerUniverses } from "../../../components/ContainerUniverses";
import { Footer } from "../../../components/Footer";
import { NavigationProps } from "../../../types/navigation";

export const Guidance = ({ navigation }: NavigationProps) => {
  return (
    <>
      <ContainerUniverses>
        <Back navigation={navigation} pag="Universe" />
        <ScrollView>
          <Box padding={4}>
            <Text color={"#8ED9EF"} fontSize="3xl" textAlign={"center"} bold>
              {"ORIENTAÇÃO SEXUAL"}
            </Text>
            <Text textAlign={"justify"}>
              Refere-se aos vínculos emocionais, afetivos e/ou sexuais que o
              indivíduo possui por pessoas do gênero oposto, semelhante ou
              ambos. Há três orientações sexuais popularmente conhecidas:
              heterossexualidade, homossexualidade e bissexualidade. Entretanto,
              existem outros termos que definem as relações entre os gêneros.
            </Text>
            <Text color={"#3FB2AF"} fontSize="xl" textAlign={"center"} bold>
              {"Vamos conhcê-las?"}
            </Text>
            <Center>
              <Image
                resizeMode={"contain"}
                size="2xl"
                source={require(`./imgs/1.png`)}
              />
            </Center>
            <Center >
              <Image
                style={{ width: 400, height: 400 }}
                resizeMode={"contain"}
                source={require(`./imgs/2.png`)}
              />
            </Center>
          </Box>
        </ScrollView>
      </ContainerUniverses>
      <Footer navigation={navigation} />
    </>
  );
};
