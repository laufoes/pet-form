import styles from './Select.module.scss'
import animais from './animais.json';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import classNames from 'classnames';
import { useState } from 'react';

interface Props {
    name: string,
    especie: string,
    setEspecie: React.Dispatch<React.SetStateAction<string>>
}

export default function Select({ name, especie, setEspecie }: Props) {
    const [ aberto, setAberto ] = useState(false);

    const nomeEspecie = especie && animais.find(animal => animal.nome === especie)?.nome;
    return(
        <>
            <label htmlFor={name}>{name.toUpperCase()}</label>
            <button 
                className={classNames({
                    [styles.container]: true,
                    [styles.container__ativo]: aberto,
                })}
                onClick={() => setAberto(!aberto)}
                onBlur={() => setAberto(false)}
            >
                <span>
                {nomeEspecie || `Selecione uma espécie`}
                </span>
                {aberto ? <MdKeyboardArrowUp size={30} /> : <MdKeyboardArrowDown size={30}/>}
                <div
                    className={classNames({
                        [styles.container__opcoes]: true,
                        [styles.container__opcoes__ativo]: aberto,
                    })}>
                    {animais.map((animal) => (
                        <div
                            className={styles.container__opcao}
                            key={animal.nome}
                            onClick={() => setEspecie(animal.nome)}
                        >
                            {animal.nome}
                        </div>
                    ))}
                </div>
            </button>
        </>
    )
}