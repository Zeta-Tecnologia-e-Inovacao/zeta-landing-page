import React from "react";
import { Navbar, Grid, Container, Text } from "@nextui-org/react";

import InfoCard from "./infoCard";


export default function App() {
 
  return (
   <Container>
        <Grid.Container gap={2}>
            <Grid xs={12} sm={4}>
                <InfoCard
                label="Course"
                title="Iot"
                imageURL="https://littlevisuals.co/images/red_dawn.jpg"
                studentCount="3,500"/>
            </Grid>

            <Grid xs={12} sm={4}>
                <InfoCard
                label="Course"
                title="Sistemas"
                imageURL="https://littlevisuals.co/images/sunset.jpg"
                studentCount="4,200"/>
            </Grid>

            <Grid xs={12} sm={4}>
                <InfoCard
                label="Course"
                title="Compressor Inteligente"
                imageURL="https://littlevisuals.co/images/tail.jpg"
                studentCount="1,000"/>
            </Grid>

        </Grid.Container>
   </Container>     
  
  )
}
