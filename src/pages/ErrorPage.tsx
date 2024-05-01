import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding="5">
        <Heading>Ooops...</Heading>
        <Text>You`ve got yourself an error!</Text>
        <p>{isRouteErrorResponse(error) ? "Ivnvalid page" : "Unexpected error"}</p>
      </Box>
    </>
  );
};

export default ErrorPage;

