import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';

function Owner(props) {
  return (
    <Card className="m-2 h-100" style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ width: '286px', height: '180px', objectFit: 'cover' }} className="" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">Show Boardings</Button>
      </Card.Body>
    </Card>
  );
}

export default Owner;