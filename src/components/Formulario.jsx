import { Button, Col, Form, Row, Alert } from "react-bootstrap"
import useCategorias from "../hooks/useCategorias"
import { useState } from "react"
import useBebidas from "../hooks/useBebidas"

export const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const [alerta, setAlerta] = useState('')
    const { categorias } = useCategorias()
    const { consultarBebida } = useBebidas()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')) {
            setAlerta('Todos los Campos son Obligatorios')
            setTimeout(() => {
                setAlerta('')
            },3000)
            return
        }
        setAlerta('')
        consultarBebida(busqueda)

    }

  return (
    <>
        <Form
            onSubmit={handleSubmit}
        >
            { alerta && <Alert variant="danger" className="text-center">{alerta}</Alert> }
            <Row>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
                        <Form.Control 
                            id="nombre"
                            type="text"
                            placeholder="Examp: Tequila, Vodka, etc.."
                            name="nombre"
                            value={busqueda.nombre}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label htmlFor="categoria">Selecciona Categoria</Form.Label>
                        <Form.Select
                            id="categoria"
                            name="categoria"
                            value={busqueda.categoria}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name] : e.target.value
                            })}
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

            <Row className="justify-content-center mt-3">
                <Col md={5}>
                    <Button
                        variant="danger"
                        className='text-uppercase w-100'
                        type="submit"
                    >
                        Buscar Bebidas
                    </Button>
                </Col>
            </Row>
        </Form>
    </>
  )
}
