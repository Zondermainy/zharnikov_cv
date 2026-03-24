<template>
  <div class="lang-switcher">
    <button
      v-for="lang in languages"
      :key="lang.code"
      class="lang-btn"
      :class="{ active: locale === lang.code }"
      @click="switchLocale(lang.code)"
    >
      {{ lang.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'jp', label: 'JP' }
]

const switchLocale = (code: string) => {
  setLocale(code)
}
</script>

<style scoped>
.lang-switcher {
  display: flex;
  gap: 2px;
  background: var(--bg-secondary);
  padding: 2px;
  border-radius: 6px;
  border: 1px solid var(--border);
}

.lang-btn {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  padding: 6px 10px;
  background: transparent;
  color: var(--text-secondary);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.lang-btn:hover {
  color: var(--text-primary);
  background: var(--bg-card);
}

.lang-btn.active {
  color: var(--accent-green);
  background: var(--bg-card);
}
</style>
