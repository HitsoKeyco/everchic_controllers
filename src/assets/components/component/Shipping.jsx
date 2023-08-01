import React from 'react'
import '../styles/shipping.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Shipping = () => {
    return (
        <div className='cont_Shipping'>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            
            <div className="shipping_registre">
                <table>
                    <thead>
                        <tr>
                            <th className="shipping_column_heading shipping_column">Columna 1</th>
                            <th className="shipping_column_heading shipping_column">Columna 2</th>
                            <th className="shipping_column_heading shipping_column">Columna 3</th>
                            <th className="shipping_column_heading shipping_column">Columna 4</th>
                            <th className="shipping_column_heading shipping_column">Columna 5</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Aquí puedes agregar filas y datos en cada columna si es necesario */}
                        <tr>
                            <td className="shipping_column_data shipping_column">Dato 1</td>
                            <td className="shipping_column_data shipping_column">Dato 2</td>
                            <td className="shipping_column_data shipping_column">Dato 3</td>
                            <td className="shipping_column_data shipping_column">Dato 4</td>
                            <td className="shipping_column_data shipping_column">Dato 5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Shipping


