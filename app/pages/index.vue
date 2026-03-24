<template>
  <div class="page">
    <!-- Hero Section -->
    <section class="hero section">
      <div class="container">
        <div class="terminal">
          <div class="terminal-header">
            <div class="terminal-btn red"></div>
            <div class="terminal-btn yellow"></div>
            <div class="terminal-btn green"></div>
            <span class="terminal-title">zharnikov@devops:~</span>
          </div>
          <div class="terminal-body">
            <div class="terminal-line">
              <span class="prompt">$</span>
              <span class="command">whoami</span>
            </div>
            <div class="output-name">{{ t('hero.name') }}</div>
            <div class="output-position">{{ t('hero.position') }}</div>
            
            <div class="terminal-line" style="margin-top: 24px;">
              <span class="prompt">$</span>
              <span class="command typing-cursor">{{ t('hero.tagline') }}</span>
            </div>
            
            <div class="terminal-line" style="margin-top: 32px;">
              <span class="prompt">$</span>
              <span class="command comment"># {{ t('contact.subtitle') }}</span>
            </div>
            <div class="contact-links">
              <a href="mailto:zharnikov.nikolay@gmail.com" class="contact-link">
                <span class="link-icon">📧</span>
                <span class="link-text">zharnikov.nikolay@gmail.com</span>
              </a>
              <a href="https://t.me/Zondermainy" target="_blank" class="contact-link">
                <span class="link-icon">✈️</span>
                <span class="link-text">@Zondermainy</span>
              </a>
              <a href="https://www.linkedin.com/in/nikolay-zharnikov-4819a83b3/" target="_blank" class="contact-link">
                <span class="link-icon">💼</span>
                <span class="link-text">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="experience section">
      <div class="container">
        <h2 class="section-title">{{ t('experience.title') }}</h2>
        
        <div class="timeline">
          <ExperienceCard
            v-for="(job, key) in jobs"
            :key="key"
            :job="job"
          />
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills section">
      <div class="container">
        <h2 class="section-title">{{ t('skills.title') }}</h2>
        
        <div class="skills-grid">
          <SkillCategory
            v-for="category in skillCategories"
            :key="category.key"
            :category="category"
          />
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact section">
      <div class="container">
        <div class="terminal">
          <div class="terminal-header">
            <div class="terminal-btn red"></div>
            <div class="terminal-btn yellow"></div>
            <div class="terminal-btn green"></div>
            <span class="terminal-title">contact.sh</span>
          </div>
          <div class="terminal-body contact-terminal">
            <h2 class="contact-title">{{ t('contact.title') }}</h2>
            <p class="contact-subtitle">{{ t('contact.subtitle') }}</p>
            
            <div class="contact-commands">
              <a href="mailto:zharnikov.nikolay@gmail.com" class="command-block">
                <span class="cmd-prompt">→</span>
                <span class="cmd-text">send mail</span>
              </a>
              <a href="https://t.me/Zondermainy" target="_blank" class="command-block">
                <span class="cmd-prompt">→</span>
                <span class="cmd-text">open telegram</span>
              </a>
              <a href="https://www.linkedin.com/in/nikolay-zharnikov-4819a83b3/" target="_blank" class="command-block">
                <span class="cmd-prompt">→</span>
                <span class="cmd-text">view linkedin</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t, locale, messages } = useI18n()

const jobs = computed(() => {
  const loc = locale.value as keyof typeof messages
  return {
    dns: messages[loc].jobs.dns,
    shardmc: messages[loc].jobs.shardmc
  }
})

const skillCategories = [
  { 
    key: 'infrastructure',
    skills: ['Proxmox', 'Terraform', 'Ansible', 'Kubernetes (K3s)']
  },
  {
    key: 'containerization',
    skills: ['Docker', 'Harbor', 'Helm']
  },
  {
    key: 'cicd',
    skills: ['GitLab', 'ArgoCD', 'CI/CD Pipelines']
  },
  {
    key: 'monitoring',
    skills: ['Grafana', 'VictoriaMetrics', 'Alertmanager', 'OpenSearch']
  },
  {
    key: 'databases',
    skills: ['MySQL', 'PostgreSQL', 'Redis']
  },
  {
    key: 'automation',
    skills: ['Bash', 'Restic', 'Trivy']
  }
]
</script>

<style scoped>
.page {
  padding-bottom: var(--space-3xl);
}

/* Hero */
.hero {
  padding-top: var(--space-3xl);
}

.terminal-line {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  font-family: var(--font-mono);
}

.prompt {
  color: var(--accent-green);
  font-weight: 600;
}

.command {
  color: var(--text-primary);
}

.comment {
  color: var(--text-secondary);
}

.output-name {
  font-size: 28px;
  font-weight: 700;
  color: var(--accent-blue);
  margin-top: var(--space-sm);
  margin-left: var(--space-lg);
}

.output-position {
  font-size: 20px;
  color: var(--accent-purple);
  margin-left: var(--space-lg);
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  margin-left: var(--space-lg);
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--text-secondary);
  transition: color 0.2s ease;
}

.contact-link:hover {
  color: var(--accent-green);
}

.link-icon {
  font-size: 16px;
}

/* Section Titles */
.section-title {
  font-family: var(--font-mono);
  font-size: 24px;
  color: var(--accent-green);
  margin-bottom: var(--space-xl);
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-lg);
}

/* Contact */
.contact-terminal {
  text-align: center;
}

.contact-title {
  font-family: var(--font-mono);
  font-size: 24px;
  color: var(--accent-green);
  margin-bottom: var(--space-sm);
}

.contact-subtitle {
  color: var(--text-secondary);
  margin-bottom: var(--space-xl);
}

.contact-commands {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
}

.command-block {
  display: inline-flex;
  align-items: center;
  gap: var(--space-md);
  font-family: var(--font-mono);
  font-size: 16px;
  color: var(--text-primary);
  padding: var(--space-sm) var(--space-lg);
  background: var(--bg-card);
  border-radius: 6px;
  border: 1px solid var(--border);
  transition: all 0.2s ease;
}

.command-block:hover {
  border-color: var(--accent-green);
  background: rgba(63, 185, 80, 0.1);
}

.cmd-prompt {
  color: var(--accent-green);
}

.cmd-text {
  color: var(--text-primary);
}

@media (max-width: 640px) {
  .hero {
    padding-top: var(--space-xl);
  }
  
  .output-name {
    font-size: 22px;
    margin-left: var(--space-md);
  }
  
  .output-position {
    font-size: 16px;
    margin-left: var(--space-md);
  }
  
  .contact-links {
    margin-left: var(--space-md);
  }
  
  .contact-link {
    font-size: 12px;
    word-break: break-all;
  }
  
  .section-title {
    font-size: 18px;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .section {
    padding: var(--space-xl) 0;
  }
  
  .terminal-title {
    font-size: 10px;
  }
  
  .command-block {
    width: 100%;
    justify-content: center;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .terminal-body {
    padding: var(--space-md);
  }
  
  .output-name {
    font-size: 18px;
  }
  
  .output-position {
    font-size: 14px;
  }
  
  .terminal-title {
    display: none;
  }
}
</style>
