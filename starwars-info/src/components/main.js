import {
  Button,
  InputGroup,
  InputGroupText,
  Input,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

const Main = () => {
  return (
    <div>
      <div>
        <h1>Star Wars Info</h1>
      </div>
      <InputGroup>
        <Input placeholder="Type Character Name..." />
        <InputGroupText>Search</InputGroupText>
      </InputGroup>
      <ListGroup>
        <ListGroupItem>Hey</ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default Main;
