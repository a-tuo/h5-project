import Index from '../pages/Main/index';
import SystemSettings from '../pages/system-settings/index';
import NetworkSetting from '../pages/network-settings/index';
import RecognitionSettings from '../pages/recognition-settings/index';
import TimePeriodSetting from '../pages/time-period-setting/index';
import PersonnelFiles from '../pages/personnel-files/index';
import IdentificationRecord from '../pages/identification-record/index';
import Administrators from '../pages/administrators/index';
import SystemLog from '../pages/system-log/index';
import SystemMaintenance from '../pages/system-maintenance/index';
import AboutDevices from '../pages/about-devices/index';
import WifiNetwork from '../pages/wifi-network';
import WifiNetworkDetail from '../pages/wifi-network-detail/index';
import NthernetNetwork from '../pages/nthernet-network/index';
import NthernetNetworkDetail from '../pages/nthernet-network-detail/index';
import MenuPermission from '../pages/menu-permission/index';
import Multilingual from '../pages/multi-lingual';
const routerList = [
    {
        path: '/',
        element: <Index />
    },
    {
        path: '/system-settings',
        element: <SystemSettings />
    },
    {
        path: '/network-settings',
        element: <NetworkSetting />
    },
    {
        path: '/recognition-settings',
        element: <RecognitionSettings />
    },
    {
        path: '/time-period-setting',
        element: <TimePeriodSetting />
    },
    {
        path: '/personnel-files',
        element: <PersonnelFiles />
    },
    {
        path: '/identification-record',
        element: <IdentificationRecord />
    },
    {
        path: '/administrators',
        element: <Administrators />
    },
    {
        path: '/system-log',
        element: <SystemLog />
    },
    {
        path: '/system-maintenance',
        element: <SystemMaintenance />
    },
    {
        path: '/about-devices',
        element: <AboutDevices />
    },
    {
        path: '/wifi-network',
        element: <WifiNetwork />
    },
    {
        path: '/wifi-network-detail',
        element: <WifiNetworkDetail />
    },
    {
        path: '/ethernet-network',
        element: <NthernetNetwork />
    },
    {
        path: '/ethernet-network-detail',
        element: <NthernetNetworkDetail />
    },
    {
        path: '/menu-permission',
        element: <MenuPermission />
    },
    {
        path: '/multi-lingual',
        element: <Multilingual />
    }
];

export default routerList