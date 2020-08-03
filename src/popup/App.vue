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
      username: ''
    }
  },
  methods: {
    commit () {

    }
  }
}
</script>

<style lang="scss">
p {
  font-size: 20px;
}
</style>
