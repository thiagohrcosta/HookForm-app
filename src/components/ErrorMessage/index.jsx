import { Text } from "@chakra-ui/react";

export function ErrorMessage(props) {
  return (
    <Text
      color={"#FF331F"}
      fontSize={"12px"}
      fontWeight={"bold"}
      textTransform={"uppercase"}
      margin={"10px auto"}
    >
      {props.error ? props.error : null}
    </Text>
  )
}
