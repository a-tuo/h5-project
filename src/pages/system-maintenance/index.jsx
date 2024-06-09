import { NavBar, List, Dialog, Toast, Stepper, ImageUploader } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react';
import styles from './index.module.less';
import {
    UnorderedListOutline,
    ExclamationShieldOutline,
    SetOutline,
    ExclamationTriangleOutline,
    FileOutline,
    MovieOutline,
    CheckShieldFill
} from 'antd-mobile-icons';
import { useTranslation } from 'react-i18next';
import '../../i18n/config'
function SystemMaintenance() {
    const navicate = useNavigate();
    const [fileList, setFileList] = useState([]);
    const { t } = useTranslation();
    const input = useRef(null);
    const back = () => {
        navicate(-1)
    }
    const handleClearFactory = () => {
        Dialog.confirm({
            content: t('是否清空出厂设置'),
            onConfirm: async () => {
                Toast.show({
                    // TODO:
                    icon: 'success',
                    content: t('恢复出厂设置成功'),
                    position: 'bottom',
                })
            },
        })
    }
    const handleClearFile = () => {
        Dialog.confirm({
            content: t('是否清空档案'),
            onConfirm: async () => {
                Toast.show({
                    // TODO:
                    icon: 'success',
                    content: t('清空档案成功'),
                    position: 'bottom',
                })
            },
        })
    }

    const handleRestoreFactory = () => {
        Dialog.confirm({
            content: '是否清空出厂设置',
            onConfirm: async () => {
                Toast.show({
                    // TODO:
                    icon: 'success',
                    content: '清空出厂设置成功',
                    position: 'bottom',
                })
            },
        })
    }
    const handleRestoreRecord = () => {
        Dialog.confirm({
            header: <div>
                <CheckShieldFill style={{
                    color: '#409EFF',
                    marginRight: '10px',
                    fontSize: '20px'
                }} />
                选择恢复条数
            </div>,
            content: <div className={styles.restoreContent}>
                <div className='label'>恢复条数：</div>
                <Stepper
                    defaultValue={1}
                    onChange={value => {
                        console.log(value, typeof value)
                    }}
                />
            </div>,
            onConfirm: async () => {
                Toast.show({
                    // TODO:
                    icon: 'success',
                    content: '清空出厂设置成功',
                    position: 'bottom',
                })
            },
        })
    }

    const handleOpen = () => {
        const nativeInput = input.current?.nativeElement
        if (nativeInput) {
            nativeInput.click()
        }
    }

    const handleRestorArchive = () => {
        Dialog.confirm({
            content: t('是否恢复档案'),
            onConfirm: async () => {
                Toast.show({
                    icon: 'success',
                    content: t('恢复档案成功'),
                    position: 'bottom',
                })
            },
        })
    }
    return <div className={styles.main}>
        <NavBar className='top' onBack={back}>{t('系统维护')}</NavBar>
        <List mode="card">
            <List.Item prefix={<ExclamationShieldOutline />} onClick={handleClearFactory}>{t('清空出厂设置')}</List.Item>
            <List.Item prefix={<UnorderedListOutline />} onClick={handleClearFile}>{t('清空档案')}</List.Item>
            <List.Item prefix={<SetOutline />} onClick={handleRestoreFactory}>{t('恢复出厂设置')}</List.Item>
            <List.Item prefix={<ExclamationTriangleOutline />} onClick={handleRestoreRecord}>{t('恢复记录')}</List.Item>
            <List.Item prefix={<FileOutline />} onClick={handleRestorArchive}>{t('恢复档案')}</List.Item>
            <List.Item prefix={<MovieOutline />} onClick={handleOpen}>{t('设备升级')}</List.Item>
            <div style={{
                display: 'none',
            }}>
                <ImageUploader
                    ref={input}
                    value={fileList}
                    onChange={setFileList}
                />
            </div>

        </List>
    </div>
}
export default SystemMaintenance