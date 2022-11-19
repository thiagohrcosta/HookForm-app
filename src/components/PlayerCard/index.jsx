import { Box, Text } from "@chakra-ui/react";

export function PlayerCard({
  name,
  photo,
  overall,
}) {
  return (
    <Box>
      <Box
        // background image with rgba gradient

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
          marginTop={"200px"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          bgColor={"rgba(0, 0, 0, 0.5)"}
          width={"100%"}
          padding={"4px"}
          borderRadius={"5px"}
        >
           <Box>
            <Text
              color={"#ffffff"}
              fontSize={"18px"}
              fontWeight={"bold"}
              display={"flex"}
            >
              {name}
            </Text>
          </Box>
          <Box
            bgColor={"#2191FB"}
            borderRadius={"50%"}
            height={"45px"}
            width={"45px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"10px"}
            border={"4px solid #F0EDEE"}
          >
            <Text
              color={"#F0EDEE"}
              fontSize={"20px"}
              fontWeight={"bold"}
            >
              {overall}
            </Text>
          </Box>

        </Box>
      </Box>
    </Box>
  )
}
