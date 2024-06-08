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
    }
];

export default routerList