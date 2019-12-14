import React from "react"

function Actions(props) {

    return (
        <div>
            <button className="btn" onClick={props.feed}>Feed</button>
            <button className="btn" onClick={props.pet}>Pet</button>
            {/* <button
                type="button"
                className="btn "
                data-toggle="modal"
                data-target="#petModal">Pet</button> */}
            <button className="btn" onClick={props.walk}>Walk</button>

            {/* <div class="modal fade" id="petModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">

                        <div class="modal-body">
                            <p>"meow meow"</p>
                            <p>-Cat</p>

                        </div>

                    </div>
                </div>
            </div> */}
        </div>
    )

}


export default Actions 