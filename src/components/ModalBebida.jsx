import { Modal } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

export const ModalBebida = () => {

    const { modal, handleModalClick } = useBebidas()

    return (
        <Modal show={modal} onHide={handleModalClick}>
            <Modal.Body>
                Cuerpo del Modal
            </Modal.Body>
        </Modal>
    )
}