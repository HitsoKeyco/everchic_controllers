
import '../styles/Formulario.css'; 
import { useForm } from 'react-hook-form';
import '../js/script.js'
import servientrega from '../img/svg/logo_servientrega.svg';




const FormularioDatosEnvio = ( {createRegister, dataOrder} ) => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    
    const submit = (data) => {
        createRegister('/customers',data, dataOrder);
        
        reset({
            first_name: '',
            last_name: '',
            phone1: '',
            phone2: '',
            email: '',
            dni: '',
            city: '',
            canton: '',
            address: '',
            observation: '',
            
        })


    };

    return (
        <div className="formulario-container">
            <div className="aviso">
                <p className='text_aviso'>Te informamos que EverChic pronto tendrá su pagina web para brindarles un mejor servicio!...  Gracias por su confianza!! 👷‍♂️ 🧡</p>
            </div>
            <div className="logo">
                <img className="logo_img" src={servientrega} alt="" />
                <h2>Everchic</h2>
            </div>

            <h3>Datos para envios:</h3>

            <form className="form_data" onSubmit={handleSubmit(submit)}>
                <div className='data_seccion'>                    
                    <label className="label_form" htmlFor="nombre">Nombres: </label>
                    <input type="text" {...register('first_name', { required: true })} />
                    {errors.nombres && <span>Este campo es requerido</span>}
                </div>
                <div className='data_seccion'>
                    <label className="label_form" htmlFor="apellidos">Apellidos: </label>
                    <input type="text" {...register('last_name', { required: true })} />
                    {errors.apellidos && <span>Este campo es requerido</span>}
                </div>
                <div className='data_seccion'>
                    <label className="label_form" htmlFor="email">Celular N°1: </label>
                    <input type="text" {...register('phone1', { required: true })} />
                    {errors.celular_1 && <span>Este campo es requerido</span>}
                </div>
                <div className='data_seccion'>
                    <label className="label_form" htmlFor="email">Celular N°2: </label>
                    <input type="text" {...register('phone2', { required: false })} />
                </div>
                <div className='data_seccion'>
                    <label className="label_form" htmlFor="email">Email: </label>
                    <input type="text" {...register('email', { required: true })} />
                    {errors.email && <span>Este campo es requerido</span>}
                </div>
                <div className='data_seccion'>
                    <label className="label_form" htmlFor="cedula">Cédula: </label>
                    <input type="text" {...register('dni', { required: true })} />
                    {errors.cedula && <span>Este campo es requerido</span>}
                </div>
                <div className='data_seccion'>
                    <label className="label_form" htmlFor="Ciudad">Ciudad: </label>
                    <input type="text" {...register('city', { required: true })} />
                    {errors.ciudad && <span>Este campo es requerido</span>}
                </div>
                <div className='data_seccion'>
                    <label className="label_form" htmlFor="Canton">Cantón: </label>
                    <input type="text" {...register('canton', { required: true })} />
                    {errors.canton && <span>Este campo es requerido</span>}
                </div>
                <div className='data_seccion'>
                    <label className="label_form" htmlFor="celular">Dirección: </label>
                    <textarea type="text" {...register('address', { required: true })} />
                    {errors.direccion && <span>Este campo es requerido</span>}
                </div>
                <div className='data_seccion'>
                    <label className="label_form" htmlFor="observation">Observaciones:</label>
                    <textarea type="text" {...register('observation', { required: true })} />

                </div>

                <div className="cont_button">
                    <input className="Button" type="submit" value="Listo" />
                </div>

            </form>
        </div>
    );
};

export default FormularioDatosEnvio;
