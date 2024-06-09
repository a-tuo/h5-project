import styles from './index.module.less';
import { NavBar, SearchBar, Popup, Card, Avatar, Image } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import img4 from './assets/4.png';
import img1 from './assets/1.png';
import img5 from './assets/5.png';
import img3 from './assets/3.png';
import {
    FolderOutline,
    AddSquareOutline,
    DownlandOutline
} from 'antd-mobile-icons';
console.log(styles, 'styles')
const data = [
    {
        key: 'add',
        text: '增加',
        icon: () => {
            return <AddSquareOutline />
        }
    },
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
const transformValue = {
    time: '时间',
    fz: '阈值',
    cardNumber: "卡号",
    zh: "账号",
    bh: '编号'

}
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
        }
    },
]
function PersonnelFiles() {
    const navigate = useNavigate()
    const [isShowImg, setIsShowImg] = useState(false);
    const [imgsrc, setImgSrc] = useState('');
    const [popVisible, setPopVisble] = useState(false);
    const [personList, setPersonList] = useState(personList1)
    const handleDetail = (item) => {
        const personListTemp = personList.map(i => {
            if (i.id === item.id) {
                return {
                    ...i,
                    isShowDetail: !item?.isShowDetail,
                }
            }
            return i;
        })
        setPersonList(personListTemp)
    }
    const back = () => {
        navigate(-1)
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
    return !isShowImg ? <>
        <div className={styles.main}>
            <NavBar className={styles.top} onBack={back}>识别记录</NavBar>
            <div className={styles.content}>
                <div className={styles.search}>
                    <SearchBar placeholder='请输入编号/姓名/部门' className={styles.input} />
                    <div className={styles.more} onClick={handleClickMore}>更多</div>
                </div>
                <div className={styles.personList}>
                    {
                        personList.map(item => {
                            const contentTemp = item.isShowDetail ? Object.keys(item.content) : Object.keys(item.content).slice(0, 3);
                            return <Card className={styles.card}>
                                <div className={styles.cardItem}>
                                    <Avatar src={item.img} className={styles.avatar} onClick={() => { handleClickImg(item.img) }} style={{ '--size': '32px' }} />
                                    <div className={styles.right}>
                                        <div className={styles.header}>
                                            <div className={styles.name}>{item.name} | {item.department}</div>
                                            <div className={styles.enter}>录入</div>
                                        </div>
                                        <div className={styles.rightContent}>
                                            <div className={styles.contenta}>
                                                {
                                                    contentTemp.map(i => {
                                                        return <div className={styles.contentItem} key={i.id}>
                                                            <div className={styles.label}>{`${transformValue[i]}：`}</div>
                                                            <div className={styles.labelContent}>{item.content[i]}</div>
                                                        </div>
                                                    })
                                                }
                                            </div>
                                            <div className={styles.detail} onClick={() => {
                                                handleDetail(item)
                                            }}>{item.isShowDetail ? '收起' : '详细信息'}</div>
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
    </> : <div className={styles.img}>
        <NavBar className={styles.top} onBack={() => { setIsShowImg(false) }}>人员头像</NavBar>
        <div className={styles.imgContent}>
            <Image src={imgsrc} />
        </div>
    </div>
}

export default PersonnelFiles