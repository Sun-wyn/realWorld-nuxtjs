<template>
  <div>
    <template v-if="user">
      <form class="card comment-form">
        <div class="card-block">
          <textarea
            v-model="commentVal"
            class="form-control"
            placeholder="Write a comment..."
            rows="3"
          ></textarea>
        </div>
        <div class="card-footer">
          <img
            src="http://i.imgur.com/Qr71crq.jpg"
            class="comment-author-img"
          />
          <button
            class="btn btn-sm btn-primary"
            @click="addComment"
            type="button"
          >
            Post Comment
          </button>
        </div>
      </form>
      <div class="card" v-for="comment in comments" :key="comment.id">
        <div class="card-block">
          <p class="card-text">{{ comment.body }}</p>
        </div>
        <div class="card-footer">
          <nuxt-link
            :to="{
              name: 'profile',
              params: {
                username: comment.author.username,
              },
            }"
            class="comment-author"
          >
            <img
              :src="comment.author.image"
              class="comment-author-img"
            /> </nuxt-link
          >&nbsp;
          <nuxt-link
            :to="{
              name: 'profile',
              params: {
                username: comment.author.username,
              },
            }"
            class="comment-author"
            >{{ comment.author.username }}</nuxt-link
          >
          <span class="date-posted">{{
            comment.createdAt | date("MMM DD, YYYY")
          }}</span>
          <span class="mod-options">
            <i class="ion-trash-a" @click="deleteComment(comment.id)"></i>
          </span>
        </div>
      </div>
    </template>
    <p v-else style="display: inherit">
      <nuxt-link to="/login">Sign in</nuxt-link> or
      <nuxt-link to="/register">sign up</nuxt-link> to add comments on this
      article.
    </p>
  </div>
</template>
<script>
import { getComments, addComments, deleteComments } from "@/api/article";
import { mapState } from "vuex";

export default {
  name: "ArticleComments",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(["user"]),
  },
  data() {
    return {
      comments: [], //文章列表
      commentVal: "", //评论内容
    };
  },
  async mounted() {
    this.getComment();
  },
  methods: {
    async addComment() {
      if (this.commentVal.length === 0) return;
      await addComments(this.article.slug, {
        comment: {
          body: this.commentVal,
        },
      });
      this.getComment();
      this.commentVal = "";
    },
    async getComment() {
      const { data } = await getComments(this.article.slug);
      this.comments = data.comments;
    },
    async deleteComment(id) {
      await deleteComments(this.article.slug, id);
      this.getComment();
    },
  },
};
</script>