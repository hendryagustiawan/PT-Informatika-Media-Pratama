import Navbar from "../components/Navbar";
import React from "react";
import { FormControl, FormLabel, Button, Input, Container, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
import swal from "sweetalert";

export default function AddPage() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const handleRegistration = async (data) => {
    await axios
      .post("https://jsonplaceholder.typicode.com/albums", {
        title: data.title,
        userId: Number(data.userId),
      })
      .then(() => {
        router.push("/");
        swal("Success Add Data!", "You clicked the button!", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
      <Text fontSize="50px" style={{ textAlign: "center", fontWeight: "bold" }}>
        Add Todo
      </Text>
      <Container maxW="600px" mt={30}>
        <form onSubmit={handleSubmit(handleRegistration)}>
          <FormControl>
            <FormLabel>UserId</FormLabel>
            <Input type="number" mb={5} name="userId" {...register("userId")} />
            <FormLabel>Title</FormLabel>
            <Input type="text" mb={5} name="title" {...register("title")} />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}
