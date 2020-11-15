<template>
  <div class="article-meta">
    <nuxt-link
      :to="{
        name: 'profile',
        params: {
          username: article.author.username,
        },
      }"
      ><img :src="article.author.image"
    /></nuxt-link>
    <div class="info">
      <nuxt-link
        class="author"
        :to="{
          name: 'profile',
          params: {
            username: article.author.username,
          },
        }"
        >{{ article.author.username }}</nuxt-link
      >
      <span class="date">{{ article.createdAt | date("MMM DD, YYYY") }}</span>
    </div>
    <template v-if="isUser">
      <span class="ng-scope">
        <nuxt-link
          class="btn btn-outline-secondary btn-sm"
          :to="{
            name: 'editor',
            params: {
              slug: article.slug,
            },
          }"
        >
          <i class="ion-edit"></i> Edit Article
        </nuxt-link>

        <button
          class="btn btn-outline-danger btn-sm"
          @click="delectBtn"
          :disabled="delDisabled"
        >
          <i class="ion-trash-a"></i> Delete Article
        </button>
      </span>
    </template>
    <template v-else>
      <button
        class="btn btn-sm btn-outline-secondary"
        :class="{
          active: article.author.following,
        }"
        @click="onFollow(article)"
      >
        <i class="ion-plus-round"></i>
        &nbsp; {{ article.author.following ? "Unfollow" : "Follow" }}
        {{ article.author.username }}
        <!-- <span class="counter">(10)</span> -->
      </button>
      &nbsp;&nbsp;
      <button
        class="btn btn-sm btn-outline-primary"
        :class="{
          active: article.author.favorited,
        }"
        @click="onFavorite(article)"
        :disabled="disabled"
      >
        <i class="ion-heart"></i>
        &nbsp; Favorite Post
        <span class="counter">({{ article.favoritesCount }})</span>
      </button>
    </template>
  </div>
</template>
<script>
import { addFavorite, deleteFavorite, deleteArticle } from "@/api/article";
import { addFollow, deleteFollow } from "@/api/user";

export default {
  name: "articleMate",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      disabled: false,
      isUser: false,
      delDisabled: false,
      followDisabled: false,
    };
  },
  mounted() {
    this.isUserFn();
  },
  methods: {
    async onFavorite(article) {
      if (!this.$store.state.user) {
        this.$router.push("/register");
        return
      }
      this.disabled = true;
      if (article.favorited) {
        // 取消点赞
        await deleteFavorite(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        // 添加点赞
        await addFavorite(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }
      this.disabled = false;
    },
    async onFollow(article) {
      if (!this.$store.state.user) {
        this.$router.push("/register");
        return
      }
      this.followDisabled = true;
      if (article.author.following) {
        // 取消
        await deleteFollow(article.author.username);
        article.author.following = false;
      } else {
        // 添加
        await addFollow(article.author.username);
        article.author.following = true;
      }
      this.followDisabled = false;
    },
    // 判断是不是当前用户的文章
    isUserFn() {
      if (this.$store.state.user) {
        this.isUser =
          this.$store.state.user.username === this.article.author.username;
      }
    },
    // 删除文章
    async delectBtn() {
      this.delDisabled = true;
      await deleteArticle(this.article.slug);
      this.delDisabled = false;
      // 跳转到首页
      this.$router.push("/");
    },
    isLogin() {},
  },
};
</script>