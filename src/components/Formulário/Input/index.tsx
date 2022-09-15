import { GrFormAdd } from 'react-icons/gr';
import styles from './Input.module.scss';

interface Props {
    type: string,
    name: string,
    placeholder: string,
    icon: boolean
}

export default function Input({ type, name, placeholder, icon }: Props) {       
    return(
        <>
        <label htmlFor={name}>{name.toUpperCase()}</label>
        <div className={styles.container}>
            <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={styles.container__input}
            />
            {icon &&  <GrFormAdd
            color="white" fontSize="1.5em" 
            />}
        </div>
        </>
    )
}