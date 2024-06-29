import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';
import { NavBar, List } from 'antd-mobile';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../i18n/config'
function NthernetNetwork() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    let location = useLocation();
    const back = () => {
        navigate(-1)
    }
    return <div className={styles.main}>
        <NavBar className='top' onBack={back}>{t(location.state.name)}</NavBar>
        <List mode='card'>
            <List.Item onClick={() => { navigate('/wifi-network-detail', { state: { type: "ip" } }) }}>
                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                    <div className={styles.left}>IP分配</div>
                    <div className={styles.right}>手动</div>
                </div>
            </List.Item>
            <List.Item onClick={() => { navigate('/ethernet-network-detail', { state: { type: "dns" } }) }}>
                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                    <div className={styles.left}>DNS服务器分配</div>
                    <div className={styles.right}>手动</div>
                </div></List.Item>
        </List>
    </div>
}

export default NthernetNetwork