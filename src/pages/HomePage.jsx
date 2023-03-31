import React from "react";
import { useQuery } from "react-query";
import { Table, Thead, Tbody, Container, Tr, Th, TableContainer, Text } from "@chakra-ui/react";
import axios from "axios";
import TableRow from "../components/TableRow";
import Navbar from "../components/Navbar";

export default function HomePage() {
  const todos = useQuery(
    "todos",
    async () =>
      await axios
        .get("https://jsonplaceholder.typicode.com/albums")
        .then(({ data }) => {
          return data;
        })
        .catch((error) => {
          console.log(error);
        })
  );

  return (
    <>
      <Navbar />
      <Container maxW="800px" mt={30}>
        <Text fontSize="50px" style={{ textAlign: "center", fontWeight: "bold" }}>
          List Data Todo
        </Text>
        <TableContainer mt={15}>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th fontSize="18px" color="tomato" style={{ textAlign: "center" }}>
                  NO
                </Th>
                <Th fontSize="18px" color="tomato" style={{ textAlign: "center" }}>
                  Title
                </Th>
                <Th fontSize="18px" color="tomato" style={{ textAlign: "center" }}>
                  Action
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {todos?.data?.map((el, index) => {
                return <TableRow key={index} todo={el} />;
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
