import { HStack, Text, Show, Button, Flex, Icon } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { useState } from "react";
import { FcWorkflow } from "react-icons/fc";
import React from "react";

interface Props {
  children: string;
}
const NavBar = ({ children }: Props) => {
  const [value, setValue] = useState(" ");
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <Flex pos="sticky" justifyContent="space-between">
      <HStack>
        <Icon
          boxSize="10vh"
          padding="0.5"
          mt="1em"
          ml="3em"
          onClick={handleClick}
        >
          <FcWorkflow />
        </Icon>
        <Text fontFamily="sans-serif" padding="20px" marginY="10px">
          {children}
        </Text>
      </HStack>
      <HStack justifyContent="flex-end" padding="20px" gap="20px">
        <ColorModeSwitch />
      </HStack>
    </Flex>
  );
};

export default NavBar;
