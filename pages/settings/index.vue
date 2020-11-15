<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                  v-model="user.image"
                  :disabled="disable"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model="user.username"
                  :disabled="disable"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                  :disabled="disable"
                  v-model="user.bio"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  v-model="user.email"
                  :disabled="disable"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  :disabled="disable"
                />
              </fieldset>
              <button
                class="btn btn-lg btn-primary pull-xs-right"
                type="button"
                @click="updateSetting"
              >
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr />
          <button class="btn btn-outline-danger" @click="quit">
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getUser, updateUser } from "@/api/user";

// 仅在客户端加载 js-cookie 包
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  middleware: "authenticated",
  name: "settingIndex",
  data() {
    return {
      disable: false,
    };
  },
  async asyncData() {
    const { data } = await getUser();
    const { user } = data;
    return {
      user,
    };
  },
  methods: {
    // 更新用户信息
    async updateSetting() {
      this.disable = true;
      await updateUser({
        user: {
          email: this.user.email,
          bio: this.user.bio,
          image: this.user.image,
        },
      });
      this.disable = false;
      // 跳转到用户界面
      this.$router.push({
        name: "profile",
        params: {
          username: this.user.username,
        },
      });
    },
    quit() {
      // 清除用户的登录状态
        this.$store.commit('setUser', null)
      Cookie.remove("user");
      // 跳转到首页
      this.$router.push("/");
    },
  },
};
</script>