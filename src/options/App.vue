<template>
  <div class="app">
    <div class="favourite-name">
      <div>Nickname</div>
      <div><input type="text" v-model="nickName"/></div>
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

<style scoped>
p {
  font-size: 20px;
}
</style>
