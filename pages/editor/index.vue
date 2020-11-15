<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <ul class="error-messages">
            <template v-for="(messages, field) in errors">
              <li v-for="(message, index) in messages" :key="field + index">
                {{ field }} {{ message }}
              </li>
            </template>
          </ul>
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="article.title"
                  :disabled="disabled"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="article.description"
                  :disabled="disabled"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="article.body"
                  :disabled="disabled"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="tag"
                  :disabled="disabled"
                  @keyup.enter.prevent="addTagList"
                />
                <div class="tag-list">
                  <span
                    class="tag-default tag-pill ng-binding ng-scope"
                    v-for="(item, index) in article.tagList"
                    :key="index"
                  >
                    <i class="ion-close-round" @click="delTag(index)"></i>
                    {{ item }}
                  </span>
                </div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click="publidArticle"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { addArticle, getArticle, updateArticle } from "@/api/article";

export default {
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: "authenticated",
  name: "editorIndex",
  data() {
    return {
      article: {
        title: "",
        description: "",
        body: "",
        tagList: [],
      },
      tag: "",
      disabled: false,
      errors: [],
    };
  },
  async asyncData({ params }) {},
  mounted() {
    this.resetForm();
    this.getArticle()
  },
  methods: {
    // 添加tag列表
    addTagList() {
      this.article.tagList.push(this.tag);
      this.tag = "";
    },
    // 移除某个tag
    delTag(idx) {
      this.article.tagList.splice(idx, 1);
    },
    // 发布文章
    async publidArticle() {
      this.disabled = true;
      try {
        const p = {
          article: this.article,
        };
        let data = {};
        if (this.$route.params.slug) {
          const slug = this.$route.params.slug;
          data = await updateArticle(slug, p);
        } else {
          data = await addArticle(p);
        }
        const slug = data.data.article.slug;
        this.disabled = false;
        this.resetForm();
        this.$router.push({
          name: "article",
          params: {
            slug,
          },
        });
      } catch (error) {
        this.disabled = false;
        this.errors = error.response.data.errors;
      }
    },
    // 获取文章
    async getArticle() {
      if (this.$route.params.slug) {
        const slug = this.$route.params.slug
        const { data } = await getArticle(slug);
        const { title, description, body, tagList } = data.article;
        this.article = {
          title,
          description,
          body,
          tagList,
        };
      }
    },
    // 重置表单
    resetForm() {
      this.article = {
        title: "",
        description: "",
        body: "",
        tagList: [],
      };
      this.tag = "";
      this.errors = [];
    },
  },
};
</script>