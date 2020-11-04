import { AppState } from '../AppState'
import router from '../router'

const { api } = require('./AxiosService')

class CarsService {
  async removeCar(carId) {
    try {
      if (window.confirm('Are you sure you want to delete?')) {
        await api.delete('/cars/' + carId)
        router.push({ name: 'Cars' })
      }
    } catch (error) {
      console.error(error)
    }
  }

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
