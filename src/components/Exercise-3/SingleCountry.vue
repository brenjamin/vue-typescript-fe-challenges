<template>
  <div class="country">
    <div class="country__flag">
      <div class="country__flag-wrapper">
        <img :src="country.flags.svg" :alt="`flag of ${country.name.common}`">
      </div>
    </div>
    <h4 class="country__name">
      {{ country.name.common }}
    </h4>
    <div class="country__details">
      <p class="country__population">
        <FontAwesomeIcon class="fa-sm" :icon="['fas', 'user']" />
        Population: {{ Number(country.population).toLocaleString() }}
      </p>
      <p class="country__region" />
      <FontAwesomeIcon class="fa-sm" :icon="['fas', 'globe']" />
      Region: {{ country.region }}
      <p class="country__capital">
        <FontAwesomeIcon class="fa-sm" :icon="['fas', 'landmark']" />
        Capital: {{ country.capital ? country.capital[0] : 'N/A' }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import { PropType } from 'vue'
  import { Country } from '@/types/Exercise-3/Country'

  defineProps({
    country: {
      type: Object as PropType<Country>,
      required: true,
    },
  })
</script>

<style lang="scss">
.country {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 4px;

  &__flag {

    &-wrapper {
      width: 100%;
      padding-bottom: 56.25%;
      position: relative;
      overflow: hidden;
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;

    }
  }

&__name {
  padding: 0 8px
}

    &__details {
      font-size: .875rem;
      padding: 0 8px 8px
    }
}
</style>
