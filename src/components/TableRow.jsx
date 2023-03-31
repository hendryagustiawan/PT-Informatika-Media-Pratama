import React from "react";
import { Tr, Td, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header({ todo }) {
  const router = useRouter();
  const handleEdit = () => {
    router.push({
      pathname: "/EditPage",
      query: { id: todo.id, title: todo.title, userId: todo.userId },
    });
  };

  return (
    <Tr>
      <Td style={{ textAlign: "center" }} fontSize="15px">
        {todo.id}
      </Td>
      <Td style={{ textAlign: "center" }} fontSize="15px">
        {todo.title}
      </Td>
      <Td style={{ textAlign: "center" }}>
        <Button colorScheme="green" mr={5} type="button" onClick={handleEdit}>
          Edit
        </Button>
        <Link href={{ pathname: "/DetailPage", query: { id: todo.id } }}>
          <Button colorScheme="blue">Detail</Button>
        </Link>
      </Td>
    </Tr>
  );
}
