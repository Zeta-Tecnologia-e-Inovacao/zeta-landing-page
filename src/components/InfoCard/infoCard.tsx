import { Card, Grid, Row, Text, Col, Button } from "@nextui-org/react";
import type {NextPage} from 'next';

interface Props{
  title: string;
  label: string;
  imageURL: string;
  studentCount: string;
}

const InfoCard: NextPage<Props> = (props) => {

  const { title, label, imageURL, studentCount } = props;
  return(
    <Card>
        <Card.Header css={{position: "absolute", top: 5}}>
          <Col>
            <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
              {label}
            </Text>
            <Text h4 color="white">
              {title}
            </Text>
          </Col>
          </Card.Header>
        <Card.Image src={imageURL}></Card.Image>
        <Card.Footer isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          bottom: 0
        }}>

        <Row>
          <Col>
            <Text color="#d1d1d1" size={18}>
              {studentCount} serviços
            </Text>
          </Col>
          <Col>
           <Row justify="flex-end">
            <Button flat auto rounded color="primary">
              <Text
                css={{
                  color: "inherit"}}
                  size={12}
                  weight="bold"
                  transform="uppercase"
              >
                  Ver mais
              </Text>
            </Button>

           </Row>
          </Col>
        </Row>

        </Card.Footer>
       
    </Card>
  )
}

// export default function CardPage() {
//   const list = [
//     {
//       title: "Iot",
//       img: "/images/fruit-1.jpeg",
//       price: "$5.50",
//     },
//     {
//       title: "Compressor Inteligente",
//       img: "/images/fruit-2.jpeg",
//       price: "$3.00",
//     },
//     {
//       title: "Cherry",
//       img: "/images/fruit-3.jpeg",
//       price: "$10.00",
//     },
//     {
//       title: "Lemon",
//       img: "/images/fruit-4.jpeg",
//       price: "$5.30",
//     },
    
   
//   ];

//   return (
//     <Grid.Container gap={1} justify="flex-start">
//       {list.map((item, index) => (
//         <Grid xs={4} sm={3} key={index}>
//           <Card isPressable>
//             <Card.Body css={{ p: 0 }}>
//               <Card.Image
//                 src={"https://nextui.org" + item.img}
//                 objectFit="cover"
//                 width="100%"
//                 height={200}
//                 alt={item.title}
//               />
//             </Card.Body>
//             <Card.Footer css={{ justifyItems: "flex-start" }}>
//               <Row wrap="wrap" justify="space-between" align="center">
//                 <Text b>{item.title}</Text>
//                 <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
//                   {item.price}
//                 </Text>
//               </Row>
//             </Card.Footer>
//           </Card>
//         </Grid>
//       ))}
//     </Grid.Container>
//   );
// }

export default InfoCard;
