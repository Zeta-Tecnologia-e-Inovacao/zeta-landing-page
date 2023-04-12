import React from "react";
import { Navbar, Grid, Container, Text } from "@nextui-org/react";


import InfoCard from "./infoCard";


export default function App() {
 
  return (
   <Container>
        <Grid.Container gap={2}>
            <Grid xs={12} sm={4}>
                <InfoCard
                title="Iot"
                imageURL="https://littlevisuals.co/images/red_dawn.jpg"
                />
            </Grid>

            <Grid xs={12} sm={4}>
                <InfoCard
                title="Sistemas"
                imageURL="https://littlevisuals.co/images/sunset.jpg"
                />
            </Grid>

            <Grid xs={12} sm={4}>
                <InfoCard
                title="Compressor Inteligente"
                imageURL="https://littlevisuals.co/images/tail.jpg"
                />
            </Grid>

        </Grid.Container>
   </Container>     
  
  );
};
