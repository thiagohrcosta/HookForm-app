import { Box, Container, FormControl, FormLabel, Grid, GridItem, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Box
      bgColor={"#2D2D2A"}
      height={"100vh"}
    >
      <Container
        maxW={"container.xl"}
      >
        <Box
          display={"flex"}
          height={"80vh"}
          paddingTop={"150px"}
          gap={"50px"}
        >
          <Box
            width={"75%"}
            bgColor={"#2d2"}
          >

          </Box>
          <Box
            width={"25%"}
            bgColor={"#7261A3"}
            borderRadius={"10px"}
          >
            <FormControl
              as={"form"}
              padding={"20px"}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Box
                margin={"10px auto"}
              >
                <FormLabel
                  htmlFor={"Player Name"}
                  color={"white"}
                  textTransform={"uppercase"}
                >
                  Player Name
                </FormLabel>
                <Input
                  bgColor={"#fff"}
                  {...register("name", { required: true, maxLength: 20 })}
                />
              </Box>
              <Box
                margin={"10px auto"}
              >
                <FormLabel
                  htmlFor={"Player Photo"}
                  color={"white"}
                  textTransform={"uppercase"}
                >
                  Player Photo
                </FormLabel>
                <Input
                  bgColor={"#fff"}
                  {...register("photo", { required: true })}
                />
              </Box>
              <Input
                type={"submit"}
              />
            </FormControl>
          </Box>
        </Box>
      </Container>


    </Box>
  )
}
