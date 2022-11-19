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
        backgroundRepeat={"no-repeat"}
        width={"100%"}
        height={"280px"}
        border={"4px solid #fff"}
        padding={"10px"}
        boxShadow={"0 0 10px #000"}
      >
        <Box
          bgColor={"#000"}
          borderRadius={"50%"}
          height={"50px"}
          width={"50px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={"10px"}
          float={"right"}
        >
          <Text
            color={"#fff"}
          >
            {overall}
          </Text>
        </Box>
        <Box>
          <Text
            color={"#fff"}
            fontSize={"20px"}
            fontWeight={"bold"}
            display={"flex"}
          >
            {name}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
