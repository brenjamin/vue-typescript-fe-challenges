<template>
  <div class="inbox-list">
    <div class="inbox-list__top-bar">
      <div class="inbox-list__title">
        <!-- Slot with default content; removed selectedMessagesLabel computed property and refactored to use v-if/else -->
        <slot v-if="!selectedMessages.length" name="title">
          Inbox
        </slot>
        <p v-else>
          {{ selectedMessages.length }} {{ toPlural('message', selectedMessages.length) }} selected
        </p>
      </div>
      <!-- Show delete button if any messages are selected -->
      <div v-show="selectedMessages.length" class="inbox-list__delete">
        <button type="button" class="inbox-list__button" @click="showDeleteDialog = true">
          <FontAwesomeIcon class="fa-sm" :icon="['fas', 'trash']" />
          Delete
        </button>
      </div>
      <div class="inbox-list__actions">
        <FontAwesomeIcon class="fa-lg" :icon="['fas', 'search']" />
        <FontAwesomeIcon class="fa-lg" :icon="['fas', 'ellipsis-v']" />
      </div>
    </div>

    <div class="inbox-list__messages">
      <MessageItem
        v-for="message in messages"
        :key="message.id"
        :message="message"
        :selected="selectedMessages.includes(message)"
        @update:selected="toggleSelection(message, $event)"
      />
    </div>
  </div>
  <!-- Delete Dialog Box; shown when delete button is clicked and closed when it emits delete or cancel events -->
  <DeleteDialog v-if="showDeleteDialog" :selected-messages="selectedMessages" @delete-selected="deleteSelected" @cancel-delete="cancelDelete" />
</template>


<script lang="ts" setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { PropType, reactive, ref } from 'vue'
  import DeleteDialog from '@/components/Exercise-1/DeleteDialog.vue'
  import MessageItem from '@/components/Exercise-1/MessageItem.vue'
  import { useMessagingStore } from '@/stores/messaging'
  import { Message } from '@/types/Exercise-1/Message'

  defineProps({
    messages: {
      type: Array as PropType<Message[]>,
      default: () => [],
    },
  })

  const messagingStore = useMessagingStore()

  const selectedMessages: Message[] = reactive([])
  const showDeleteDialog = ref(false)


  function toPlural(word: string, count: number): string {
    return count === 1 ? word : `${word}s`
  }

  function toggleSelection(message: Message, selected: boolean): void {
    unselectMessage(message)

    if (selected) {
      selectMessage(message)
    }
  }

  function selectMessage(message: Message): void {
    selectedMessages.push(message)
  }

  function unselectMessage(message: Message): void {
    const index = selectedMessages.indexOf(message)

    if (index > -1) {
      selectedMessages.splice(index, 1)
    }
  }

  // to delete messages, update state using deleteMessages action which was added to messaging.ts
  function deleteSelected(): void {
    // update messaging store to remove selected messages
    messagingStore.deleteMessages(selectedMessages)
    // unselect messages
    selectedMessages.splice(0)
    // hide dialog
    showDeleteDialog.value = false
  }

  function cancelDelete(): void {
    // unselect all messages
    selectedMessages.splice(0)
    // hide dialog
    showDeleteDialog.value = false
  }
</script>

<style lang="scss">
.inbox-list {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12) !important;
}

.inbox-list__top-bar {
  display: flex;
  align-items: center;
  color: white;
  background-color: #76d7c4;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
    0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  height: 64px;
  padding: 12px 24px;
  gap: 20px;
}

.inbox-list__button {
  cursor: pointer;
  border: 2px solid white;
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
  font-weight: 600;
  background-color: transparent;
  font-size: 1rem;
  font-family: inherit;

  & > svg {
    margin-right: 5px;
  }
  &:hover {
    background-color: white;
    color: #76d7c4;
  }
}

.inbox-list__actions {
  display: flex;
  gap: 24px;
  margin-left: auto;
}

.inbox-list__title {
  font-size: 1.5em;
  font-weight: bold;
}
</style>
