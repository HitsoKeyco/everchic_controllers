import '../styles/Order.css';
import { useForm } from 'react-hook-form';

const Order = ({ getApi, autenticOrder, dataOrder }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    

    const onSubmit = (data) => {
        autenticOrder('/orders', data);

    };

    return (
        <div className="order_container">
            <form className="order_form" onSubmit={handleSubmit(onSubmit)}>
                <img className="logo_order" src="log.svg" alt="" />
                <label className="order_label" htmlFor="num_date">Ingrese su número de orden.! </label>
                <input className="order_input" type="text"{...register('num_date', { required: true })} />
                {errors.num_date && <span>Este campo es requerido</span>}
                <div className="order_button_container">
                    <button className="order_button" type="submit">Acceder</button>
                </div>
            </form>
        </div>
    );
};

export default Order;
