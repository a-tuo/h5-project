import styles from './index.module.less';
import { NavBar, SearchBar, Popup, Card, Avatar, Image,DatePicker } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import img4 from './assets/4.png';
import img1 from './assets/1.png';
import img5 from './assets/5.png';
import img3 from './assets/3.png';
import dayjs from 'dayjs';
import classNames from 'classnames';
import {
    FolderOutline,
    MoreOutline,
    SearchOutline,
} from 'antd-mobile-icons';
import { useTranslation } from 'react-i18next';
import '../../i18n/config'
const data = [
    {
        key: 'export',
        text: '导出',
        icon: () => {
            return <FolderOutline />
        }
    },
]
const transformValue = {
    time: '时间',
    fz: '阈值',
    cardNumber: "卡号",
    zh: "账号",
    bh: '编号',
    xf: '消费',
    ye: '余额',
    result: '结果'
}
const transformNum = {
    number: '人员编号',
    name: '人员姓名',
    time: '时间',
}
const topData = [
    {
        key: 'number',
        type: 'input',
    },
    {
        key: 'name',
        type: 'input',
    },
    {
        key: 'time',
        type: 'dataPicker',
    },
]
const personList1 = [
    {
        id: "1",
        img: img1,
        name: "胡图图",
        department: "翻斗花园部",
        content: {
            fz: '0.8',
            cardNumber: "123456",
            zh: "424242",
            bh: '001',
            time: "2023-09-01 23:00:00",
            xf: '200,000元',
            ye: '300,00元',
            result: '测试诗句123123132'
        }
    },
    {
        id: "2",
        img: img3,
        name: "派大新",
        department: "生产部",
        content: {
            fz: '0.8',
            cardNumber: "123456",
            zh: "424242",
            bh: '002',
            time: "2023-09-01 23:00:00",
            xf: '200元',
            ye: '300元',
            result: '哈哈哈'
        }
    },
    {
        id: "3",
        img: img4,
        name: "小新",
        department: "春日部",
        content: {
            fz: '0.8',
            cardNumber: "123456",
            zh: "424242",
            bh: '003',
            time: "2023-09-01 23:00:00",
            xf: '200元',
            ye: '300元',
            result: '哈哈哈'
        }
    },
    {
        id: "4",
        img: img5,
        name: "海绵宝宝",
        department: "菠萝部",
        content: {
            fz: '0.8',
            cardNumber: "123456",
            zh: "424242",
            bh: '004',
            time: "2023-09-01 23:00:00",
            xf: '200元',
            ye: '300元',
            result: '哈哈哈'
        }
    },
    {
        id: "5",
        img: img4,
        name: "张三",
        department: "生产部",
        content: {
            fz: '0.8',
            cardNumber: "123456",
            zh: "424242",
            bh: '004',
            time: "2023-09-01 23:00:00",
            xf: '200元',
            ye: '300元',
            result: '哈哈哈'
        }
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
function IdentificationRecord() {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const [isShowImg, setIsShowImg] = useState(false);
    const [imgsrc, setImgSrc] = useState('');
    const [popVisible, setPopVisble] = useState(false);
    const [personList, setPersonList] = useState(personList1);
    const [visible, setVisible] = useState(false);
    const [timePicker, setTimePicker] = useState('');
    const [timeData, setTimeData] = useState({
        startTime: "",
        endTime: "",
    })
    const [active, setActive] = useState({
        key: 'number',
        type: 'input',
    },)
    const back = () => {
        navigate(-1)
    }
    const handleConfirm = (data) => {
        setTimeData({
            ...timeData,
            [timePicker]: dayjs(data).format('YYYY-MM-DD hh:mm:ss')
        })
        console.log(timePicker, 'timePicker', dayjs(data).format('YYYY-MM-DD hh:mm:ss'), 'data')
    }
    const handleClickImg = (item) => {
        setIsShowImg(true)
        setImgSrc(item)
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
    // const handleDetail = (item) => {
    //     const personListTemp = personList.map(i => {
    //         if (i.id === item.id) {
    //             return {
    //                 ...i,
    //                 isShowDetail: !item?.isShowDetail,
    //             }
    //         }
    //         return i;
    //     })
    //     setPersonList(personListTemp)
    // }
    return !isShowImg ? <>
        <div className={styles.main}>
            <NavBar className={styles.top} onBack={back}>{t('识别记录')}</NavBar>
            <div className={styles.content}>
                <div className={styles.filterData}>
                    <div className={styles.filterContent}>
                        {
                            topData.map(item => {
                                return <div key={item.key} onClick={() => { handleClick(item) }} className={classNames(styles.filterItem, { [styles.active]: active.key === item.key })}>{transformNum[item.key]}</div>
                            })
                        }
                    </div>
                    <div className={styles.more} onClick={handleClickMore}>{<MoreOutline />}</div>
                </div>
                <div className={styles.search}>
                    {
                        renderSearch()
                    }
                    {/* <SearchBar placeholder={t(`请输入${transformNum[active.key]}`)} className={styles.input} /> */}
                    {/* <div className={styles.more} onClick={handleClickMore}>{t('更多')}</div> */}
                </div>
                <div className={styles.personList}>
                    {
                        personList.map(item => {
                            return <Card className={styles.card}>
                                <div className={styles.cardItem}>
                                    <Avatar src={item.img} className={styles.avatar} onClick={() => { handleClickImg(item.img) }} style={{ '--size': '32px' }} />
                                    <div className={styles.right}>
                                        <div className={styles.header}>
                                            <div className={styles.name}>{t(`${item.name} | ${item.department}`)}</div>
                                            <div className={styles.enter}>{t('录入')}</div>
                                        </div>
                                        <div className={styles.rightContent}>
                                            <div className={styles.contenta}>
                                                {
                                                    Object.keys(item.content).map(i => {
                                                        return <div className={styles.contentItem} key={i.id}>
                                                            <div className={styles.label}>{t(`${transformValue[i]}：`)}</div>
                                                            <div className={styles.labelContent}>{t(item.content[i])}</div>
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
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
        />
    </> : <div className={styles.img}>
        <NavBar className={styles.top} onBack={() => { setIsShowImg(false) }}>人员头像</NavBar>
        <div className={styles.imgContent}>
            <Image src={imgsrc} />
        </div>
    </div>
}

export default IdentificationRecord