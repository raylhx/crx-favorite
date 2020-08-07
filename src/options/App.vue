<template>
  <div class="app">
    <div class="favourite-name">
      <div class="item">
        <p>Nickname</p>
        <input type="text" v-model="nickName"/>
      </div>
      <div class="save-btn" @click="save">Save</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      nickName: ''
    }
  },
  methods: {
    save () {
      console.log('-----------', this.nickName)
      chrome.storage.sync.set({ nickName: this.nickName }, () => {
        console.log('nickname')
      })
    }
  }
}
</script>

<style lang="scss">
@import '../css/reset.css';
.app{
  width: 100%;
  padding: 15px 0;
  .item{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 30px;
    p{
      display: block;
      margin-right: 20px;
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
  }
  .save-btn{
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
