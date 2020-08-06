<template>
  <div class="popup-wrapper">
    <div class="container">
      <div class="items">
        Article title
        <input type="text" v-model="title"/>
      </div>
      <div class="items">
        Recommend reason
        <textarea v-model="reason"></textarea>
      </div>
      <div class="items">
        Set category
        <select>
          <option>test</option>
        </select>
      </div>
    </div>
    <div class="submit-btn" @click="commit">Commit</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      reason: '',
      categor: '',
      nickName: '',
      link: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    commit () {

    },
    initExtension () {
      const _this = this
      chrome.windows.getCurrent({ populate: true }, (currentWindow) => {
        chrome.tabs.query({
          active: true,
          currentWindow: true
        }, function (tabs) {
          const tabID = tabs.length ? tabs[0].id : null
          chrome.tabs.executeScript(tabID, {
            file: 'recommend.js'
          }, () => {
            chrome.tabs.sendMessage(tabID, { message: 'GET_TOPIC_DATA' }, (res) => {
              console.log('GET_TOPIC_DATA', res)
              _this.title = res.title
              _this.reason = res.description
              _this.link = res.link
            })
          })
        })
      })
    },
    init () {
      this.initExtension()
      this.getNickName()
    },
    getNickName () {
      const _this = this
      chrome.storage.sync.get('nickName', (data) => {
        _this.nickName = data.nickName
      })
    }
  }
}
</script>

<style lang="scss">
p {
  font-size: 20px;
}
</style>
