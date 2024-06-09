import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import { useTranslation } from 'react-i18next';
import '../../i18n/config'
function Administrators() {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }
    return <div className={styles.main}>
        <NavBar className='top' onBack={back}>{t('管理员')}</NavBar>
    </div>
}

export default Administrators