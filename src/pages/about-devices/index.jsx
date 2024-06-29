import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';
import { NavBar, List } from 'antd-mobile';
import { useTranslation } from 'react-i18next';
import '../../i18n/config'

const contentData = [
    {
        key: '1',
        name: "",
        content: [
            {
                key: 'name',
                name: "名称",
                value: "iphone",
                mode: "click",
                func: () => { }
            },
            {
                key: 'rjbb',
                name: "软件版本",
                value: "14.4.1",
                mode: "default"
            },
            {
                key: 'xhmc',
                name: "型号名称",
                value: "iphone 7 Plus",
                mode: "default"
            },
            {
                key: 'xhhm',
                name: "型号号码",
                value: "MNRL2CH/A",
                mode: "default"
            },
            {
                key: 'xlh',
                name: "序列号",
                value: "C39SQ8G0HG02",
                mode: "default"
            },
        ]
    },
    {
        key: '2',
        name: "",
        content: [
            {
                key: 'bzbsy',
                name: "保障不适用",
                value: "",
                mode: "click",
                func: () => { }
            },
        ]
    },
    {
        key: '3',
        name: "",
        content: [
            {
                key: 'netWork',
                name: "网络",
                value: "中国电信",
                mode: "default"
            },
            {
                key: 'songs',
                name: "歌曲",
                value: "0",
                mode: "default"
            },
            {
                key: 'video',
                name: "视频",
                value: "12",
                mode: "default"
            },
            {
                key: 'photo',
                name: "照片",
                value: "303",
                mode: "default"
            },
            {
                key: 'yycx',
                name: "应用程序",
                value: "11",
                mode: "default"
            },
            {
                key: 'zrl',
                name: "总容量",
                value: "32GB",
                mode: "default"
            },
            {
                key: 'kyrl',
                name: "可用容量",
                value: "1.3GB",
                mode: "default"
            },
        ]
    },
]
function AboutDevice() {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }
    return <div className={styles.main}>
        <NavBar className='top' onBack={back}>{t('关于设备')}</NavBar>
        <div className={styles.mainContent}>
            {
                contentData.map(item => {
                    return <List mode="card" key={item.key}>
                        {
                            item.content.map(i => {
                                let a = {}
                                if (i.mode === 'click') {
                                    a.onClick = i.func
                                }
                                return <List.Item key={i.key} {...a}>
                                    <div className={styles.content}>
                                        <div className={styles.left}>{i.name}</div>
                                        <div className={styles.right}>{i.value}</div>
                                    </div>
                                </List.Item>
                            })
                        }
                    </List>
                })
            }
        </div>
        {/* {
            data.map(item => {
                return <List mode="card" key={item.key}>
                    {item.content.map(i => {
                        return <List.item key={i.key}>
                            <div className={styles.content}>
                                <div className={styles.left}>{i.name}</div>
                                <div className={styles.right}>{i.value}</div>
                            </div>
                        </List.item>
                    })}
                </List>
            })
        } */}
    </div>
}

export default AboutDevice