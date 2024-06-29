import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';
import { NavBar, List, Switch, Popup, Input, Toast, Button } from 'antd-mobile';
import { LockFill } from 'antd-mobile-icons'
import { useLocation } from 'react-router-dom';
import wifi from './asset/wifi.png';
import detail from './asset/detail.png'
import { useMemo, useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import arrow from '../../images/arrow.png';
import '../../i18n/config'

function WifiNetwork() {
    let location = useLocation()
    const navigate = useNavigate()
    const [pswData, setPswData] = useState('')
    const [popVisible, setPopVisble] = useState(false);
    const [currentItem, setCurrentItem] = useState({});
    const [netValue, setNetValue] = useState(true);
    const [currentNetItem, setCurrentNetItem] = useState({});
    const { t } = useTranslation();
    const btnActive = useMemo(() => {
        return pswData?.length >= 8 ? true : false
    }, [pswData])
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

    const networkListTemp = useMemo(() => {
        return networkList.filter(i => i.key !== currentItem.key)
    }, [currentItem])

    const handleCancle = () => {
        setPopVisble(false)
        setPswData('')
    }
    const handleAdd = () => {
        if (btnActive) {
            setPopVisble(false)
            setPswData('')
            Toast.show({
                icon: 'success',
                content: t('连接成功'),
            })
            setPswData('');
            setCurrentNetItem(currentItem)
        }
    }
    const handleClickItem = (item) => {
        setPopVisble(true)
        setCurrentItem(item);
    }
    const handleChangeValue = (val) => {
        setPswData(val);
    }

    const handleNetWorkChange = (value) => {
        setNetValue(value);
        if (!value) {
            setCurrentItem({})
            setCurrentNetItem({})
            setPswData('')
        }
    }

    const handleDetail = (e, item) => {
        e.stopPropagation()
        navigate('/wifi-network-detail', { state: { list: item } })
    }

    const renderRight = (item) => {
        return <div className={styles.netItemListIcon}>
            <div style={{ marginRight: "10px" }}><LockFill /></div>
            <img src={wifi} style={{ height: "16px", width: '17px', marginRight: "10px" }} />
            <img src={detail} onClick={(e) => {
                handleDetail(e, item)
            }} style={{ height: "18px", width: '18px' }} />
        </div>
    }
    return <>
        <div className={styles.main}>
            <NavBar className='top' onBack={back}>{location.state.name}</NavBar>
            <List mode='card'>
                <List.Item>
                    <div className={styles.wifiItem}>
                        <div className={styles.label}>{t('无线局域网')}</div>
                        <Switch defaultChecked={true} value={netValue} onChange={handleNetWorkChange} />
                    </div>
                </List.Item>
                {
                    Object.keys(currentNetItem)?.length ? <List.Item>
                        <div className={styles.netItemList}>
                            <div>{currentNetItem.name}</div>
                            {renderRight(currentNetItem)}
                        </div>
                    </List.Item> : null
                }
            </List>
            {
                netValue && <List mode='card' header={
                    <div className={styles.header}>
                        <div>网络</div>
                        <Button size='small' color='primary'>刷新</Button>
                    </div>
                }>
                    {
                        networkListTemp.map(item => {
                            return <div key={item.key}>
                                <List.Item onClick={() => { handleClickItem(item) }} arrow={null}>
                                    <div className={styles.netItemList}>
                                        <div className={styles.currentItem}>
                                            {/* {
                                                currentNetItem.key === item.key ? <img className={styles.currentImg} src={arrow} /> : <div className={styles.currentImg}/>
                                            } */}
                                            {item.name}
                                        </div>
                                        {renderRight(item)}
                                    </div>
                                </List.Item>
                            </div>
                        })
                    }

                </List>
            }
        </div>
        <Popup
            visible={popVisible}
            onMaskClick={() => {
                setPopVisble(false)
                setPswData('')
            }}
            onClose={() => {
                setPopVisble(false)
                setPswData('')
            }}
            bodyStyle={{
                height: '80vh',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
            }}

        >
            <div className={styles.popup}>
                <div className={styles.tip}>{t(`输入${currentItem.name}的密码`)}</div>
                <div className={styles.header}>
                    <a onClick={handleCancle}>{t('取消')}</a>
                    <span className={styles.password}>{t('输入密码')}</span>
                    <span onClick={handleAdd}
                        className={classNames(styles.enter, { [styles.active]: btnActive })}>{t('加入')}</span>
                </div>
                <div className={styles.passwordInput}>
                    <div className={styles.passwordLabel}>{t('密码')}</div>
                    <Input
                        type='password'
                        value={pswData}
                        onChange={handleChangeValue} />
                </div>
            </div>
        </Popup></>
}

export default WifiNetwork