import styles from './Dashboard.module.scss';
import { IoIosPaw } from 'react-icons/io';
import Cards from './Cards';

export default function Dashboard({ nome, especie, raca }: any) {
    return(
        <div className={styles.dashboard}>
            <h1 className={styles.dashboard__titulo}>
            membros
            &nbsp; 
            <IoIosPaw size={30} />
            <IoIosPaw size={20} />
            </h1>
            <Cards nome={nome} especie={especie} raca={raca}/>
        </div>
    )
}