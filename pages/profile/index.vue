<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            <p>{{ profile.bio }}</p>
            <nuxt-link
              class="btn btn-sm btn-outline-secondary action-btn"
              to="/settings"
            >
              <i class="ion-gear-a"></i> Edit Profile Settings
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab === 'author',
                  }"
                  exact
                  :to="{
                    name: 'profile',
                    query: {
                      tab: 'author',
                    },
                  }"
                  >My Articles</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab === 'favorited',
                  }"
                  exact
                  :to="{
                    name: 'profile',
                    query: {
                      tab: 'favorited',
                    },
                  }"
                  >Favorited Articles</nuxt-link
                >
              </li>
            </ul>
          </div>
          <template v-if="articles.length > 0">
            <div
              class="article-preview"
              v-for="article in articles"
              :key="article.slug"
            >
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
                    :to="{
                      name: 'profile',
                      params: {
                        username: article.author.username,
                      },
                    }"
                    >{{ article.author.username }}</nuxt-link
                  >
                  <span class="date">{{
                    article.createdAt | date("MMM DD, YYYY")
                  }}</span>
                </div>
                <button
                  :class="{
                    active: article.favorited,
                  }"
                  class="btn btn-outline-primary btn-sm pull-xs-right"
                  @click="onFavorite(article)"
                  :disabled="article.favoriteDisabled"
                >
                  <i class="ion-heart"></i> {{ article.favoritesCount }}
                </button>
              </div>
              <nuxt-link
                :to="{
                  name: 'article',
                  params: {
                    slug: article.slug,
                  },
                }"
                class="preview-link"
              >
                <h1>{{ article.title }}</h1>
                <p>{{ article.description }}</p>
                <span>Read more...</span>
              </nuxt-link>
            </div>
          </template>
          <template v-else>
            <div class="article-preview">
              No articles are here... yet.
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getUserProfile } from "@/api/user";
import { getArticles, addFavorite, deleteFavorite } from "@/api/article";
import { getTags } from "@/api/tag.js";

export default {
  middleware: "authenticated",
  name: "UserPorfile",
  async asyncData({ query, params }) {
    const limit = 5;
    const offset = 0;
    const tab = query.tab || "author";
    const p =
      tab === "author"
        ? {
            author: params.username,
            limit,
            offset,
          }
        : {
            favorited: params.username,
            limit,
            offset,
          };
    const [articleRes, profileRes] = await Promise.all([
      getArticles(p),
      getUserProfile(params.username)
    ]);
    const {articles} = articleRes.data;
    const { profile } = profileRes.data
    return {
      articles,
      profile,
      tab,
    };
  },
  watchQuery: ["tab"],
  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true;
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
      article.favoriteDisabled = false;
    },
  },
};
</script>