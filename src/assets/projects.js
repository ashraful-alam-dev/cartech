import DiagnosticTool from './images/Diagnostic_Tool.png'
import PerformanceChip from './images/Performance_Chip.png'
import EVCharger from './images/EV_Charger.png'
import DashCam from './images/Dash_Cam.png'

const projects = [
{
id: 1,
name: 'AutoScan Pro',
image: DiagnosticTool,
description:
'Professional OBD2 diagnostic scanner designed to enhance the driving experience with real-time engine data, fault code reading, and predictive maintenance alerts.',
category: 'Diagnostics',
features: ['Real-time data', 'Predictive maintenance'],
Progress: 78
},
{
id: 2,
name: 'PowerBoost Tuner',
image: PerformanceChip,
description:
'Plug-and-play performance chip that increases horsepower and torque while improving fuel efficiency and engine responsiveness.',
category: 'Performance',
features: ['Horsepower boost', 'Fuel efficiency'],
Progress: 86
},
{
id: 3,
name: 'UltraCharge EV Station',
image: EVCharger,
description:
'Fast home charging station for electric vehicles with smart scheduling, energy monitoring, and adaptive charging for battery longevity.',
category: 'EV Solutions',
features: ['Smart scheduling', 'Battery longevity'],
Progress: 95
},
{
id: 4,
name: 'RoadEye 4K Cam',
image: DashCam,
description:
'Ultra HD dash camera with night vision, loop recording, parking mode, and collision detection for complete road safety.',
category: 'Safety',
features: ['Night vision', 'Collision detection'],
Progress: 60
}
]

export default projects
