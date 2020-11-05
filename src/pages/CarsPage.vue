<template>
  <div class="cars-page container-fluid">
    <form class="form-group row justify-content-center" @submit.prevent="createCar">
      <div class="col-8">
        <input type="text"
               class="form-control"
               placeholder="Make"
               v-model="state.newCar.make"
        >
        <input type="text"
               class="form-control"
               placeholder="Model"
               v-model="state.newCar.model"
        ><input type="text"
                class="form-control"
                placeholder="Description"
                v-model="state.newCar.description"
        >
        <input type="number"
               class="form-control"
               placeholder="Year"
               v-model="state.newCar.year"
        >
        <input type="number"
               class="form-control"
               placeholder="Price"
               v-model="state.newCar.price"
        >
        <input type="text"
               class="form-control"
               placeholder="Image"
               v-model="state.newCar.imgUrl"
        >
        <button class="btn btn-info rounded" type="submit">
          Add
        </button>
      </div>
    </form>
    <h2>Car Results:</h2>
    <div class="row m-1 justify-content-center">
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
      newCar: {}
    })
    onMounted(() => {
      carsService.getAllCars()
    })
    return {
      state,
      cars: computed(() => AppState.cars),
      createCar() {
        carsService.createCar(state.newCar)
      }
    }
  }
}
</script>

<style>

</style>
