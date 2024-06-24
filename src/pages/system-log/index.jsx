import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';
import { NavBar, SearchBar, Card, Popup, DatePicker } from 'antd-mobile';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import classNames from 'classnames';
import { useState } from 'react';
import {
    FolderOutline,
    DownlandOutline,
    SearchOutline,
    MoreOutline
} from 'antd-mobile-icons';
import '../../i18n/config'
const transformNum = {
    operator: '操作员',
    time: '时间',
    content: '操作内容',
    state: '状态'
}
const data = [
    {
        key: 'import',
        text: '导入',
        icon: () => {
            return <DownlandOutline />
        }
    },
    {
        key: 'export',
        text: '导出',
        icon: () => {
            return <FolderOutline />
        }
    },
]
const systemData = [
    {
        key: '1',
        operator: '海绵宝宝',
        time: '2024-10-11',
        content: '内容12345',
        state: '成功'
    },
    {
        key: '2',
        operator: '海绵宝宝',
        time: '2024-10-11',
        content: '内容12345',
        state: '成功'
    },
    {
        key: '3',
        operator: '海绵宝宝',
        time: '2024-10-11',
        content: '内容12345',
        state: '成功'
    },
]

const topData = [
    {
        key: 'operator',
        name: '操作员',
        type: 'input',
    },
    {
        key: 'content',
        name: '操作内容',
        type: 'input',
    },
    {
        key: 'time',
        name: '操作时间',
        type: 'dataPicker',
    },
]
const tabData = [
    {
        key: 'startTime',
        name: '起始时间'
    },
    {
        key: 'endTime',
        name: '终止时间'
    }
]
function SystemLog() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [popVisible, setPopVisble] = useState(false);
    const [visible, setVisible] = useState(false);
    const [timePicker, setTimePicker] = useState('');
    const [active, setActive] = useState({
        key: 'operator',
        type: 'input',
    },)
    const [timeData, setTimeData] = useState({
        startTime: "",
        endTime: "",
    })
    const back = () => {
        navigate(-1)
    }
    const handleClickMore = () => {
        setPopVisble(true)
    }
    const handleCancle = () => {
        setPopVisble(false)
    }
    const handleClick = (item) => {
        setActive(item)
    }
    const handleDataPicker = (item) => {
        setVisible(true)
        setTimePicker(item);
    }
    const handleConfirm = (data) => {
        setTimeData({
            ...timeData,
            [timePicker]: dayjs(data).format('YYYY-MM-DD hh:mm:ss')
        })
        console.log(timePicker, 'timePicker', dayjs(data).format('YYYY-MM-DD hh:mm:ss'), 'data')
    }
    const renderSearch = () => {
        if (active.type === 'input') {
            return <SearchBar placeholder={t(`请输入${transformNum[active.key]}`)} className={styles.input} />
        }
        else if (active.type === 'dataPicker') {
            return <div className={styles.dataPicker}>
                {
                    tabData.map(item => {
                        return <>
                            <div className={classNames(styles.dataPickerItem, { [styles.dataPickerItemActive]: timeData[item.key] })} onClick={() => {
                                handleDataPicker(item.key)
                            }} key={item.key}>{
                                    timeData[item.key] || item.name}</div>
                        </>
                    })
                }
                <div className={styles.more}>{<SearchOutline />}</div>
            </div>
        }
    }
    return <>
        <div className={styles.main}>
            <NavBar className='top' onBack={back}>{t('系统日志')}</NavBar>
            <div className={styles.content}>
                <div className={styles.filterData}>
                    <div className={styles.filterContent}>
                        {
                            topData.map(item => {
                                return <div key={item.key} onClick={() => { handleClick(item) }} className={classNames(styles.filterItem, { [styles.active]: active.key === item.key })}>{item.name}</div>
                            })
                        }
                    </div>
                    <div className={styles.more} onClick={handleClickMore}>{<MoreOutline />}</div>
                </div>
                <div className={styles.search}>
                    {
                        renderSearch()
                    }
                </div>
                <div className={styles.mainContent}>
                    {
                        systemData.map(item => {
                            return <Card className={styles.cardContent}>
                                {
                                    Object.keys(transformNum).map(i => {
                                        return <div className={styles.contentItem} key={i}>
                                            <div className={styles.label}>{t(`${transformNum[i]}：`)}</div>
                                            <div className={styles.labelContent}>{t(item[i])}</div></div>
                                    })
                                }
                            </Card>
                        })
                    }
                </div>
            </div>
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
                height: '150px',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
            }}

        >
            <div className={styles.popup}>
                <div className={styles.popupContent}>
                    {data.map(item => {
                        return <div className={styles.popupItem} key={item.key}>
                            <div className={styles.popupItemIcon}>
                                {item.icon()}
                            </div>
                            <div className={styles.popupItemText}>{item.text}</div>
                        </div>
                    })
                    }
                </div>
                <div className={styles.cancle} onClick={handleCancle}>取消</div>
            </div>
        </Popup>
        <DatePicker
            title='时间选择'
            visible={visible}
            precision='second'
            onClose={() => {
                setVisible(false)
            }}

            onConfirm={handleConfirm}
        /></>
}

export default SystemLog