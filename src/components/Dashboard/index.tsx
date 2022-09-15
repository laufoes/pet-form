import styles from './Dashboard.module.scss';
import { IoIosPaw } from 'react-icons/io';

export default function Dashboard() {
    return(
        <div className={styles.dashboard}>
            <h1 className={styles.dashboard__titulo}>
            cadastre seu pet
            &nbsp; 
            <IoIosPaw size={30} />
            <IoIosPaw size={20} />
            </h1>
        </div>
    )
}