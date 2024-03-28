import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

// 定义你的语言包
const messages = {
    'en-US': {
      message: {
        language: 'Language',
        question: 'select your language',
        english: 'English',
        simplifiedChinese: 'simpled-Chinese',
        traditionalChinese: 'Traditional Chinese',
        aiAidedCrop: 'AI-Aided Crop',
        recommendation: 'Recommendation'
      },
    },
    'zh-CN': {
      message: {
        language: '语言',
        question: '选择你的语言？',
        english: '英语',
        simplifiedChinese: '简体中文',
        traditionalChinese: '繁体中文',
        aiAidedCrop: 'AI 辅助作物',
        recommendation: '推荐'
      },
    },
    'zh-TW': {
      message: {
        language: '語言',
        question: '選擇妳的語言',
        english: '英語',
        simplifiedChinese: '简体中文',
        traditionalChinese: '繁體中文',
        aiAidedCrop: 'AI 輔助作物',
        recommendation: '推薦'
      },
    }
    // 其他语言的翻译可以继续添加
  };
  

// 创建 i18n 实例并引入语言包
const i18n = createI18n({
    locale: 'zh-CN', // 设置默认语言
    fallbackLocale: 'en-US', // 设置备用语言
    messages,
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
