import PortfolioCard from "../Components/PortfolioCard";
import spillTheTea from "../assets/spillTheTea.png";
import bitPage from "../assets/bitPage.png";
import socialApp from "../assets/socialApp.webp";
import { Container, Row } from "reactstrap";

function Portfolio() {
  return (
    <Container>
      <Row className="mx-auto">
        <PortfolioCard
          title="BitPage"
          body="When the user logs onto our site, 9 different crypto currencies will be displayed for the user to choose from.Each different crypto currency will have its own data displayed once the user clicks on that card desired. Each card will display recent price changes, current price, price an hour ago, a day ago, and a week ago.If user wants to save their favorite coins to a list, they can hit a button to favorite their coins desired. 9 individual crypto coins have been applied to the page using a free web api. With this api we have displayed current market price for Bitcoin, Ethereum, Binance Coin, Tether, Solana, Usd-Coin, Ripple, Cardano, Terra-Luna. Along with the hourly, daily, and weekly price changes.The user also has the ability to favorite their top favorite coins to save to local storage.Each coin has live market data displayed to the module along with the coins image and title. The favorite feature also makes the page have the ability to personalize the users own preferances."
          href="https://charliem61.github.io/bitPage/"
          img={bitPage}
        />
        <PortfolioCard
          title="TutorTea"
          body="When a user of the school or Tech program that is so fortunate to sign a worthy negotiable contract with the creators of Tutor Tea, the student will have the ability/access to a database of reviews of tutors provided by students for students benefit, but provided login access by the school or program included in the students paid tuition with that program.The student will login into Tutor Tea, their user info will be stored for future login easy access, and they can review the tutor of their choice with the stored prior reviews on that new tutor they may choose. The student can also leave a review on their current tutor, good or bad. This will be logged if they choose for a future student to see and decide to take or choose another tutor based on that review. 
        
        That review will include, times available, based on Daytime, Nights, and Weekends.
        
        A review written by the prior or current student. 
        
        And lastly, but the thing most care about, the 1-5 rating."
          href="https://tutor-tea.herokuapp.com/"
          img={spillTheTea}
        />
        <PortfolioCard
          title="Social Network API- FindFace"
          body="For the user I have created an application using MongoDB that will help me learn to structure an API with POST, PUT, and DELETE routes within Insomnia. This will in turn allow me to create, update, and delete users thoughts in the database.With my code I am able to create users and thoughts. Delete users and thoughts, as well as update users and thoughts all using post, put, and delete routes within insomnia."
          href="https://github.com/charliem61/FindFace"
          img={socialApp}
        />
      </Row>
    </Container>
  );
}
export default Portfolio;
