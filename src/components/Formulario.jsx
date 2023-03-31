import { Button, Col, Form, Row } from "react-bootstrap"
import useCategorias from "../hooks/useCategorias"

export const Formulario = () => {

    const { categorias } = useCategorias()

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
                            {categorias.map(categoria => (
                                <option
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                    label={categoria.strCategory}
                                ></option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    </>
  )
}
