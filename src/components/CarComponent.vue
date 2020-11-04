<template>
  <div class="car-component col-4 card shadow text-center">
    <router-link :to="{name: 'ActiveCar', params: {carId: carProp._id}}">
      <img :src="carProp.imgUrl" alt="car image" class="img-fluid">
    </router-link>
    <h4>
      {{ carProp.make }}, {{ carProp.model }}
    </h4>
    {{ carProp }}
  </div>
</template>

<script>
import { carsService } from '../services/CarsService'

export default {
  name: 'CarComponent',
  props: ['carProp'],
  setup(props) {
    return {
      setActiveCar() {
        // router.push({ name: 'ActiveCar', params: { carId: props.carProp._id } })
        carsService.setActiveCar(props.carProp)
      }
    }
  }
}
</script>

<style>

</style>
