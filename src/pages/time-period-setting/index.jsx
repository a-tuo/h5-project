import styles from './index.module.less';
import { NavBar, Form, Button, Card } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import { AddOutline } from 'antd-mobile-icons'
import { useState } from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import '../../i18n/config'
function TimePeriodSetting() {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [pickerVisible, setPickerVisible] = useState(false);
    const [endPickerVisible, setEndPickerVisible] = useState(false);
    const { t } = useTranslation();
    const transformNum = {
        startTime: '开始时间',
        endTime: '结束时间',
        passage: '通行方式',
        doorMethod: '门开方式'
    }
    const periodTimeData = [
        {
            key: "1",
            startTime: "12:10:10",
            endTime: "12:10:10",
            passage: "人脸或密码或卡",
            doorMethod: "常开",
        },
        {
            key: "2",
            startTime: "12:10:10",
            endTime: "12:10:10",
            passage: "人脸或密码或卡",
            doorMethod: "常开",
        },
        {
            key: "3",
            startTime: "12:10:10",
            endTime: "12:10:10",
            passage: "人脸或密码或卡",
            doorMethod: "常开",
        },
        {
            key: "4",
            startTime: "12:10:10",
            endTime: "12:10:10",
            passage: "人脸或密码或卡",
            doorMethod: "常开",
        },
    ]
    const back = () => {
        navigate(-1)
    }

    const handleClickAdd = () => {
        navigate('/time-period-setting-add');
    }

    const handleClickEdit = (item) => {
        navigate('/time-period-setting-add', { state: { data: item } });
    }
    return <div className={styles.main}>
        <NavBar className={styles.top} onBack={back} right={
            // <Button size='small' color='primary'>新增</Button>
            <div className={styles.more} onClick={handleClickAdd}>
                <span style={{ marginRight: '5px' }}>{t('增加')}</span>
                <AddOutline /></div>
        }>{t('时段设置')}</NavBar>
        {
            <div className={styles.content}>
                {
                    periodTimeData.map(item => {
                        return <Card className={styles.cardContent}>
                            <div className={styles.card}>
                                {
                                    Object.keys(transformNum).map(i => {
                                        return <div className={styles.contentItem} key={i}>
                                            <div className={styles.label}>{t(`${transformNum[i]}：`)}</div>
                                            <div className={styles.labelContent}>{item[i]}</div>
                                        </div>
                                    })
                                }
                            </div>
                            <div className={styles.footer}>
                                <div className={styles.delete}>删除</div>
                                <div className={styles.edit} onClick={() => { handleClickEdit(item) }}>修改</div>
                                {/* <Button size='small'>修改</Button>
                                <Button size='small'>删除</Button> */}
                            </div>
                        </Card>
                    })
                }
            </div>
        }
    </div>
}

export default TimePeriodSetting