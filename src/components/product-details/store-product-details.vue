<style lang="scss">
  @import 'store-product-details';
</style>

<template>
  <div class="store-product-details">
    <div class="details-intro">
      <div class="intro-content flex container">


        <div class="flex4 intro-content-img flex-around-center">
          <img :src="details.image" :alt="details.title">
        </div>


        <div class="flex6 intro-content-description text-white">
          <h1>{{details.title}}</h1>
        </div>


        <div class="flex4 intro-content-pricing">#pricing</div>

      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'StoreProductDetails',
    props: ['details'],
  };

</script>