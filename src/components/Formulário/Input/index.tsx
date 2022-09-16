import React, { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    type: string,
    name: string,
    placeholder: string,
    nome?: string,
    setNome?: React.Dispatch<React.SetStateAction<string>> | undefined,
    raca?: string,
    setRaca?: React.Dispatch<React.SetStateAction<string>> | undefined
}

export default function Input({ type, name, placeholder, nome, setNome, raca, setRaca }: Props) {       
    return(
        <>
        <label htmlFor={name}>{name.toUpperCase()}</label>
        <div className={styles.container}>
            <input
            type={type}
            name={name}
            onChange={(evento) => {
               if(setNome) {
                    setNome?.(evento.target.value)} 
                else {
                    setRaca?.(evento.target.value)
                }
            }}
            placeholder={placeholder}
            className={styles.container__input}
            />
            {/* {icon &&  <GrFormAdd
            color="white" fontSize="1.5em" 
            />} */}
        </div>
        </>
    )
}