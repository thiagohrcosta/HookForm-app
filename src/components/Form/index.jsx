import { Box, Container, FormControl, FormLabel, Grid, GridItem, Input, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ErrorMessage } from "../ErrorMessage";

const schema = yup.object({
  name: yup.string().required(),
  photo: yup.string().required(),
  overall: yup.number().required(),
}).required();


export function Form() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

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
            bgColor={"#C9C5CB"}
            borderRadius={"10px"}
          >
            <FormControl
              as={"form"}
              padding={"20px"}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Text
                fontSize={"20px"}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                margin={"20px auto"}
                color={"#7261A3"}
                textAlign={"center"}
                >
                Player Form
              </Text>
              <Box
                margin={"10px auto"}
              >
                <FormLabel
                  htmlFor={"Player Name"}
                  color={"#7261A3"}
                  textTransform={"uppercase"}
                >
                  Player Name
                </FormLabel>
                <Input
                  bgColor={"#fff"}
                  {...register("name", { required: true, maxLength: 20 })}
                />
                <ErrorMessage
                  error={errors.name?.message}
                />
              </Box>
              <Box
                margin={"10px auto"}
              >
                <FormLabel
                  htmlFor={"Player Photo"}
                  color={"#7261A3"}
                  textTransform={"uppercase"}
                >
                  Player Photo
                </FormLabel>
                <Input
                  bgColor={"#fff"}
                  {...register("photo", { required: true })}
                />
                <ErrorMessage
                  error={errors.photo?.message}
                />
              </Box>
              <Box
                margin={"10px auto"}
              >
                <FormLabel
                  htmlFor={"Player Overall"}
                  color={"#7261A3"}
                  textTransform={"uppercase"}
                >
                  Player Overall
                </FormLabel>
                <Input
                  bgColor={"#fff"}
                  {...register("overall", { required: true })}
                  type={"number"}
                />
                <ErrorMessage
                  error={errors.overall?.message}
                />
              </Box>
              <Input
                type={"submit"}
                cursor={"pointer"}
                bgColor={"#7261A3"}
                color={"#fff"}
                textTransform={"uppercase"}
                fontWeight={"bold"}
                fontSize={"12px"}
                margin={"10px auto"}
                _hover={{
                  opacity: "0.8"
                }}
              />
            </FormControl>
          </Box>
        </Box>
      </Container>


    </Box>
  )
}
