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
        <div class="header-right">
          <LanguageSwitcher />
          <button class="burger" @click="mobileMenuOpen = !mobileMenuOpen" :class="{ active: mobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ open: mobileMenuOpen }">
        <nav class="mobile-nav">
          <a href="#experience" class="mobile-nav-link" @click="mobileMenuOpen = false">
            <span class="mobile-nav-prompt">$</span>
            <span>{{ t('nav.experience') }}</span>
          </a>
          <a href="#skills" class="mobile-nav-link" @click="mobileMenuOpen = false">
            <span class="mobile-nav-prompt">$</span>
            <span>{{ t('nav.skills') }}</span>
          </a>
          <a href="#contact" class="mobile-nav-link" @click="mobileMenuOpen = false">
            <span class="mobile-nav-prompt">$</span>
            <span>{{ t('nav.contact') }}</span>
          </a>
        </nav>
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
const mobileMenuOpen = ref(false)
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
  background: rgba(13, 17, 23, 0.95);
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

.header-right {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

/* Burger */
.burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.burger span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text-secondary);
  transition: all 0.3s ease;
}

.burger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 6px);
}

.burger.active span:nth-child(2) {
  opacity: 0;
}

.burger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -6px);
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border);
  padding: var(--space-md);
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
}

.mobile-menu.open {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--text-secondary);
  padding: var(--space-sm);
  border-radius: 4px;
  transition: all 0.2s ease;
}

.mobile-nav-link:hover {
  color: var(--accent-green);
  background: var(--bg-card);
}

.mobile-nav-prompt {
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

@media (max-width: 768px) {
  .nav {
    display: none;
  }
  
  .burger {
    display: flex;
  }
  
  .mobile-menu {
    display: block;
  }
}
</style>
