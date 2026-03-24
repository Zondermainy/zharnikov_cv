<template>
  <div class="skill-category terminal">
    <div class="terminal-header">
      <div class="terminal-btn red"></div>
      <div class="terminal-btn yellow"></div>
      <div class="terminal-btn green"></div>
      <span class="terminal-title">{{ category.key }}.json</span>
    </div>
    <div class="terminal-body">
      <div class="category-header">
        <span class="bracket">{</span>
        <span class="category-name">{{ t(`techCategories.${category.key}`) }}</span>
        <span class="bracket">}</span>
      </div>
      <div class="skills-list">
        <span class="skill-tag" v-for="skill in category.skills" :key="skill">
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

defineProps<{
  category: {
    key: string
    skills: string[]
  }
}>()
</script>

<style scoped>
.category-header {
  font-family: var(--font-mono);
  font-size: 16px;
  margin-bottom: var(--space-md);
}

.bracket {
  color: var(--accent-orange);
}

.category-name {
  color: var(--accent-blue);
  margin: 0 var(--space-sm);
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.skill-tag {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--accent-green);
  background: rgba(63, 185, 80, 0.1);
  border: 1px solid rgba(63, 185, 80, 0.3);
  padding: 4px 10px;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.skill-tag:hover {
  background: rgba(63, 185, 80, 0.2);
  border-color: var(--accent-green);
}
</style>
