import styles from './Formulario.module.scss';
import Lista from './Lista';

export default function Formulario() {
    const enviaFormulario = (evento : React.FormEvent) => {
        evento.preventDefault();
    }

return(
    <div className={styles.formulario}>
        <h1 className={styles.formulario__titulo}>Organize seus certificados!</h1>
            <form onSubmit={enviaFormulario}>
                <label htmlFor="certificado">Adicione um novo certificado</label>
                <Lista />
                <button
                className={styles.formulario__botao}
                type="submit"
                >
                Salvar certificados
                </button>
            </form>
    </div>
    )
}