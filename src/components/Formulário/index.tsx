import { GrFormAdd } from 'react-icons/gr';
import styles from './Formulario.module.scss';

export default function Formulario() {
    return(
        <div className={styles.formulario}>
            <h1>Organize seus certificados!</h1>
            <div>
                <label htmlFor="">Adicione seu certificado</label>
                <div>
                    <input type="text" />
                    <GrFormAdd />
                </div>
            </div>
        </div>
    )
}