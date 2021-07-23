<template>
  <v-app>
    <v-main>
      <v-container style="text-align: center;">
        <v-card elevation="2" style="width: 450px; display: inline-block; margin-top: 200px; padding-top: 20px; text-align: center;">
          <p class="text-h4 text--primary" style="margin-bottom: 5px;">登录</p>
          <v-divider style="width: 80%; display: inline-block;"></v-divider>
          <v-form :model="loginForm" style="text-align: center; margin-top: 30px;">
             <v-text-field style="width: 70%; display: inline-block;"
              :model="loginForm.username"
              :rules="usernameRules"
              :counter="10"
              label="用户名"
              required>
            
            </v-text-field>

            <v-text-field style="width: 70%; display: inline-block;"
              :model="loginForm.password"
              :rules="passwordRules"
              :counter="10"
              label="密码"
              :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
              :type="passwordShow ? 'text' : 'password'"
              @click:append="passwordShow = !passwordShow"
              required>
            
            </v-text-field>
            <div style="margin-top: 20px; margin-bottom: 40px">
              <v-btn color="primary" style="margin: 2px 20px; padding: 0px 20px;">登录</v-btn>
              <v-btn color="accent" style="margin: 2px 20px; padding: 0px 20px;">注册</v-btn>
            </div>

          </v-form>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
    
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '1',
        password: '1',
      },
      usernameRules: [
        v => !!v || '必须输入用户名',
        v => v != undefined && v.length <= 10 || '用户名长度不能超过10',
      ],
      passwordRules: [
        v => !!v || '必须输入密码',
        v => v != undefined && v.length <= 10 || '密码长度不能超过10',
      ],
      passwordShow: false,
    }
  }
}
</script>

<style>

</style>