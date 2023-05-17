import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalMovie(props){

    return(
        <>
          <Modal show={props.showFlag} onHide={props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.clickedMovie.title}</Modal.Title>
                </Modal.Header>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalMovie;