import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function GameSelector({sendResults}) {

    return(
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div style={{Color:"black"}}>
                    Please select a source
                    <select>
                        <option value={"fearless"}>Fearless</option>
                        <option value={"presidents"}>Presidents</option>
                    </select>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={() => sendResults({source:"fearlesss"})}>Start</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}