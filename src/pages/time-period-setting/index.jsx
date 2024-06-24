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
            passage: "人脸识别",
            doorMethod: "常开",
        },
        {
            key: "2",
            startTime: "12:10:10",
            endTime: "12:10:10",
            passage: "刷卡",
            doorMethod: "常开",
        },
        {
            key: "3",
            startTime: "12:10:10",
            endTime: "12:10:10",
            passage: "人脸识别",
            doorMethod: "常开",
        },
        {
            key: "4",
            startTime: "12:10:10",
            endTime: "12:10:10",
            passage: "人脸识别",
            doorMethod: "常开",
        },
    ]
    const back = () => {
        navigate(-1)
    }
    const onFinish = () => {

    }
    return <div className={styles.main}>
        <NavBar className={styles.top} onBack={back} right={
            // <Button size='small' color='primary'>新增</Button>
            <div className={styles.more}>
                <span style={{ marginRight: '5px' }}>{t('增加')}</span>
                <AddOutline /></div>
        }>{t('时段设置')}</NavBar>
        {/* <Form mode='card'
            onFinish={onFinish}
            form={form}
            layout='horizontal'
            footer={
                <Button block type='submit' color='primary' size='large'>
                    {t('保存')}
                </Button>
            }>
            <Form.Item
                name='startTime'
                label={t('起始时间')}
                trigger='onConfirm'
                arrow={
                    form.getFieldValue('startTime') ? (
                        <CloseCircleFill
                            style={{
                                fontSize: 14,
                            }}
                            onClick={e => {
                                e.stopPropagation()
                                form.setFieldsValue({ startTime: null })
                            }}
                        />
                    ) : (
                        true
                    )
                }
                onClick={() => {
                    setPickerVisible(true)
                }}
            >
                <DatePicker
                    visible={pickerVisible}
                    precision='minute'
                    onClose={() => {
                        setPickerVisible(false)
                    }}
                >
                    {value =>
                        value ? dayjs(value).format('YYYY-MM-DD hh:mm:ss') : <div style={{ color: '#C0C4CC' }}>请选择日期</div>
                    }
                </DatePicker>
            </Form.Item>
            <Form.Item
                name='endTime'
                label={t('终止时间')}
                trigger='onConfirm'
                arrow={
                    form.getFieldValue('endTime') ? (
                        <CloseCircleFill
                            style={{
                                fontSize: 14,
                            }}
                            onClick={e => {
                                e.stopPropagation()
                                form.setEndFieldsValue({ endTime: null })
                            }}
                        />
                    ) : (
                        true
                    )
                }
                onClick={() => {
                    setEndPickerVisible(true)
                }}>
                <DatePicker
                    visible={endPickerVisible}
                    precision='minute'
                    onClose={() => {
                        setEndPickerVisible(false)
                    }}
                >
                    {value =>
                        value ? dayjs(value).format('YYYY-MM-DD hh:mm:ss') : <div style={{ color: '#C0C4CC' }}>{t('请选择日期')}</div>
                    }
                </DatePicker>
            </Form.Item>
        </Form> */}
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
                                <div className={styles.edit}>修改</div>
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