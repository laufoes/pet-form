import { GrFormAdd } from 'react-icons/gr';
import styles from './Lista.module.scss';

export default function Lista() {
    return(
        <div className={styles.container}>
            <input
            type="text"
            name="certificado"
            placeholder='Digite o certificado'
            className={styles.container__input}
            />
            <GrFormAdd
            color="white" fontSize="1.5em" 
            />
        </div>
    )
}