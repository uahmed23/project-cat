import React from "react"

function Cat(props) {

    return (
        <div className="theCat">
            <img src={props.pic} alt="cat"></img>
        </div>
    )

}


export default Cat