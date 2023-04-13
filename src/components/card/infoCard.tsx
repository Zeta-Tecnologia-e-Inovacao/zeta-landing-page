import {
  Card, Row, Text, Col, Button,
} from '@nextui-org/react';
import type { NextPage } from 'next';
import PropTypes from 'prop-types';

interface Props {
  title: string,
  imageURL: string,
}

const InfoCard: NextPage<Props> = (props) => {
  const { title, imageURL } = props;
  return (
    <Card>
      <Card.Image
        src={imageURL}
      />
      <Card.Footer
        isBlurred
        css={{
          position: 'absolute',
          bgBlur: '#0f111466',
          bottom: 0,
        }}
      >
        <Row>
          <Col>
            <Text
              color='#d1d1d11'
              size={18}
            >
              {title}
            </Text>
          </Col>
          <Col>
            <Row
              justify='flex-end'
            >
              <Button flat auto rounded color='primary'>
                <Text
                  css={{
                    color: 'inherit',
                  }}
                  size={12}
                  weight='bold'
                  transform='uppercase'
                >
                  Ver mais
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>

      </Card.Footer>

    </Card>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
};

export default InfoCard;
