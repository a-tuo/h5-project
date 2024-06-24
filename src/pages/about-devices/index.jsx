import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import { useTranslation } from 'react-i18next';
import Device from './assets/device.png';
import '../../i18n/config'

function AboutDevice() {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }
    return <div className={styles.main}>
        <NavBar className='top' onBack={back}>{t('关于设备')}</NavBar>
        <div className={styles.content}>
            <img className={styles.image} src={Device} style={{width:"50px",height:"50px"}}/>
            <div className={styles.text}>Version 8.0.49</div>
        </div>
    </div>
}

export default AboutDevice