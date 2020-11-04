import { AppState } from '../AppState'
// import router from '../router'

const { api } = require('./AxiosService')

class CarsService {
  async getActiveCar(carId) {
    try {
      const res = await api.get('/cars/' + carId)
      // console.log(res.data)
      AppState.activeCar = res.data.data
    } catch (error) {
      console.error(error)
    }
  }

  setActiveCar(carData) {
    try {
      AppState.activeCar = carData
      console.log(AppState.activeCar)
    } catch (error) {
      console.error(error)
    }
  }

  async getAllCars() {
    try {
      const res = await api.get('/cars')
      // console.log(res.data.data)
      AppState.cars = res.data.data
    } catch (error) {
      console.error(error)
    }
  }
}

export const carsService = new CarsService()
