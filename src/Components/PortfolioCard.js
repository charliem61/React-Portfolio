import{Card,CardImg,CardBody,CardSubtitle, CardText, CardTitle, Button} from "reactstrap"


function PortfolioCard(props){
    return(
        <Card>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/256/186"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            {props.title}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Card subtitle
          </CardSubtitle>
          <CardText>
           {props.body}
          </CardText>
          <Button>
            Button
          </Button>
        </CardBody>
      </Card>
    )
}
export default PortfolioCard