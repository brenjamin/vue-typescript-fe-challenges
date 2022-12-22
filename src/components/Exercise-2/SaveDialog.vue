<template>
  <div class="dialog__wrapper">
    <!-- Dialog with role of dialog and label for accessibility -->
    <div class="dialog" role="dialog" aria-labelledby="saveDialogQuestion">
      <p id="saveDialogQuestion">
        {{ text }}
      </p>
      <div class="dialog__buttons">
        <button ref="saveButton" class="dialog__button dialog__button--save" type="button" @click="closeDialog">
          Save
        </button>
        <button class="dialog__button dialog__button--discard" type="button" @click="closeDialog(false)">
          Discard
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  // npm package
  import { closeDialog } from 'vue3-promise-dialog'

  defineProps({
    text: {
      type: String,
      default: 'Do you want to save your work?',
    },
  })

  // focus when component mounts
  const saveButton = ref<HTMLElement | null>(null)

  // needed for vue-3promise-dialog plugin
  function returnValue(): boolean {
    return true
  }

  onMounted(() => {
    // focus delete button when dialog is mounted
    saveButton.value?.focus()
    // prevent scrolling
    document.documentElement.style.overflow = 'hidden'
  })
</script>

<style lang="scss" scoped>
    /* I've begun to repeat myself with the different dialogs and buttons across components. In a real-world setting, I would clean all of this up to keep my code DRY. */
    .dialog__wrapper {
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        z-index: 100;
        justify-content: center;
        padding: 40px 16px 0;
        align-items: flex-start;
        background-color: rgba(0,0,0,.1);
        font-weight: 600;
    }
    .dialog {
        background-color: white;
        border-radius: 4px;
        height: auto;
        padding: 20px 30px 30px;
        width: 400px;
        max-width: 100%;
        box-shadow: 0px 0px 3px 1px rgba(0,0,0,.1);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .dialog__buttons {
        display: flex;
        gap: 14px;
    }

    .dialog__button {
        cursor: pointer;
        border-radius: 5px;
        width: 112px;
        height: 42px;
        font-weight: 600;
        background-color: transparent;
        font-size: 1rem;
        font-family: inherit;
        border: none;

        &--save {
            background-color: #76d7c4;
            color: white;
            &:hover {
                background-color: lighten(#76d7c4, 5%);
            }
        }

        &--discard {
            background-color: #e4e4e4;
            &:hover {
                background-color: lighten(#e4e4e4, 5%);
            }
        }

    }
    // styling for button that are focused using javascript
    button:focus {
        outline: 5px auto Highlight;
        outline: 5px auto -webkit-focus-ring-color;
    }
</style>