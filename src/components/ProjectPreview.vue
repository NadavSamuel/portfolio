<template>
  <article
    v-if="project"
    class="project-preview flex column justify-center align-center"
  >
    <div class="proj-img-container flex justify-center align-center">
      <!-- <img :src="getImgUrl(project.imgName)" /> -->
      <img :src="project.imgUrl" />
      <div class="project-details flex align-center justify-center column">
        <h3 class="project-title">{{ project.title }}</h3>
        <router-link :to="project._id"> <button>Show more</button></router-link>


       
      </div>
    </div>
            <router-view ></router-view>
  </article>
</template>

<script>
export default {
  data() {
    return {
      image: null,
    };
  },
  props: ['project'],

  created() {
  },
  methods: {
    getImgUrl(pic) {
      return require('../assets/projects-imgs/' + pic);
    },
  },
  computed: {
    projectImg() {
      return this.project.imgPath;
    },
  },
  components: {},
};
</script>
<style>
</style>