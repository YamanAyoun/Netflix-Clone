import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function FavList(props){
    
    console.log('current movie', props.clickedMovie)
    const updateMovie = async (e) =>{
        e.preventDefault();

        const obj = {
            id : e.target.id.value,
            title : e.target.title.value,
            release_date : e.target.release_date.value,
        }
        console.log(obj)

        const serverURL = `${process.env.REACT_APP_serverURL}/updateFavMovie/${props.clickedMovie.id}`;
        const result = await axios.put(serverURL,obj);
        console.log('done',result.data)


        props.closeUpdateModal();

        props.takeNewDataFromUpdatedModal(result.data)
    }

    return(
        <>
           <Modal show={props.updateFlag} onHide={props.closeUpdateModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={updateMovie}>
                        <Form.Group className="mb-3">
                            <Form.Label>ID</Form.Label>
                            <Form.Control name="id" type="text" defaultValue={props.clickedMovie.id}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>title</Form.Label>
                            <Form.Control name="title" type="text" defaultValue={props.clickedMovie.title}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>release date</Form.Label>
                            <Form.Control name="release_date" type="text" defaultValue={props.clickedMovie.release_date}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeUpdateModal}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default FavList;