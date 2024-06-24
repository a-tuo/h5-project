import { NavBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import { CloseCircleFill } from 'antd-mobile-icons'
import { useState, useCallback } from 'react';
import { Form, Input, Stepper, Button, Slider, Switch, Picker } from 'antd-mobile'
import { basicColumns } from './data';
import dayjs from 'dayjs';
import styles from './index.module.less';
import { useTranslation } from 'react-i18next';
import '../../i18n/config'
function SystemSettings(props) {
    const { t } = useTranslation();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [timeVisible, setTimeVisble] = useState(false);
    const [pickerVisible, setPickerVisible] = useState(false);
    const back = () => {
        navigate(-1)
    }
    const onFinish = () => {
        const values = form.getFieldsValue()
        console.log(values)
    }
    return <div className={styles.main}>
        <NavBar right={<Button size='small' color='primary'>保存</Button>} onBack={back}>{t('系统设置')}</NavBar>
        <Form
            mode='card'
            onFinish={onFinish}
            form={form}
            layout='horizontal'
            initialValues={{
                issleep: true,
                equipmentNumber: '1',
                corporateName: '科技有限公司',
                restart: true
            }}
        >
            <Form.Item
                name='equipmentNumber'
                label={t('设备编号')}
                rules={[{ required: true, message: '设备编号不能为空' }]}
            >
                <Input placeholder={t('请输入设备编号')} />
            </Form.Item>
            <Form.Item
                name='corporateName'
                label={t('公司名称')}
                rules={[{ required: true, message: t('公司名称不能为空') }]}
            >
                <Input placeholder={t('请输入公司名称')} />
            </Form.Item>
            <Form.Header></Form.Header>
            <Form.Item
                name='volume'
                label={t('音量')}
            >
                <Slider
                    defaultValue={0}
                    icon={null}
                />
            </Form.Item>
            <Form.Item
                name='brightness'
                label={t('亮度')}
            >
                <Slider
                    defaultValue={0}
                    icon={null}
                />
            </Form.Item>
            <Form.Header></Form.Header>
            <Form.Item
                name='restart'
                label={t('定时重启')}
                childElementPosition='right'
                valuePropName="checked"
            >
                <Switch />
            </Form.Item>
            <Form.Item
                name='restartTime'
                label={t('重启时间')}
                trigger='onConfirm'
                hidden={timeVisible}
                shouldUpdate={(prevValues, curValues) => {
                    if (prevValues.restart !== curValues.restart) {
                        setTimeVisble(!curValues.restart)
                    }
                }}
                // arrow={
                //     form.getFieldValue('restartTime') ? (
                //         <CloseCircleFill
                //             style={{
                //                 fontSize: 14,
                //             }}
                //             onClick={e => {
                //                 e.stopPropagation()
                //                 console.log(form.getFieldValue('restartTime'),'restartTime')
                //                 console.log('234')
                //                 form.setFieldsValue({ restartTime: [] })
                //             }}
                //         />
                //     ) : (
                //         true
                //     )
                // }
                onClick={() => {
                    setPickerVisible(true)
                }}
            >
                <Picker
                    style={{
                        '--title-font-size': '13px',
                        '--header-button-font-size': '13px',
                        '--item-font-size': '13px',
                        '--item-height': '30px',
                    }}
                    columns={basicColumns}
                    visible={pickerVisible}
                    defaultValue={['1', '00','00']}
                    onClose={() => {
                        setPickerVisible(false)
                    }}
                >
                    {
                        value => {
                            console.log(value, 'value')
                            const isNull = value.every(function (element) {
                                return element === null;
                            })
                            let str = ''
                            if (!isNull) {
                                value.forEach((item, index) => {
                                    if (index !== value?.length - 1) {
                                        str = str + item?.label + ':';
                                    }
                                    else {
                                        str = str + item?.label
                                    }

                                })
                            }
                            return str
                        }
                    }
                </Picker>
                {/* <DatePicker
                    visible={pickerVisible}
                    precision='second'
                    onClose={() => {
                        setPickerVisible(false)
                    }}
                >
                    {value =>
                        value ? dayjs(value).format('YYYY-MM-DD hh:mm:ss') : <div style={{ color: '#C0C4CC' }}>{t('请选择日期')}</div>
                    }
                </DatePicker> */}
            </Form.Item>
            <Form.Item
                // visible={form.getFieldValue('isSleep')}
                visible={false}
                name='sleepTime'
                label={t('休眠时间(秒)')}
                childElementPosition='right'
            >
                <Stepper
                    defaultValue={0}
                    min={0} />

            </Form.Item>
        </Form>
    </div>
}


export default SystemSettings;