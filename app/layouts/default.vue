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
    </header>
    
    <!-- Mobile Menu Overlay -->
    <div class="mobile-overlay" :class="{ active: mobileMenuOpen }" @click="mobileMenuOpen = false"></div>
    
    <!-- Mobile Sidebar Menu -->
    <div class="mobile-sidebar" :class="{ open: mobileMenuOpen }">
      <div class="sidebar-header">
        <div class="sidebar-logo">
          <span class="logo-bracket">[</span>
          <span class="logo-text">NZ</span>
          <span class="logo-bracket">]</span>
        </div>
        <button class="close-btn" @click="mobileMenuOpen = false">×</button>
      </div>
      <nav class="sidebar-nav">
        <a href="#experience" class="sidebar-link" @click="mobileMenuOpen = false">
          <span class="link-prompt">$</span>
          <span class="link-text">{{ t('nav.experience') }}</span>
          <span class="link-arrow">→</span>
        </a>
        <a href="#skills" class="sidebar-link" @click="mobileMenuOpen = false">
          <span class="link-prompt">$</span>
          <span class="link-text">{{ t('nav.skills') }}</span>
          <span class="link-arrow">→</span>
        </a>
        <a href="#contact" class="sidebar-link" @click="mobileMenuOpen = false">
          <span class="link-prompt">$</span>
          <span class="link-text">{{ t('nav.contact') }}</span>
          <span class="link-arrow">→</span>
        </a>
      </nav>
      <div class="sidebar-footer">
        <span class="footer-text">menu.sh</span>
      </div>
    </div>
    
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
  z-index: 300;
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

.burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.burger span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.burger.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.burger.active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.burger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Overlay */
.mobile-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 150;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.mobile-overlay.active {
  opacity: 1;
  pointer-events: auto;
}

/* Mobile Sidebar */
.mobile-sidebar {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: var(--bg-secondary);
  border-left: 1px solid var(--border);
  z-index: 200;
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.mobile-sidebar.open {
  transform: translateX(0);
  pointer-events: auto;
}

.mobile-sidebar.open {
  transform: translateX(0);
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-md) var(--space-lg);
  border-bottom: 1px solid var(--border);
  height: 64px;
}

.sidebar-logo {
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
}

.close-btn {
  width: 32px;
  height: 32px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text-secondary);
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.close-btn:hover {
  color: var(--accent-green);
  border-color: var(--accent-green);
}

.sidebar-nav {
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md) var(--space-lg);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.sidebar-link:hover {
  border-color: var(--accent-green);
  background: rgba(63, 185, 80, 0.1);
  transform: translateX(-4px);
}

.link-prompt {
  font-family: var(--font-mono);
  color: var(--accent-green);
  font-weight: 600;
}

.link-text {
  flex: 1;
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--text-primary);
}

.link-arrow {
  font-family: var(--font-mono);
  color: var(--text-secondary);
  transition: transform 0.2s ease;
}

.sidebar-link:hover .link-arrow {
  transform: translateX(4px);
  color: var(--accent-green);
}

.sidebar-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--space-md) var(--space-lg);
  border-top: 1px solid var(--border);
}

.sidebar-footer .footer-text {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-secondary);
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
  
  .mobile-overlay,
  .mobile-sidebar {
    display: block;
  }
}
</style>
