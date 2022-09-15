import styles from './Cards.module.scss';
import { FiHeart } from 'react-icons/fi';
import { TiDeleteOutline } from 'react-icons/ti';

export default function Cards() {
    return(
        <>
        <div className={styles.cartao}>
            <div className={styles.cartao__bg}>
                <h3 className={styles.cartao__titulo}>chiquinha</h3>
                <p>
                    Border Collie
                </p>
                <div>
                    <FiHeart size={25}/>
                    &nbsp; 
                    <TiDeleteOutline size={25}/>
                </div>
            </div>
        </div>
        </>
    )
}