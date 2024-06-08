import { List, NavBar } from 'antd-mobile';
import { navList } from './data';
import { Link } from 'react-router-dom';
import './main.less';
function Main() {
    const back = () => {
        console.log('返回')
    }
    return <div class='main'>
        <NavBar onBack={back}>设置</NavBar>
        <List mode='card'>
            {
                navList.map(item => {
                    return <Link key={item.key} to={item.key} style={{ color: 'rgb(51, 51, 51)', textDecoration: 'none' }}>
                        <List.Item prefix={item.icon} onClick={() => { }}>
                            {item.name}
                        </List.Item>
                    </Link>

                })
            }
        </List>

    </div>
}

export default Main