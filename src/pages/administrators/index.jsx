import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';
import { NavBar, SearchBar, List, Avatar, Popup } from 'antd-mobile';
import { useTranslation } from 'react-i18next';
import { AddOutline, MoreOutline, EditSOutline, DeleteOutline, FillinOutline } from 'antd-mobile-icons'
import '../../i18n/config';
import { useState } from 'react';
function Administrators() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [popVisible, setPopVisble] = useState(false);
    const [currentData, setCurrentData] = useState();
    const transformNum = {
        name: '姓名',
        password: "密码"
    }
    const data = [
        {
            key: 'edit',
            text: '修改',
            icon: () => {
                return <EditSOutline />
            }
        },
        {
            key: 'delete',
            text: '删除',
            icon: () => {
                return <DeleteOutline />
            }
        },
        {
            key: 'menuPermissions',
            text: '权限编辑',
            icon: () => {
                return <FillinOutline />
            }
        },
    ]
    const useData = [
        {
            key: '1',
            name: '海绵宝宝',
            password: "123456hmbb"
        },
        {
            key: '2',
            name: '张三',
            password: "szrte123456"
        },
        {
            key: '3',
            name: '李四',
            password: "5235235"
        },
        {
            key: '4',
            name: '王五',
            password: "414325254354"
        },
        {
            key: '5',
            name: '刘久',
            password: "cwewevw14314"
        },
    ]
    const back = () => {
        navigate(-1)
    }
    const handleClickMore = () => {

    }

    const handleItemMore = (item) => {
        console.log(item, 'item')
        setCurrentData(item)
        setPopVisble(true)
    }

    const handleEdit = (item) => {
        console.log(item, 'item')
        setPopVisble(false)
        console.log('编辑')
        navigate('/menu-permission', { state: { data: currentData } })
        // navigate('/menu-permission', { state: { data: item } })
    }

    const handleCancle = () => {
        setPopVisble(false)
    }
    return <div className={styles.main}>
        <NavBar className='top' onBack={back}>{t('管理员')}</NavBar>
        <div className={styles.content}>
            <div className={styles.search}>
                <SearchBar placeholder={t('请输入名称')} className={styles.input} />
                <div className={styles.more} onClick={handleClickMore}>
                    <span style={{ marginRight: '5px' }}>{t('增加')}</span>
                    <AddOutline /></div>
            </div>
            {
                useData.map(item => {
                    return <List key={item.key}>
                        <List.Item
                            prefix={<Avatar src='' />}
                            description={`密码:${item.password}`}
                        >
                            <div className={styles.listContent}>
                                <div className={styles.name}>{item.name}</div>
                                {/* <div className={styles.more}>
                                </div> */}
                                <MoreOutline onClick={() => { handleItemMore(item) }} />
                            </div>
                        </List.Item>
                    </List>

                })
            }
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
                        return <div className={styles.popupItem} key={item.key} onClick={handleEdit}>
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
    </div>
}

export default Administrators