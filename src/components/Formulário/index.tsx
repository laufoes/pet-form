import Botao from './Botao';
import styles from './Formulario.module.scss';
import Input from './Input';
import { IoIosPaw } from 'react-icons/io'
import Select from './Select';
import { useState } from 'react';

export default function Formulario() {
    const [ especie, setEspecie ] = useState('');

    const enviaFormulario = (evento: React.FormEvent) => {
        evento.preventDefault();
    }

return(
    <div className={styles.formulario}>
        <h1 className={styles.formulario__titulo}>
            <IoIosPaw size={30} />
            <IoIosPaw size={20} />
            &nbsp; 
            cadastre seu pet
            </h1>
            <form onSubmit={enviaFormulario}>
                <Input 
                    type="text"
                    name="nome do pet"
                    placeholder="Insira o nome do pet"
                    icon={false}
                />
                <Select
                    name="espécie"
                    especie={especie}
                    setEspecie={setEspecie}
                />
                <Input 
                    type="text"
                    name="raça"
                    placeholder="Insira a raça do pet"
                    icon={false}
                />
                {/* select idade em anos */}
                <Botao btnText="Adicionar pet"/>
            </form>
    </div>
    )
}