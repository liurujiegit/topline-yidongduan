<template>
  <div class="login-container">
    <van-nav-bar type="info" @click="onLogin" title="登录" />
    <van-cell-group>
      <van-field v-model="user.mobil" label="手机号" placeholder="请输入手机号" />
      <van-field v-model="user.code" label="验证码" placeholder="请输入验证码">
        <van-button round slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="login-btn-box">
      <van-button type="info">登录</van-button>
    </div>
  </div>
</template>

<script>
import request from '@/utlis/request.js'
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    async onLogin () {
      try {
        const res = await request({
          method: 'POST',
          url: '/app/v1_0/authorizations',
          data: this.user
        })
        console.log('登录成功', res)
      } catch (err) {
        console.log('登录失败', err)
      }
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  .login-btn-box {
    padding: 20px;
    .van-button {
      width: 100%;
    }
  }
}
</style>
