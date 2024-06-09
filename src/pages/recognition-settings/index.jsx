import { NavBar, Form, Button, Radio, Space, Stepper, Switch } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../i18n/config'
import styles from './index.module.less'
function RecognitionSettings() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [form] = Form.useForm();
    const back = () => {
        navigate(-1)
    }
    const onFinish = () => {

    }
    return <div className={styles.main}>
        <NavBar onBack={back}>{t('识别设置')}</NavBar>
        <Form
            mode="card"
            form={form}
            layout='horizontal'
            onFinish={onFinish}
            footer={
                <Button block type='submit' color='primary' size='large'>
                    {t('保存')}
                </Button>
            }>
            <Form.Header>{t('环境光线')}</Form.Header>
            <Form.Item name="light">
                <Radio.Group defaultValue='1'>
                    <Space direction='vertical'>
                        <Radio value='1'>{t('较好')}</Radio>
                        <Radio value='2'>{t('一般')}</Radio>
                    </Space>
                </Radio.Group>
            </Form.Item>
            <Form.Header />
            <Form.Item
                name="recognition"
                label={t('识别距离')}
                childElementPosition='right'>
                <Stepper
                    defaultValue={0}
                    formatter={value => `${value}cm`}
                    parser={text => parseFloat(text.replace('cm', ''))}
                    onChange={value => {
                        console.log(value, typeof value)
                    }}
                />
            </Form.Item>
            <Form.Header>{t('时间设置')}</Form.Header>
            <Form.Item
                name="result"
                childElementPosition='right'
                label={t('结果显示延时')}>
                <Stepper
                    defaultValue={1}
                    min={1}
                    max={120}
                    formatter={value => `${value}s`}
                />
            </Form.Item>
            <Form.Item
                name="repeat"
                childElementPosition='right'
                label={t('重复识别间隔')}>
                <Stepper
                    defaultValue={0}
                    min={0}
                    max={10000}
                    formatter={value => `${value}s`}
                    onChange={value => {
                        console.log(value, typeof value, '1');
                    }}
                />
            </Form.Item>
            <Form.Item
                name="recognition "
                childElementPosition='right'
                label={t('任意识别间隔')}>
                <Stepper
                    defaultValue={0}
                    min={0}
                    max={10000}
                    formatter={value => `${value}s`}
                    onChange={value => {
                        console.log(value, typeof value, '2');
                    }}
                />
            </Form.Item>
            <Form.Item name="light" label={t('抓拍图片')} childElementPosition='right'>
                <Switch />
            </Form.Item>
        </Form>
    </div>
}

export default RecognitionSettings