import { AppState } from '../AppState'

const { api } = require('./AxiosService')

class CarsService {
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
