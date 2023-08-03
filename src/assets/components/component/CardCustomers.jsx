import '../styles/table.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Toaster, toast } from "react-hot-toast";

const CardCustomers = ({ infoApi, getOne, customerInfo }) => {

    const handleRowClick = (id) => {
        getOne('/customers', id);
    };


    return (
        <>
            <div className="customers_card_container">
                <form className="card_customers_search" action="">
                    <input className="card_customers_input" type="text" />
                    <button className="card_customers_button">Buscar</button>
                </form>
                <div className="container_table">
                    <table>
                        <thead>
                            <tr>
                                <th>ORDEN</th>
                                <th>NOMBRES</th>
                                <th>APELLIDOS</th>
                                <th>CIUDAD</th>
                                <th>CEDULA</th>
                                <th>E-MAIL</th>
                                <th>TELEFONO</th>
                                <th>TELEFONO AD</th>
                                <th>CIUDAD</th>
                                <th>CANTON</th>
                                <th>DIRECCION</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {infoApi?.length > 0 ? (
                                infoApi.map((customers) => (
                                    <tr key={customers.id} data-id={customers.id} onClick={() => handleRowClick(customers.id)}>
                                        <CopyToClipboard text={customers.orders[0]?.num_date}>
                                            <td onClick={() => toast.success('Orden copiada')}>{customers.orders[0]?.num_date}</td>
                                        </CopyToClipboard>

                                        <CopyToClipboard text={customers.first_name}>
                                            <td onClick={() => toast.success('Nombre copiados')}>{customers.first_name}</td>
                                        </CopyToClipboard>

                                        <CopyToClipboard text={customers.last_name}>
                                            <td onClick={() => toast.success('Apellidos copiados')}>{customers.last_name}</td>
                                        </CopyToClipboard>

                                        <CopyToClipboard text={customers.city}>
                                            <td onClick={() => toast.success('Ciudad copiada')}>{customers.city}</td>
                                        </CopyToClipboard>

                                        <CopyToClipboard text={customers.dni}>
                                            <td onClick={() => toast.success('Cedula copiada')}>{customers.dni}</td>
                                        </CopyToClipboard>

                                        <CopyToClipboard text={customers.email}>
                                            <td onClick={() => toast.success('Email copiado')} className="address_cell">{customers.email}</td>
                                        </CopyToClipboard>

                                        <CopyToClipboard text={customers.phone2}>
                                        <   td onClick={() => toast.success('Telefono copiado')}>{customers.phone1}</td>
                                        </CopyToClipboard>

                                        <CopyToClipboard text={customers.phone2}>
                                            <td onClick={() => toast.success('Telefono Secundario copiado')}>{customers.phone2}</td>
                                        </CopyToClipboard>

                                        <CopyToClipboard text={customers.city}>
                                            <td onClick={() => toast.success('Ciudad copiada')}>{customers.city}</td>
                                        </CopyToClipboard>

                                        <CopyToClipboard text={customers.canton}>
                                            <td onClick={() => toast.success('Canton copiado')}>{customers.canton}</td>
                                        </CopyToClipboard>

                                        <CopyToClipboard text={customers.address}>
                                            <td onClick={() => toast.success('Direccion copiada')} className="address_cell">{customers.address}</td>
                                        </CopyToClipboard>
                                            <td>
                                                <button className='card_custommer_button_delete'>Eliminar</button>
                                                <button className='card_custommer_button_update'>Modificar</button>
                                            </td>
                                        <Toaster
                                            position="bottom-center"
                                            reverseOrder={false}
                                        />
                                    </tr>
                                ))
                            ) : null}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default CardCustomers;
