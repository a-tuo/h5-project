import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';
import { NavBar, List, CheckList } from 'antd-mobile';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import add from './assests/add.png';
import decrease from './assests/decrease.png';
import '../../i18n/config'
function NthernetNetworkDetail() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    let location = useLocation();
    const [checkValue, setCheckValue] = useState(['handMovement']);
    const back = () => {
        navigate(-1)
    }
    const onFinish = () => {

    }

    const handleChange = (value) => {
        setCheckValue(value);
    }
    return <div className={styles.main}>
        <NavBar className='top' onBack={back}>{t('配置DNS')}</NavBar>
        <CheckList className={styles.checkList} value={checkValue} onChange={handleChange} mode='card'>
            <CheckList.Item value="handMovement">手动</CheckList.Item>
            <CheckList.Item value="auto">自动</CheckList.Item>
        </CheckList>
        {
            checkValue[0] === 'handMovement' ?
                <List header="DNS服务器" mode="card">
                    <List.Item>
                        <img className={styles.img} src={decrease} />
                        <span className={styles.text}>192.168.0.1</span>
                    </List.Item>
                    <List.Item>
                        <img className={styles.img} src={add} />
                        <span className={styles.text}>添加服务器</span>
                    </List.Item>
                </List> : null
        }
    </div>
}

export default NthernetNetworkDetail