import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';
import { NavBar, List, Form, Input } from 'antd-mobile';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../../i18n/config'
function WifiNetworkDetail() {
    const { t } = useTranslation();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    let location = useLocation();
    const [checkValue, setCheckValue] = useState('auto')
    const { list } = location.state;
    console.log(location.state, 'state');
    const back = () => {
        navigate(-1)
    }
    const handleChange = (value) => {
        console.log(value, 'value')
        setCheckValue(value);
    }

    const onFinish = () => {

    }
    return <div className={styles.main}>
        <NavBar className='top' onBack={back}>{t(list?.name || '配置IPv4')}</NavBar>
        <List mode='card' header='IPV4地址'>
            <List.Item onClick={() => { navigate('/wifi-network-detail-auto') }}>
                <div className={styles.content}>
                    <div className={styles.left}>配置IP</div>
                    <div className={styles.right}>手动</div>
                </div>
            </List.Item>
            <List.Item>
                <div className={styles.content}>
                    <div className={styles.left}>IP地址</div>
                    <div className={styles.right}>192.168.41.7</div>
                </div>
            </List.Item>
            <List.Item>
                <div className={styles.content}>
                    <div className={styles.left}>子网掩码</div>
                    <div className={styles.right}>255.255.255.0</div>
                </div>
            </List.Item>
            <List.Item>
                <div className={styles.content}>
                    <div className={styles.left}>路由器</div>
                    <div className={styles.right}>192.168.41.1</div>
                </div>
            </List.Item>
        </List>
        {
            list?.name ? <List mode='card' header='DNS'>
                <List.Item onClick={() => { navigate('/wifi-network-detail-auto') }}>
                    <div className={styles.content}>
                        <div className={styles.left}>配置IP</div>
                        <div className={styles.right}>手动</div>
                    </div>
                </List.Item>
            </List> : null
        }
    </div>
}

export default WifiNetworkDetail