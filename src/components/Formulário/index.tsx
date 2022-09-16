import Botao from './Botao';
import styles from './Formulario.module.scss';
import Input from './Input';
import Select from './Select';
import Dashboard from './Dashboard';
import { useState } from 'react';
import { IoIosPaw } from 'react-icons/io';

export default function Formulario() {
    const [ nome, setNome ] = useState('');
    const [ especie, setEspecie ] = useState('');
    const [ raca, setRaca ] = useState('');
    const [ dashboard, setDashboard ] = useState(false);

    const atualizaDashboard = () => {
        if(nome && especie && raca !== '') {
            setDashboard(true);
        }
    };
    const enviaFormulario = (evento: React.FormEvent) => {
        evento.preventDefault();
        atualizaDashboard();
    }
return(
    <div className={styles.formulario}>
        <h1 className={styles.formulario__titulo}>
            <IoIosPaw size={30} />
            <IoIosPaw size={20} />
            &nbsp; 
            cadastre seu pet
            </h1>
            <form onSubmit={(enviaFormulario)}>
                <Input 
                    type="text"
                    name="nome do pet"
                    placeholder="Insira o nome do pet"
                    nome={nome}
                    setNome={setNome}
                />
                <Select
                    name="espécie"
                    especie={especie}
                    setEspecie={setEspecie}
                />
                <Input 
                    type="text"
                    name="Raca"
                    placeholder="Insira a raça do pet"
                    raca={raca}
                    setRaca={setRaca}
                />
                <Botao btnText="Adicionar pet"/>
            </form>
            {dashboard ? <Dashboard nome={nome} especie={especie} raca={raca}/> : null}
    </div>
    )
}