<template>
  <div class="cars-page container-fluid">
    <h2>Car Results:</h2>
    <div class="row m-1 justify-content-between">
      <car-component v-for="car in cars" :key="car._id" :car-prop="car" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { carsService } from '../services/CarsService'
import CarComponent from '../components/CarComponent'

export default {
  name: 'CarsPage',
  components: { CarComponent },
  setup() {
    const state = reactive({

    })
    onMounted(() => {
      carsService.getAllCars()
    })
    return {
      state,
      cars: computed(() => AppState.cars)
    }
  }
}
</script>

<style>

</style>
