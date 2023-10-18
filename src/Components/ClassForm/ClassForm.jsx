import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../views/Footer/Footer";
import { items } from "../../mock/product.mock";
import { Link, useParams } from "react-router-dom";
import "./ClassForm.scss";
import mapPin from "../../assets/icons/map.svg";
import clock from "../../assets/icons/time.svg";
import users from "../../assets/icons/people.svg";
import Header from "../../views/Header/Header";
import ChooseUs from "../../views/ChooseUs/ChooseUs";
import Testimonials from "../../views/Testimonials/Testimonials";
import CTAButton from "../CTAButton/CTAButton";
import Swal from 'sweetalert2';




const ClassForm = () => {

    const [formSent, setFormSent] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Obtenha os dados do formulário
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            // Envie os dados do formulário para o endpoint
            const response = await fetch('https://api.sheetmonkey.io/form/xdHitcjKLQjab5oJZfkHaz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Uhuul! 🥳',
                    text: 'Agradecemos o interesse, em breve entraremos em contato!',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#feae11',
                });

                setFormSent(true);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro ao enviar o formulário',
                    text: 'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#feae11',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erro ao enviar o formulário',
                text: 'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#feae11',

            });
        }
    };



    let { id } = useParams();
    const [products] = useState(items);
    const product = products.find((element) => element.id == id);

    return (
        <div className='classes'>
            <Header />
            <div className='classesForm'>
                <div className='classesForm__description'>
                    <h2 className='classesForm__description-cursoFix'>🔥 Curso em destaque</h2>
                    <h1 className='classesForm__description-h1'>{product.nome1} <br />{product.nome2}</h1>
                    <div className='classesForm__description-spec'>
                        <div className='classesForm__description-spec-item'>
                            <img className='class-icon' src={clock} alt='clock icon' />
                            <h5 className='classesForm__description-spec-item-h5'>{product.duração}</h5>
                        </div>
                        <div className='classesForm__description-spec-item'>
                            <img className='class-icon' src={users} alt='users icon' />
                            <h5 className='classesForm__description-spec-item-h5'>{product.turma}</h5>
                        </div>
                        <div className='classesForm__description-spec-item'>
                            <img className='class-icon' src={mapPin} alt='map pin icon' />
                            <h5 className=''>{product.tipoLocal}</h5>
                        </div>
                    </div>
                    <p className="classesForm__description-about"> {product.descrição2}</p>
                </div>
                <form onSubmit={handleSubmit} className='classesForm__form'>
                    <p className='classesForm__form-p'>Inscreva-se agora!</p>
                    <hr className="line-form" />
                    <input
                        className='classesForm__form-input'
                        type='text' name="Name"
                        placeholder='Nome completo' required
                    />
                    <input
                        className='classesForm__form-input'
                        type='email' name="Email"
                        placeholder='Seu melhor e-mail' required
                    />
                    <input
                        className='classesForm__form-input'
                        type='phone' name="WhatsApp"
                        placeholder='Seu WhatsApp' required
                    />
                    <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />


                    <CTAButton type="submit">Tenho interesse!</CTAButton>




                </form>
            </div>
            <ChooseUs />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default ClassForm;
