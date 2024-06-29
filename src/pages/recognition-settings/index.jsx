import { NavBar, Form, Button, Radio, Space, Stepper, Switch, CheckList } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../i18n/config';
import styles from './index.module.less';
import arrow from '../../images/arrow.png';
function RecognitionSettings() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [form] = Form.useForm();
    const back = () => {
        navigate(-1)
    }
    const onFinish = () => {

    }

    const renderRadio = (checked) => {
        return checked ? (
            <img src={arrow} className={styles.arrow} />
        ) : <div className={styles.arrow} />
    }
    return <div className={styles.main}>
        <NavBar onBack={back} right={<Button size='small' color='primary'>保存</Button>}>{t('识别设置')}</NavBar>
        <Form
            mode="card"
            form={form}
            layout='horizontal'
            onFinish={onFinish}
            style={{
                "--prefix-width":'170px'
            }}
            initialValues={{
                light: "good",
                recognition: 0,
                result: 1,
                repeat: 0,
                recognition: 0,
                photo: true
            }}>
            <Form.Item name="light" label="环境光线较好" valuePropName='checked' childElementPosition="right">
                <Switch />
                {/* <Radio.Group>
                    <Space direction='vertical'>
                        <Radio value='good' icon={checked => renderRadio(checked)}>{t('较好')}</Radio>
                        <Radio value='common' icon={checked => renderRadio(checked)}>{t('一般')}</Radio>
                    </Space>
                </Radio.Group> */}
            </Form.Item>
            <Form.Header />
            <Form.Item
                name="recognition"
                label={t('识别距离(cm)')}
                childElementPosition='right'>
                <Stepper
                    onChange={value => {
                        console.log(value, typeof value)
                    }}
                />
            </Form.Item>
            <Form.Header />
            <Form.Item
                name="result"
                childElementPosition='right'
                label={t('结果显示延时(秒)')}>
                <Stepper
                    min={1}
                    max={120}
                />
            </Form.Item>
            <Form.Item
                name="repeat"
                childElementPosition='right'
                label={t('重复识别间隔(秒)')}>
                <Stepper
                    min={0}
                    max={10000}
                />
            </Form.Item>
            <Form.Item
                name="recognition"
                childElementPosition='right'
                label={t('任意识别间隔(秒)')}>
                <Stepper
                    min={0}
                    max={10000}
                />
            </Form.Item>
            <Form.Header />
            <Form.Item name="photo" label={t('抓拍图片')} childElementPosition='right' valuePropName="checked">
                <Switch />
            </Form.Item>
        </Form>
    </div>
}

export default RecognitionSettings