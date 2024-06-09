import { NavBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import { CloseCircleFill } from 'antd-mobile-icons'
import { useState } from 'react';
import { Form, Input, Stepper, Button, Slider, Switch, DatePicker } from 'antd-mobile'
import dayjs from 'dayjs';
import styles from './index.module.less';
import { useTranslation } from 'react-i18next';
import '../../i18n/config'
function SystemSettings(props) {
    const { t } = useTranslation();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [pickerVisible, setPickerVisible] = useState(false);
    const back = () => {
        navigate(-1)
    }
    const onFinish = () => {
        const values = form.getFieldsValue()
    }
    return <div className={styles.main}>
        <NavBar onBack={back}>{t('系统设置')}</NavBar>
        <Form
            mode='card'
            onFinish={onFinish}
            form={form}
            layout='horizontal'
            footer={
                <Button block type='submit' color='primary' size='large'>
                    {t('保存')}
                </Button>
            }
        >
            <Form.Header>{t('设备设置')}</Form.Header>
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
            >
                <Switch />
            </Form.Item>
            <Form.Item
                name='restartTime'
                label={t('重启时间')}
                trigger='onConfirm'
                arrow={
                    form.getFieldValue('restartTime') ? (
                        <CloseCircleFill
                            style={{
                                // color: 'var(--adm-color-light)',
                                fontSize: 14,
                            }}
                            onClick={e => {
                                e.stopPropagation()
                                form.setFieldsValue({ restartTime: null })
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
                        value ? dayjs(value).format('YYYY-MM-DD hh:mm:ss') : <div style={{ color: '#C0C4CC' }}>{t('请选择日期')}</div>
                    }
                </DatePicker>
            </Form.Item>
            <Form.Item
                name='sleepTime'
                label={t('休眠时间(秒)')}
                childElementPosition='right'
                rules={[{
                    required: true,
                    message: t('休眠时间不能为空')
                }]}
            >
                <Stepper
                    defaultValue={0}
                    min={0}
                    formatter={value => `${value}s`} />
            </Form.Item>
        </Form>
    </div>
}


export default SystemSettings;