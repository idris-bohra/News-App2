import React , {useState} from 'react'

export default function TextForm(props) {

    function onhand(event)
    {
        console.log("this is onhand");

        settexthere(event.target.value);

    }

    let previewstyle = {
        "border" : `${props.border} solid 1px`,
        "borderRadius" : "20px"
    }

    function fun()
    {
        let be2=texthere.split(' ').filter((element)=>{return element.length!=0}).length;

        if(be2 !== 0)
        {
            let newtext = texthere.toUpperCase();

            settexthere(newtext);

            props.sentalert("Text has been updated to Uppercase", "Success! ");
        }
        else
        {
            alert("text is empty");
        }
        
        
    }


    const[texthere , settexthere] = useState("");
    

    

    let co = document.getElementById("exampleFormControlTextarea1");

    function copying()
    {
        let be=texthere.split(' ').filter((element)=>{return element.length!=0}).length;
        if(be !== 0)
        {
            console.log("copying")

            co.select();
            document.execCommand("Copy");

            props.sentalert("Text has been copied" , "Success! ");
        }
        else
        {
            alert("text is empty");
        }
        
    }

  

    return (

        <div className='my-5'>
            <div className="mb-3">
                <h3>Enter the text here</h3>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={texthere} rows="8" onChange={onhand}></textarea>
            
                <button   type="button" className="btn btn-primary my-2" onClick={fun}>Update to Uppercase</button>
                <button onClick={copying} className='btn btn-primary mx-2 my-2'>Copy</button>

                
                <div className="container">
                    <h2>Your text summary</h2>
                    <p>{texthere.length} characters and {texthere.split(' ').filter((element)=>{return element.length!=0}).length} words</p>
                    
                </div>

                <div className="container" style = {previewstyle}>
                    <h2>Preview</h2>                   
                    <p>{texthere.length > 0 ? texthere : <b>---------------------------------------------------------------------------------Nothing to preview!------------------------------------------------------------------------------------------</b> }</p>
                </div>

            </div>
        </div>
    )
}