<template>
  <div class="message-item" @click.prevent="toggleActive">
    <div class="message-item__checkbox">
      <FontAwesomeIcon class="fa-lg" :icon="['far', classes.icon]" />
    </div>
    <div class="message-item__middle">
      <!-- Added inline style and component prop to allow developer to choose the color for a selected item -->
      <div class="message-item__from" :style="{ 'color': selected ? selectedColor : 'inherit' }">
        {{ message.from }}
        <!-- Conditionally show urgent icon and message -->
        <span
          v-if="message.urgent"
          class="message-item__urgent"
        ><FontAwesomeIcon class="fa-xs" :icon="['fas', 'exclamation-circle']" />
          <span class="message-item__urgent-text">urgent</span>
        </span>
      </div>
      <div class="message-item__subject">
        {{ message.subject }}
      </div>
      <!-- Message preview text, truncated with CSS -->
      <div class="message-item__preview">
        {{ message.message }}
      </div>
    </div>
    <div class="message-item__timestamp">
      {{ message.timestamp }}
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { computed, PropType } from 'vue'
  import { Message } from '@/types/Exercise-1/Message'

  const props = defineProps({
    message: {
      type: Object as PropType<Message>,
      required: true,
    },
    selected: {
      type: Boolean,
    },
    // additional prop for selected color with default value
    selectedColor: {
      type: String,
      default: '#76d7c4',
    },
  })

  const emit = defineEmits<{
    (event: 'update:selected', value: boolean): void,
  }>()

  // removed "item" class (classes.item) which was used previously (along with style in <style> tag) to set the selected color
  const classes = computed(() => ({
    icon: [props.selected ? 'check-square' : 'square'],
  }))

  function toggleActive(): void {
    emit('update:selected', !props.selected)
  }
</script>

<style lang="scss">
.message-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 24px;
  background-position: center;
  transition: background 800ms;

  &:hover {
    background: rgba(133, 146, 158, 0.05)
      radial-gradient(circle, transparent 1%, rgba(133, 146, 158, 0.05) 1%)
      center/15000%;
  }

  &:active {
    background-color: rgba(133, 146, 158, 0.05);
    background-size: 100%;
    transition: background 0s;
  }
}

.message-item__checkbox {
  margin: 24px 24px 24px 0;
}

.message-item__middle {
  overflow: hidden;
}

.message-item__from {
  color: #2c3e50;
  font-weight: bold;
  transition: all 250ms;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

/* New urgent message */
.message-item__urgent {
  display: inline-flex;
  align-items: baseline;
  gap: 2px;
  color: #D0342C;
  font-variant: small-caps;
  font-size: 1.125rem;

  /* Small alignment adjustment */
  &-text {
    transform: translateY(-1.5px);
  }
}

.message-item__subject, .message-item__preview {
  font-size: 0.95rem;
  font-weight: 600;
}

/* Preview message styling */
.message-item__preview {
  font-size: 0.85rem;
  font-weight: 400;
  color: lighten(#2c3e50, 15%);
  font-weight: 400;
  margin-top: 1px;
  /* Cut off preview text using CSS */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.message-item__timestamp {
  font-size: 0.75rem;
  white-space: nowrap;
  margin-left: 20px;
}
</style>
