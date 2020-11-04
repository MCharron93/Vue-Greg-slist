<template>
  <div class="car-component col-4 card shadow text-center">
    <img :src="carProp.imgUrl" alt="car image" class="img-fluid" @click="setActiveCar">
    <h4>
      {{ carProp.make }}, {{ carProp.model }}
    </h4>
  </div>
</template>

<script>
export default {
  name: 'CarComponent',
  props: ['carProp'],
  setup() {

  }
}
</script>

<style>

</style>
