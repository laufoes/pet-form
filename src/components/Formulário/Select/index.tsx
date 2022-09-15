import styles from './Select.module.scss'
import especies from './especies.json';

interface Props {
    name: string,
}

export default function Select({ name }: Props) {

    return(
        <>
            <label htmlFor={name}>{name.toUpperCase()}</label>
            <button 
                className={styles.container}
            >
                <span>
                Selecione uma espécie
                </span>
                <div className={styles.container__opcoes}>
                    {especies.map((especie) => (
                        <div className={styles.container__opcao}
                        key={especie.nome}>
                            {especie.nome}
                        </div>
                    ))}
                </div>
            </button>
        </>
    )
}