import './ContentField.css';

function ContentField(content){
    return (
        <>
        <div className='field'>{content}</div>
        <div className="bold">:</div>
        </>
        
    )
}

export default ContentField;