<template>
  <div class="skill-category">
    <div class="category-header">
      <span class="category-icon">{{ getIcon(category.key) }}</span>
      <span class="category-name">{{ t(`techCategories.${category.key}`) }}</span>
    </div>
    <div class="skills-list">
      <span class="skill-tag" v-for="skill in category.skills" :key="skill">
        {{ skill }}
      </span>
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

const getIcon = (key: string) => {
  const icons: Record<string, string> = {
    infrastructure: '🖥️',
    containerization: '📦',
    cicd: '🔄',
    monitoring: '📊',
    kubernetes: '☸️',
    dba: '🗄️'
  }
  return icons[key] || '🔧'
}
</script>

<style scoped>
.skill-category {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: var(--space-lg);
  transition: all 0.3s ease;
}

.skill-category:hover {
  border-color: var(--accent-green);
  box-shadow: 0 0 20px rgba(63, 185, 80, 0.15);
  transform: translateY(-2px);
}

.category-header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
  padding-bottom: var(--space-md);
  border-bottom: 1px solid var(--border);
}

.category-icon {
  font-size: 28px;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
}

.category-name {
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 600;
  color: var(--accent-blue);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.skill-tag {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
  background: linear-gradient(135deg, rgba(63, 185, 80, 0.2) 0%, rgba(88, 166, 255, 0.1) 100%);
  border: 1px solid var(--accent-green);
  padding: 8px 14px;
  border-radius: 6px;
  transition: all 0.2s ease;
  cursor: default;
}

.skill-tag:hover {
  background: linear-gradient(135deg, rgba(63, 185, 80, 0.35) 0%, rgba(88, 166, 255, 0.2) 100%);
  transform: scale(1.05);
  box-shadow: 0 0 12px rgba(63, 185, 80, 0.3);
}
</style>
