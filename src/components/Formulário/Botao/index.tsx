import styles from './Botao.module.scss';

interface Props {
    btnText: string
}

export default function Botao({ btnText }: Props) {
    return(
        <button
        className={styles.botao}
        type="submit"
        >
        {btnText}
        </button>
    )
}