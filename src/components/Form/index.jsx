import { Box, Button, Container, FormControl, FormLabel, Grid, GridItem, Image, Input, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ErrorMessage } from "../ErrorMessage";
import { useEffect, useState } from "react";
import { PlayerCard } from "../PlayerCard";

const schema = yup.object({
  name: yup.string().required(),
  photo: yup.string().required(),
  overall: yup.number().required(),
}).required();


export function Form() {
  const [name, setName] = useState();
  const [photo, setPhoto] = useState();
  const [overall, setOverall] = useState();

  const [players, setPlayers] = useState([]);

  const { register, handleSubmit, onSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });


  function submit() {
    if (name && photo && overall) {
      const data = {
        name: name,
        photo: photo,
        overall: overall,
      }
      setPlayers([...players, data]);

    }
  }

  function clearData() {
    setName('');
    setPhoto('');
    setOverall('');
  }

  useEffect(() => {
    console.log(players);
  }, [players])

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
            bgColor={"#59CD90"}
            padding={"50px"}
            overflow={"auto"}
          >
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
              {players?.map((player) => {
                return (
                  <GridItem>
                    <PlayerCard
                      name={player.name}
                      photo={player.photo}
                      overall={player.overall}
                    />
                  </GridItem>
                )
              })}
            </Grid>
          </Box>
          <Box
            width={"25%"}
            bgColor={"#C9C5CB"}
            borderRadius={"10px"}
          >
            <FormControl
              as={"form"}
              padding={"20px"}
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
                  value={name}
                  bgColor={"#fff"}
                  {...register("name", { required: true, maxLength: 20 })}
                  onChange={(e) => setName(e.target.value)}
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
                  value={photo}
                  bgColor={"#fff"}
                  {...register("photo", { required: true })}
                  onChange={(e) => setPhoto(e.target.value)}
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
                  value={overall}
                  bgColor={"#fff"}
                  {...register("overall", { required: true })}
                  type={"number"}
                  onChange={(e) => setOverall(e.target.value)}
                />
                <ErrorMessage
                  error={errors.overall?.message}
                />
              </Box>
              <Button
                type={"submit"}
                cursor={"pointer"}
                bgColor={"#7261A3"}
                color={"#fff"}
                textTransform={"uppercase"}
                fontWeight={"bold"}
                fontSize={"12px"}
                margin={"10px auto"}
                width={"100%"}
                _hover={{
                  opacity: "0.8"
                }}
                onClick={handleSubmit(submit)}
              >
                ENVIAR
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
