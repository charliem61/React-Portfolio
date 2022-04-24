import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

function PortfolioCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <CardImg alt="Card image cap" src={props.img} top />
      <CardBody>
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardText>{props.body}</CardText>
        <a href={props.href} target="_blank">
          Link to Project
        </a>
      </CardBody>
    </Card>
  );
}
export default PortfolioCard;
