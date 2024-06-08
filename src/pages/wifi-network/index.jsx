import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';
import { NavBar, List, Switch, Popup, Input } from 'antd-mobile';
import { LockFill } from 'antd-mobile-icons'
import wifi from './asset/wifi.png';
import { useState } from 'react';

function WifiNetwork() {
    const navigate = useNavigate()
    const [popVisible, setPopVisble] = useState(false);
    const [currentItem, setCurrentItem] = useState({});
    const back = () => {
        navigate(-1)
    }
    const networkList = [
        {
            name: '701',
            key: '701'
        },
        {
            name: '702',
            key: '702'
        },
        {
            name: '703',
            key: '703'
        },
        {
            name: '704',
            key: '704'
        },
        {
            name: '705',
            key: '705'
        },
        {
            name: '706',
            key: '706'
        },
    ]

    const handleCancle = () => {
        setPopVisble(false)
    }
    const handleAdd = () => {
        setPopVisble(false)
    }
    const handleClickItem = (item) => {
        setPopVisble(true)
        setCurrentItem(item);
    }
    return <>
        <div className={styles.main}>
            <NavBar className='top' onBack={back}>wifi设置</NavBar>
            <List mode='card'>
                <List.Item>
                    <div className={styles.wifiItem}>
                        <div className={styles.label}>无线局域网</div>
                        <Switch />
                    </div>
                </List.Item>
            </List>
            <List mode='card' header="网络">
                {
                    networkList.map(item => {
                        return <div key={item.key}>
                            <List.Item onClick={() => { handleClickItem(item) }} arrow={null}>
                                <div className={styles.netItemList}>
                                    <div>{item.name}</div>
                                    <div className={styles.netItemListIcon}>
                                        <div style={{ marginRight: "10px" }}><LockFill /></div>
                                        <img src={wifi} style={{ height: "16px", width: '17px' }} />
                                    </div>
                                </div>
                            </List.Item>
                        </div>
                    })
                }

            </List>
        </div>
        <Popup
            visible={popVisible}
            onMaskClick={() => {
                setPopVisble(false)
            }}
            onClose={() => {
                setPopVisble(false)
            }}
            bodyStyle={{
                height: '80vh',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
            }}

        >
            <div className={styles.popup}>
                <div className={styles.tip}>{`输入${currentItem.name}的密码`}</div>
                <div className={styles.header}>
                    <a onClick={handleCancle}>取消</a>
                    <span className={styles.password}>输入密码</span>
                    <span onClick={handleAdd} className={styles.enter}>加入</span>
                </div>
                <div className={styles.passwordInput}>
                    <div className={styles.passwordLabel}>密码</div>
                    <Input type='password' />
                </div>
            </div>
        </Popup></>
}

export default WifiNetwork