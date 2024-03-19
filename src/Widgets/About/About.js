import Card from "../Card/Card";
import './About.css'
import ContentField from "../ContentField/ContentField";

function About() {
    return (
        <>
            {Card('images/about.png', 'About')}
            {ContentField(Content())}
        </>
        
    )
}

function Content(){
    return (
        <div>
            {Info()};
        </div>
    )
}

function Info(left,right){
    return (
        <>
        </>
    )
}

export default About;