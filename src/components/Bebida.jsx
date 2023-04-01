import { Card, Col, Button } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

export const Bebida = ({bebida}) => {

    const { handleModalClick } = useBebidas()

    return (
        <Col md={6} lg={3}>
            <Card className="mb-4">
                <Card.Img 
                    variant='top'
                    src={bebida.strDrinkThumb}
                    alt={`Imagen de ${bebida.strDrink}`}
                />

                <Card.Body
                    size="lg"
                >
                    <Card.Title>{bebida.strDrink}</Card.Title>

                    <Button
                        animation={"wave"}
                        variant={"warning"}
                        className="w-100 text-uppercase mt-2"
                        onClick={ () => {
                            handleModalClick()
                        }}
                    >
                        Ver Receta
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
