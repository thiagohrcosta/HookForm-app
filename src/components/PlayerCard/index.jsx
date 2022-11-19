import { Box, Text } from "@chakra-ui/react";

export function PlayerCard({
  name,
  photo,
  overall,
}) {
  return (
    <Box>
      <Box
        backgroundImage={`url(${photo})`}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
        height={"280px"}
        width={"200px"}
        border={"2px solid #fff"}
      >
        <Box
          bgColor={"#000"}
          borderRadius={"50%"}
          height={"50px"}
          width={"50px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text
            color={"#fff"}
          >
            {overall}
          </Text>
        </Box>
        <Text>{name}</Text>
      </Box>
    </Box>
  )
}
