import { Flex, Icon, Menu, MenuButton, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

interface Props {
  sizeNav: string;
  title: string;
  icon: any;
  children?: string;
}

const SideItems = ({ sizeNav, title, icon, children }: Props) => {
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={sizeNav === "sm" ? "none" : "flex"}
    >
      <Menu placement="right">
        <Link
          href={"/" + children}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "#AEC8CA" }}
        >
          <MenuButton w="100%">
            <Flex>
              <Icon as={icon} fontSize="xl" />
              <Text ml="5" display={sizeNav === "sm" ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};

export default SideItems;
