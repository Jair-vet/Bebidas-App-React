import { Button, Col, Form, Row } from "react-bootstrap"

export const Formulario = () => {
  return (
    <>
        <Form>
            <Row>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
                        <Form.Control 
                            id="nombre"
                            type="text"
                            placeholder="Examp: Tequila, Vodka, etc.."
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label htmlFor="categoria">Selecciona Categoria</Form.Label>
                        <Form.Select
                            id="categoria"
                            name="categoria"
                        >
                            <option value="#">- Selecciona Categoia -</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    </>
  )
}
