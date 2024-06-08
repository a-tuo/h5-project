import { Routes, Route } from 'react-router-dom'
import routerList from './router_list';
function IndexRoute() {
    return (
        <Routes>
            {routerList.map((item, index) => {
                return <Route
                    key={index}
                    path={item.path}
                    axect={item.axect}
                    render={item.render} />
            })}
        </Routes>
    )
}

export default IndexRoute;