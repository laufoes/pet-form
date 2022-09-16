import styles from './Cards.module.scss';
import { FiHeart } from 'react-icons/fi';
import { TiDelete } from 'react-icons/ti';

export default function Cards({ nome, especie, raca }: any) {
    return(
        <>
        <div className={styles.cartao}>
            <div className={styles.cartao__bg}>
                <h3 className={styles.cartao__titulo}>
                    {nome}
                </h3>
                   {especie}
                   <br></br>
                   {raca}
                <div className={styles.cartao__icones}>
                    <FiHeart size={25}/>
                    &nbsp; 
                    <TiDelete size={25}/>
                </div>
            </div>
        </div>
        </>
    )
}