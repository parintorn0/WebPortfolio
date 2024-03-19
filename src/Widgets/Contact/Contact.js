import Card from "../Card/Card";
import ContentField from "../ContentField/ContentField";
import './Contact.css'

function Contact() {
    return (
        <>
            {Card('images/contact.png', 'Contact')}
            {ContentField(Content())}
        </>
    )
}

function Content() {
    return (
        <div>
            {Mail('Main', 'thammasitboonpt','gmail')}
            {Mail('Reserve', 'thammasitboonpt','hotmail')}
        </div>
    )
}

function Mail(type, email, mailtype) {
    return (
        <div className="content-block">
            <div className="block">
                <div className="bold mail">{type} Email</div>
                <div className="bold mail">:</div>
            </div>
                <a className="mail normal" href={"mailto:"+email+"@"+mailtype+".com"}>{email}{' '}{mailtype}{' '}{'com'}</a>
        </div>

    )
}

export default Contact;