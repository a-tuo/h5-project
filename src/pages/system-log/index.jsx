import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
function SystemLog() {
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }
    return <div className={styles.main}>
        <NavBar className='top' onBack={back}>系统日志</NavBar>
    </div>
}

export default SystemLog