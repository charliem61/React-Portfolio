import {Card,CardImg} from "reactstrap"
import profilePicture from "../assets/profileImg.jpg"


function About(){
    return (
        <div className="flex-div">
            <Card style={{width:"55rem"}}>
    <CardImg
      alt="Card image cap"
      src={profilePicture}
      top
      width="40rem"
    />
    </Card>
            <p>
            I am a former EMT and currently a Title Examiner for Fidelity National
            Financial. I'm also a student at the UW for Full Stack Web
            Development. My goal is to someday work in AI, or in
            blockchain technology, Cybersecurity. However, I would be just as happy working for a church creating their
            apps or an intricate webpage for the congregation to use in scheduling
            volunteers, child care, services, conferences and worship team
            schedules.
            </p>
        </div>
    )
}
export default About