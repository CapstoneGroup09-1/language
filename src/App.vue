<template>
  <div id="app" class="language-container">
    <div class="language-header">
      <h2>{{ $t('message.language') }}</h2>
      <p>{{ $t('message.question') }}</p>
    </div>

    <div class="language-selector">
      <select v-model="language">
        <option value="en-US">{{ $t('message.english') }}</option>
        <option value="zh-CN">{{ $t('message.simplifiedChinese') }}</option>
        <option value="zh-TW">{{ $t('message.traditionalChinese') }}</option>
      </select>
    </div>

    <div class="ai-recommendation-header">
      <h2>{{ $t('message.aiAidedCrop') }}</h2>
      <p>{{ $t('message.recommendation') }}</p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      language: 'zh-CN'
    };
  },
  watch: {
    language(newLang) {
      this.$i18n.locale = newLang;
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  max-width: 300px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

.language-header,
.ai-recommendation-header {
  background-color: #f0f0f0;
  padding: 10px 15px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.language-header h2,
.ai-recommendation-header h2 {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.language-selector {
  padding: 15px;
}

select {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
}

p {
  padding: 15px;
  margin: 0;
  background-color: #f9f9f9;
  border-top: 1px solid #ccc;
}
.language-container {
  font-family: 'Arial', sans-serif;
  width: 90%; /* 更大的宽度 */
  max-width: 600px; /* 增加最大宽度限制 */
  margin: 20px auto; /* 增加顶部和底部的边距 */
  border: 1px solid #ccc;
  border-radius: 12px; /* 增加边框圆角 */
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* 
}

.language-header {
  background-color: #f0f0f0;
  padding: 16px 20px; /* 增加内边距 */
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.language-header h2 {
  margin: 0;
  font-size: 24px; /* 增加标题的大小 */
  color: #333;
}

.language-selector {
  padding: 15px;
}

select {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 16px;
}

.ai-recommendation-header {
  padding: 15px;
  text-align: left;
}

.ai-recommendation-header h2 {
  margin: 0 0 10px 0; /* 增加底部边距 */
  font-size: 20px;
}

</style>
