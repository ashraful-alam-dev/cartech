import DiagnosticTool from './images/Diagnostic_Tool.png'
import PerformanceChip from './images/Performance_Chip.png'
import EVCharger from './images/EV_Charger.png'
import DashCam from './images/Dash_Cam.png'

const products = [
  {
    id: 1,
    name: 'AutoScan Pro',
    price: '$299',
    image: DiagnosticTool,
    description:
      'Professional OBD2 diagnostic scanner with real-time engine data and fault code reading for all vehicle models.',
    category: 'Diagnostics',
    warranty: '2 years'
  },
  {
    id: 2,
    name: 'PowerBoost Tuner',
    price: '$449',
    image: PerformanceChip,
    description:
      'Plug-and-play performance chip that increases horsepower and torque while improving fuel efficiency.',
    category: 'Performance',
    warranty: '3 years'
  },
  {
    id: 3,
    name: 'UltraCharge EV Station',
    price: '$599',
    image: EVCharger,
    description:
      'Fast home charging station for electric vehicles with smart scheduling and energy monitoring features.',
    category: 'EV Solutions',
    warranty: '3 years'
  },
  {
    id: 4,
    name: 'RoadEye 4K Cam',
    price: '$199',
    image: DashCam,
    description:
      'Ultra HD dash camera with night vision, loop recording, and parking mode for complete road safety.',
    category: 'Safety',
    warranty: '1 year'
  }
]

export default products