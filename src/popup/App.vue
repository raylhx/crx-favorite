<template>
  <div class="popup-wrapper">
    <div class="container">
      <div class="item">
        <p>Article title</p>
        <input type="text" v-model="title"/>
      </div>
      <div class="item">
        <p>Recommend reason</p>
        <textarea v-model="reason"></textarea>
      </div>
      <div class="item category">
        <p>Category</p>
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
@import '../css/reset.css';

.popup-wrapper{
  width: 200px;
  padding: 15px 0;
  // height: 200px;
  .container {
    width: 160px;
    margin: 0 auto;
  }
  .item{
    width: 100%;
    margin-bottom: 10px;
    p{
      display: block;
      color: #4267b2;
      font-size: 14px;
      font-weight: bold;
      line-height: 30px;
    }
    input{
      box-sizing: border-box;
      width: 160px;
      height: 25px;
      border: 1px solid rgb(214, 213, 213);
      border-radius: 6px;
      font-size: 14px;
      text-indent: 4px;
      color: #5d5f5f;
    }
    textarea{
      width: 160px;
      height: 80px;
      border: 1px solid rgb(214, 213, 213);
      border-radius: 6px;
      font-size: 14px;
      text-indent: 4px;
      color: #5d5f5f;
    }
    &.category{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      select{
        width: 80px;
        height: 25px;
        margin-left: 10px;
        border: 1px solid rgb(214, 213, 213);
        border-radius: 6px;
        font-size: 14px;
        text-indent: 4px;
        color: #5d5f5f;
      }
      option{
        font-size: 14px;
        text-indent: 4px;
        color: #5d5f5f;
      }
    }
  }
  .submit-btn{
    width: 160px;
    height: 28px;
    margin: 0 auto;
    border-radius: 2px;
    line-height: 28px;
    font-size: 15px;
    text-align: center;
    color: #fff;
    background: #4267b2;
  }
}
</style>
