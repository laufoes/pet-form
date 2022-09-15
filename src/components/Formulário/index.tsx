import styles from './Formulario.module.scss';
import Lista from './Lista';

export default function Formulario() {
    return(
        <div className={styles.formulario}>
            <h1 className={styles.formulario__titulo}>Organize seus certificados!</h1>
            <form>
                <label htmlFor="certificado">Adicione um novo certificado</label>
                <Lista />
                <button
                    className={styles.formulario__botao}>
                    Salvar certificados
                </button>
            </form>
        </div>
        )
    }