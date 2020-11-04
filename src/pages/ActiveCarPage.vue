<template>
  <div class="active-car container-fluid shadow col-8 card">
    <img :src="car.imgUrl" alt="" class="img-fluid">
    <h2>{{ car.make }} {{ car.model }} {{ car.year }}</h2>
    <h4>$ {{ car.price }}</h4>
    <p>{{ car.description }}</p>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { carsService } from '../services/CarsService'
import { useRoute } from 'vue-router'

export default {
  name: 'ActiveCar',
  setup() {
    const route = useRoute()
    onMounted(() => {
      carsService.getActiveCar(route.params.carId)
    })
    return {
      car: computed(() => AppState.activeCar)
    }
  }
}
</script>

<style>

</style>
