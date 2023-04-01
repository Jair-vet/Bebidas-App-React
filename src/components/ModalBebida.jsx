import { Image, Modal } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

export const ModalBebida = () => {

    const { modal, handleModalClick, receta } = useBebidas()

    const mostrarIngredientes = () => {
        let  ingredientes = []
        // Cuando aparezcan valores como null en un arreglo 
        for(let i = 1; i < 16; i++){
            if( receta[`strIngredient${i}`] ){
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes
    }

    return (
        <Modal show={modal} onHide={handleModalClick}>
            <Image 
                src={receta.strDrinkThumb} 
                alt={`Imagen Receta ${receta.strDrink}`}
            />
            <Modal.Header>
                <Modal.Title>{receta.strDrink}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="p-3">
                    <h2>Instrucciones</h2>
                    {receta.strInstructions}
                    <h3>Ingredientes y Cantidades</h3>
                    {mostrarIngredientes()}
                </div>
            </Modal.Body>
        </Modal>
    )
}
