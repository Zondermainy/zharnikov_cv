<template>
  <div class="layout">
    <header class="header">
      <div class="container header-inner">
        <div class="logo">
          <span class="logo-bracket">[</span>
          <span class="logo-text">NZ</span>
          <span class="logo-bracket">]</span>
        </div>
        <nav class="nav">
          <a href="#experience" class="nav-link">{{ t('nav.experience') }}</a>
          <a href="#skills" class="nav-link">{{ t('nav.skills') }}</a>
          <a href="#contact" class="nav-link">{{ t('nav.contact') }}</a>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
    
    <main>
      <slot />
    </main>
    
    <footer class="footer">
      <div class="container">
        <div class="footer-inner">
          <span class="footer-text">© {{ currentYear }} Nikolay Zharnikov</span>
          <span class="footer-divider">|</span>
          <span class="footer-text">{{ t('footer.built') }}</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(13, 17, 23, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  font-family: var(--font-mono);
  font-size: 20px;
  font-weight: 700;
}

.logo-bracket {
  color: var(--accent-green);
}

.logo-text {
  color: var(--text-primary);
}

.nav {
  display: flex;
  gap: var(--space-lg);
}

.nav-link {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--text-secondary);
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--accent-green);
}

main {
  flex: 1;
}

.footer {
  border-top: 1px solid var(--border);
  padding: var(--space-lg) 0;
  margin-top: var(--space-3xl);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-secondary);
}

.footer-divider {
  color: var(--border);
}

@media (max-width: 640px) {
  .nav {
    display: none;
  }
}
</style>
