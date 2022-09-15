import styles from './Botao.module.scss';

export default function Botao() {
    return(
        <button
        className={styles.botao}
        type="submit"
        >
        Salvar certificados
        </button>
    )
}