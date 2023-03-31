import React from "react";
import { Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import axios from "axios";

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const todo = useQuery(
    "todo",
    async () =>
      await axios
        .get("https://jsonplaceholder.typicode.com/albums/" + `${id}`)
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
      <Text fontSize="5xl" style={{ textAlign: "center", fontWeight: "bold" }} mt={10}>
        TITLE : {todo?.data?.title}
      </Text>
    </>
  );
}
