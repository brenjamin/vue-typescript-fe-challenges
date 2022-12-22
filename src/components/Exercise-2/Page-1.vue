<template>
  <div class="page-1">
    <h3 class="page-1__title">
      Page 1
    </h3>
    <textarea v-model="input" rows="4" class="page-1__textarea" placeholder="Type something here..." />
    <RippleButton class="page-1__save-button" :disabled="inputMatches" @click="save">
      Save
    </RippleButton>
  </div>
  <!-- Dialog Wrapper component from vue-3-promise-dialog package -->
  <DialogWrapper />
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue'
  import { onBeforeRouteLeave } from 'vue-router'
  // https://stackblitz.com/edit/vitejs-vite-nzzfdg?&terminal=dev for example of vue3-promise-dialog usage
  import { DialogWrapper } from 'vue3-promise-dialog'
  import { confirm } from '../../types/Exercise-2/Dialog'
  import RippleButton from '@/components/RippleButton.vue'
  import { useSavedInput } from '@/stores/savedInput'

  const savedInputStore = useSavedInput()
  const input = ref(savedInputStore.input ?? null)

  const inputMatches = computed(() => input.value === savedInputStore.input)

  const save = (): void => {
    savedInputStore.save(input.value)
  }

  async function openDialog(): Promise<void> {
    // if Promise resolves to true, then save the input
    if (await confirm('Do you want to save your work?')) {
      save()
    }
  }

  // before leaving route
  onBeforeRouteLeave(async (to, from, next) => {
    // only if value has not been saved
    if (!inputMatches.value) {
      // open dialog and await response
      await openDialog()
    }
    // allow scrolling again
    document.documentElement.style.overflow = 'scroll'
    // continue to next route
    next()

  })
</script>

<style lang="scss">
.page-1 {
  text-align: center;
}

.page-1__textarea {
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  margin: auto;
  outline-color: #76d7c4;
  overflow: auto;
  padding: 24px;
  resize: none;
  width: 85%;
}
</style>