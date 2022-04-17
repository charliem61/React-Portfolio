function Nav(props){
    function clickHandler(event){
        const page=event.target.id
        props.setRenderPage(page)
    }
    return(
        <nav>
            <ul>
                <li><a href="#" onClick={clickHandler} id="About">About</a></li>
                <li><a href="#" onClick={clickHandler} id="Portfolio">Portfolio</a></li>
                <li><a href="#" onClick={clickHandler} id="Contact">Contact</a></li>
                <li><a href="resume.pdf" target="_blank">Resume</a></li>
            </ul>
        </nav>
    )

}
export default Nav



// import img from "../assets/img"