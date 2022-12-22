<template>
  <div class="countries-wrapper">
    <h3>Country Listing</h3>
    <!-- On form submit, make an API call to the country name search endpoint -->
    <form id="country-search-form" @submit.prevent="handleSubmit">
      <fieldset>
        <!-- Label for accessibility -->
        <label for="searchTerm" class="sr-only">Search countries by name</label>
        <input
          id="searchTerm"
          ref="searchInput"
          v-model="searchTerm"
          placeholder="Search countries by name"
          type="text"
          required
          @input="handleInput"
        >
        <button id="search-button" type="submit">
          Search
        </button>
      </fieldset>
    </form>
    <!-- If error, show error -->
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
    <!-- Otherwise, show loader, search results, or all countries -->
    <div v-else>
      <div v-if="isLoading" class="spinner" />
      <div v-else>
        <!-- if there are search results -->
        <div v-show="searchResults.length">
          <h3>Search results:</h3>
          <div class="countries">
            <SingleCountry v-for="country in searchResults" :key="country.ccn3" :country="country" />
          </div>
        </div>
        <!-- v-show for faster rendering -->
        <div v-show="!searchResults.length">
          <h3>All countries</h3>
          <div class="countries">
            <SingleCountry v-for="country in allCountries" :key="country.ccn3" :country="country" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, ref } from 'vue'
  import SingleCountry from '@/components/Exercise-3/SingleCountry.vue'
  import { Country } from '@/types/Exercise-3/Country'

  // ref to focus onMounted for accessibility
  const searchTerm = ref('')
  const allCountries: Country[] = reactive([])
  let searchResults: Country[] = reactive([])
  const url = 'https://restcountries.com/v3.1/all'

  // to control appearance of loading spinner
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const searchInput = ref<HTMLElement | null>(null)

  // function to alphabetize the countries array of objects by country name
  function alphabetize(countryA: Country, countryB: Country): number {
    if (countryA.name.common < countryB.name.common) {
      return -1
    }
    if (countryA.name.common > countryB.name.common) {
      return 1
    }
    return 0
  }

  // ideally would combine this function and the anonymous function passed to onMounted into a single function with url param
  async function handleSubmit(): Promise<void> {
    let searchUrl = `https://restcountries.com/v3.1/name/${searchTerm.value}`
    isLoading.value = true
    try {
      const response = await fetch(searchUrl)
      let data = await response.json()

      // if call was ok, clear search results array and push new data onto it
      if (response.ok) {
        data = data.sort(alphabetize)
        // splice(0) to clear reactive([])
        searchResults.splice(0)
        searchResults.push(...data)
        // clear error message in case it has a value
        error.value = ''
      } else {
        // otherwise throw error
        throw new Error(response.statusText)
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'Something went wrong'
      }
    }
    isLoading.value = false
  }

  // if input is empty after input event, clear search results array so all countries show again
  function handleInput(): void {
    if (searchTerm.value === '') {
      searchResults.splice(0)
      error.value = ''
    }
  }

  // on mounted load all country data. same structure as handleSubmit function
  onMounted(async () => {
    isLoading.value = true

    try {
      const response = await fetch(url)
      let data = await response.json()

      if (response.ok) {
        data = data.sort(alphabetize)
        allCountries.push(...data)
      } else {
        throw new Error(response.statusText)
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'Something went wrong'
      }
    }

    isLoading.value = false
    // focus input on page load
    searchInput.value?.focus()
  })
</script>

<style lang="scss">
#country-search-form {
  margin-bottom: 20px;

  input[type="text"] {
    padding: 12px 20px;
    min-width: 200px;
  }

  fieldset {
    border: none;
    display: flex;
  }

  #search-button {
    min-width: 100px;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
  }
}
.countries-wrapper {
    padding: 20px;

    h3 {
      margin: 0 0 20px
    }
}
  .countries {
    display: grid;
    gap: 1rem;
  }

  @media(min-width: 500px) {
    .countries {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media(min-width: 1024px) {
    .countries {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  /* screen reader only class */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  /* SPINNER */
.spinner {
  display: block;
  width: 80px;
  height: 80px;
  margin: 1rem auto;
}
.spinner:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid gray;
  border-color: gray transparent gray transparent;
  animation: spin 1.2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>