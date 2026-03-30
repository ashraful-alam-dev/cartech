import TeslaModelS from './images/Tesla_Model_S.png'
import BMWM4 from './images/BMW_M4.png'
import MercedesCClass from './images/Mercedes_C_Class.png'
import AudiR8 from './images/Audi_R8.png'
import LamborghiniHuracan from './images/Lamborghini_Huracan.png'

const cars = [
  {
    id: 1,
    name: 'Tesla Model S',
    brand: 'Tesla',
    price: '$85,000',
    image: TeslaModelS,
    description:
      'A luxury electric sedan with premium features, a minimalist interior, and impressive acceleration.',
    colors: ['Red', 'Black', 'White', 'Silver'],
    fuelType: 'Electric',
    transmission: 'Automatic',
    mileage: '405 miles (EPA est.)',
    topSpeed: '200 mph',
    horsepower: '670 hp',
    seating: 5,
    year: 2025,
    rating: 4.9
  },
  {
    id: 2,
    name: 'BMW M4',
    brand: 'BMW',
    price: '$72,000',
    image: BMWM4,
    description:
      'A high-performance coupe with sporty styling, aggressive handling, and a luxurious cabin experience.',
    colors: ['Blue', 'Black', 'White', 'Gray'],
    fuelType: 'Petrol',
    transmission: 'Automatic',
    mileage: '16 mpg city / 23 mpg highway',
    topSpeed: '180 mph',
    horsepower: '503 hp',
    seating: 4,
    year: 2024,
    rating: 4.8
  },
  {
    id: 3,
    name: 'Mercedes C-Class',
    brand: 'Mercedes',
    price: '$58,000',
    image: MercedesCClass,
    description:
      'An elegant luxury sedan featuring advanced technology, premium comfort, and a refined driving experience.',
    colors: ['White', 'Black', 'Silver', 'Navy Blue'],
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    mileage: '25 mpg city / 35 mpg highway',
    topSpeed: '155 mph',
    horsepower: '255 hp',
    seating: 5,
    year: 2025,
    rating: 4.7
  },
  {
    id: 4,
    name: 'Audi R8',
    brand: 'Audi',
    price: '$120,000',
    image: AudiR8,
    description:
      'A premium sports car with breathtaking performance, bold styling, and a powerful V10 engine.',
    colors: ['Yellow', 'Black', 'Red', 'Silver'],
    fuelType: 'Petrol',
    transmission: 'Automatic',
    mileage: '13 mpg city / 20 mpg highway',
    topSpeed: '205 mph',
    horsepower: '602 hp',
    seating: 2,
    year: 2024,
    rating: 5.0
  },
  {
    id: 5,
    name: 'Lamborghini Huracán',
    brand: 'Lamborghini',
    price: '$250,000',
    image: LamborghiniHuracan,
    description:
      'An iconic supercar with extreme performance, exotic styling, and an unforgettable driving experience.',
    colors: ['Orange', 'Green', 'Black', 'White'],
    fuelType: 'Petrol',
    transmission: 'Automatic',
    mileage: '13 mpg city / 18 mpg highway',
    topSpeed: '202 mph',
    horsepower: '631 hp',
    seating: 2,
    year: 2025,
    rating: 5.0
  }
]

export default cars