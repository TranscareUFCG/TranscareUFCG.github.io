import { Box, HStack,Image } from "native-base";
import { TouchableOpacity } from "react-native";
import { NavigationProps } from "../../types/navigation";
import { Logo } from "../Logo";

type Props = {
  navigation: NavigationProps;
  pag: string;
};

export const Header = ({ navigation, pag }: Props) => {
  return (
    <>
      <HStack marginTop={8} space={"72"} justifyContent="space-around">
        <TouchableOpacity onPress={() => navigation.navigate(pag)}>
          <Image size="2xs" source={require(`./back.png`)}  />
        </TouchableOpacity>
        <Box>
          <Logo height={50} width={50} />
        </Box>
      </HStack>
    </>
  );
};
