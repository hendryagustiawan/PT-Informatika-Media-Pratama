import React from "react";
import { Flex, Spacer, Box, Button, Heading, ButtonGroup } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <Flex minWidth="max-content" alignItems="center" gap="2" bg="teal.500" p={5}>
        <Box p="2" ml={45}>
          <Link href={"/"}>
            <Heading size="md" color="white">
              Todo App
            </Heading>
          </Link>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Link href={"/AddPage"}>
            <Button colorScheme="yellow" color="white" mr={55}>
              Add Todo
            </Button>
          </Link>
        </ButtonGroup>
      </Flex>
    </div>
  );
}
