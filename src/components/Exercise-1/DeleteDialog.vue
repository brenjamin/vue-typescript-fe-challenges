<template>
  <div class="dialog__wrapper">
    <!-- Dialog with role of dialog and label for accessibility -->
    <div class="dialog" role="dialog" aria-labelledby="deleteDialogQuestion">
      <p id="deleteDialogQuestion">
        Are you sure you want to delete {{ selectedMessages.length }} message{{ selectedMessages.length > 1 ? 's' : '' }}?
      </p>
      <div class="dialog__buttons">
        <button ref="deleteButton" class="dialog__button dialog__button--danger" type="button" @click="handleDelete">
          <FontAwesomeIcon class="fa-sm" :icon="['fas', 'trash']" />
          Delete
        </button>
        <button class="dialog__button dialog__button--cancel" type="button" @click="handleCancel">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { onMounted, ref, PropType } from 'vue'
  import { Message } from '@/types/Exercise-1/Message'

  defineProps({
    selectedMessages: {
      type: Array as PropType<Message[]>,
      default: () => [],
    },
  })

  // add delete button as ref so it can be focused when component is mounted (for accessibility)
  const deleteButton = ref<HTMLElement | null>(null)

  const emit = defineEmits(['delete-selected', 'cancel-delete'])

  // re-allow scrolling (for when dialog is closed)
  function allowScrolling(): void {
    document.documentElement.style.overflow = 'scroll'
  }

  function handleDelete(): void {
    allowScrolling()
    emit('delete-selected')
  }

  function handleCancel(): void {
    allowScrolling()
    emit('cancel-delete')
  }

  onMounted(() => {
    // focus delete button when dialog is mounted
    deleteButton.value?.focus()
    // prevent scrolling
    document.documentElement.style.overflow = 'hidden'
  })
</script>

<style lang="scss">
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
        box-sizing: border-box;
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

        & > svg {
            margin-right: 5px;
        }

        &--danger {
            background-color: #D0342C;
            color: white;
            &:hover {
                background-color: lighten(#D0342C, 5%);
            }
        }

        &--cancel {
            background-color: #e4e4e4;
            &:hover {
                background-color: lighten(#e4e4e4, 5%);
            }
        }

    }
    // styling for buttons that are focused using javascript
    button:focus {
        outline: 5px auto Highlight;
        outline: 5px auto -webkit-focus-ring-color;
    }
</style>