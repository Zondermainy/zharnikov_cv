const messages = {
  en: {
    hero: {
      name: 'Zharnikov Nikolay',
      position: 'DevOps Engineer',
      tagline: 'Building reliable infrastructure & automating everything'
    },
    nav: {
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact'
    },
    experience: {
      title: '// Work Experience'
    },
    jobs: {
      dns: {
        company: 'DNS Technologies',
        position: 'DevOps Engineer',
        period: 'June 2024 — Present',
        description: 'Observability & Monitoring',
        achievements: [
          'Developed business process monitoring based on VictoriaMetrics/Grafana, transforming raw metrics from internal services into analytical dashboards using complex PromQL queries (RPS, quantiles, aggregates)',
          'Configured Telegram alerting via Grafana and Alertmanager',
          'Redesigned index structure during migration from Elasticsearch to OpenSearch',
          'Developed custom Helm charts from scratch for internal microservices and adapted existing external solutions (GitLab AI Gateway, KeepHQ)',
          'Implemented systematic incident handling process, including maintaining outage registry and preparing technical post-mortems'
        ]
      },
      shardmc: {
        company: 'shardmc.ru',
        position: 'DevOps Engineer',
        period: 'September 2022 — Present',
        description: 'Infrastructure & Automation',
        achievements: [
          'Designed and deployed server infrastructure based on Proxmox, provisioned VMs using Terraform with Ansible configuration management',
          'Deployed K3s cluster, ensured containerization with Docker, and orchestrated high-load Java services',
          'Deployed self-hosted GitLab with custom runners, implemented secure CI/CD pipeline with Dockerfile linters and Trivy scanning in Harbor',
          'Automated cluster deployments using ArgoCD',
          'Managed and performance-tuned MySQL, PostgreSQL, and Redis',
          'Implemented backup system using Restic with incremental copying and data deduplication'
        ]
      }
    },
    skills: {
      title: '// Tech Stack'
    },
    techCategories: {
      infrastructure: 'Infrastructure',
      containerization: 'Containerization',
      cicd: 'CI/CD',
      monitoring: 'Monitoring',
      databases: 'Databases',
      automation: 'Automation'
    },
    contact: {
      title: '// Get in Touch',
      subtitle: 'Feel free to reach out'
    },
    footer: {
      built: 'Built with Nuxt'
    }
  },
  ru: {
    hero: {
      name: 'Жарников Николай',
      position: 'DevOps Инженер',
      tagline: 'Создаю надёжную инфраструктуру и автоматизирую всё'
    },
    nav: {
      experience: 'Опыт',
      skills: 'Навыки',
      contact: 'Контакты'
    },
    experience: {
      title: '// Опыт работы'
    },
    jobs: {
      dns: {
        company: 'DNS Technologies',
        position: 'DevOps Инженер',
        period: 'Июнь 2024 — Настоящее время',
        description: 'Мониторинг и наблюдаемость',
        achievements: [
          'Разработал систему мониторинга бизнес-процессов на базе VictoriaMetrics/Grafana, преобразуя метрики внутренних сервисов в аналитические дашборды с использованием сложных PromQL запросов (RPS, квантили, агрегации)',
          'Настроил оповещения в Telegram через Grafana и Alertmanager',
          'Переработал структуру индексов при миграции с Elasticsearch на OpenSearch',
          'Разработал кастомные Helm-чарты для внутренних микросервисов и адаптировал внешние решения (GitLab AI Gateway, KeepHQ)',
          'Внедрил системный процесс обработки инцидентов, включая ведение реестра сбоев и подготовку технических post-mortem'
        ]
      },
      shardmc: {
        company: 'shardmc.ru',
        position: 'DevOps Инженер',
        period: 'Сентябрь 2022 — Настоящее время',
        description: 'Инфраструктура и автоматизация',
        achievements: [
          'Спроектировал и развернул серверную инфраструктуру на базе Proxmox, подготовка VM через Terraform с управлением конфигурацией через Ansible',
          'Развернул K3s кластер, обеспечил контейнеризацию с Docker и оркестрацию высоконагруженных Java-сервисов',
          'Развернул self-hosted GitLab с кастомными runners, реализовал безопасный CI/CD пайплайн с Dockerfile линтерами и сканированием через Trivy в Harbor',
          'Автоматизировал деплой кластера с помощью ArgoCD',
          'Администрировал и оптимизировал производительность MySQL, PostgreSQL и Redis',
          'Реализовал систему бекапов на Restic с инкрементным копированием и дедупликацией данных'
        ]
      }
    },
    skills: {
      title: '// Технологический стек'
    },
    techCategories: {
      infrastructure: 'Инфраструктура',
      containerization: 'Контейнеризация',
      cicd: 'CI/CD',
      monitoring: 'Мониторинг',
      databases: 'Базы данных',
      automation: 'Автоматизация'
    },
    contact: {
      title: '// Связаться',
      subtitle: 'Буду рад обратной связи'
    },
    footer: {
      built: 'Создано на Nuxt'
    }
  },
  jp: {
    hero: {
      name: 'ジャルニコフ ニコライ',
      position: 'DevOpsエンジニア',
      tagline: '安定したインフラを構築し、すべてを自動化します'
    },
    nav: {
      experience: '経験',
      skills: 'スキル',
      contact: '連絡先'
    },
    experience: {
      title: '// 職歴'
    },
    jobs: {
      dns: {
        company: 'DNS Technologies',
        position: 'DevOpsエンジニア',
        period: '2024年6月 — 現在',
        description: 'オブザーバビリティと監視',
        achievements: [
          'VictoriaMetrics/Grafanaベースのビジネスプロセスモニタリングシステム了你',
          'GrafanaとAlertmanager経由でTelegramアラートを構成',
          'ElasticsearchからOpenSearchへの移行時のインデックス構造を再設計',
          'カスタムHelmチャートをゼロから開発',
          'インシデント対応プロセスを実装'
        ]
      },
      shardmc: {
        company: 'shardmc.ru',
        position: 'DevOpsエンジニア',
        period: '2022年9月 — 現在',
        description: 'インフラと自動化',
        achievements: [
          'Proxmoxベースのサーバーインフラを設計・展開',
          'K3sクラスターを展開、Dockerでコンテナ化を実装',
          'GitLabとArgoCDでCI/CDパイプラインを構築',
          'MySQL、PostgreSQL、Redisを管理',
          'Resticでバックアップシステムを実装'
        ]
      }
    },
    skills: {
      title: '// 技術スタック'
    },
    techCategories: {
      infrastructure: 'インフラ',
      containerization: 'コンテナ化',
      cicd: 'CI/CD',
      monitoring: '監視',
      databases: 'データベース',
      automation: '自動化'
    },
    contact: {
      title: '// お問い合わせ',
      subtitle: 'お気軽にご連絡ください'
    },
    footer: {
      built: 'Nuxtで構築'
    }
  }
}

export const useI18n = () => {
  const locale = useState('locale', () => 'en')
  
  const setLocale = (newLocale: string) => {
    if (messages[newLocale as keyof typeof messages]) {
      locale.value = newLocale
      if (process.client) {
        document.cookie = `locale=${newLocale};path=/;max-age=31536000`
      }
    }
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let result: any = messages[locale.value as keyof typeof messages]
    for (const k of keys) {
      result = result?.[k]
    }
    return result || key
  }

  return {
    locale,
    setLocale,
    t,
    messages
  }
}
