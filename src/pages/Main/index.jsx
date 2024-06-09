import { List, NavBar } from 'antd-mobile';
import { navList } from './data';
import styles from './main.module.less';
import { useNavigate } from 'react-router-dom';
function Main() {
    const navigate = useNavigate()
    const back = () => {
        console.log('返回')
    }
    return <div className={styles.main}>
        <NavBar onBack={back}>设置</NavBar>
        <div className={styles.content}>
            {
                navList.map(item => {
                    return <List key={item.key} mode="card" header={item.name}>
                        {
                            item.data.map(listItem => {
                                return <List.Item key={listItem.key} prefix={listItem.icon} onClick={() => { navigate(listItem.key) }}>
                                    {listItem.name}
                                </List.Item>
                            })
                        }
                    </List>
                })
            }
        </div>
    </div>
}

export default Main