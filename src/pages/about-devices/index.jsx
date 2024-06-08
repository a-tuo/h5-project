import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';
import { NavBar } from 'antd-mobile';

function AboutDevice() {
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }
    return <div className={styles.main}>
        <NavBar className='top' onBack={back}>关于设备</NavBar>
    </div>
}

export default AboutDevice