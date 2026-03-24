<template>
  <div class="experience-card">
    <div class="card-timeline">
      <div class="timeline-dot"></div>
      <div class="timeline-line"></div>
    </div>
    <div class="card-content terminal">
      <div class="terminal-header">
        <div class="terminal-btn red"></div>
        <div class="terminal-btn yellow"></div>
        <div class="terminal-btn green"></div>
        <span class="terminal-title">{{ job.company }}</span>
      </div>
      <div class="terminal-body">
        <div class="card-header">
          <span class="position">{{ job.position }}</span>
          <span class="period">{{ job.period }}</span>
        </div>
        <p class="description">{{ job.description }}</p>
        <ul class="achievements">
          <li v-for="(achievement, index) in job.achievements" :key="index" class="achievement">
            <span class="bullet">▸</span>
            <span class="text">{{ achievement }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  job: {
    company: string
    position: string
    period: string
    description: string
    achievements: string[]
  }
}>()
</script>

<style scoped>
.experience-card {
  display: flex;
  gap: var(--space-lg);
  margin-bottom: var(--space-xl);
}

.card-timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20px;
  flex-shrink: 0;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  background: var(--accent-green);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--accent-green);
}

.timeline-line {
  flex: 1;
  width: 2px;
  background: var(--border);
  margin-top: var(--space-sm);
}

.card-content {
  flex: 1;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.position {
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 600;
  color: var(--accent-blue);
}

.period {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-secondary);
  background: var(--bg-card);
  padding: 4px 8px;
  border-radius: 4px;
}

.description {
  font-size: 14px;
  color: var(--accent-purple);
  margin-bottom: var(--space-md);
  font-style: italic;
}

.achievements {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.achievement {
  display: flex;
  gap: var(--space-sm);
  line-height: 1.6;
}

.bullet {
  color: var(--accent-green);
  flex-shrink: 0;
}

.text {
  color: var(--text-primary);
  font-size: 14px;
}

@media (max-width: 640px) {
  .card-timeline {
    display: none;
  }
  
  .position {
    font-size: 16px;
  }
}
</style>
