<template>
  <section class="project-description-container" v-if="project">
    <router-link to="/"><black-screen></black-screen></router-link>
    <div class="title-container flex align-center">
       <div class=" close-btn-container mra cursor-pointer"><router-link to="/"><div class="close-btn "></div></router-link></div>
      <h1 class="mra">{{ project.title }}</h1>
    </div>
    <img :src="project.imgUrl" />
    <div class="project-description-details">
      <p>{{ project.description }}</p>
      <ul class="clean-list">
        <li v-for="tag in tags" :key="tag">
          #{{ tag }}
        </li>
      </ul>
    </div>
    <div class="btns-container full-width flex ">
      <a :href="project.live" target="_blank"> <button>Live</button></a>
      <a :href="project.repo" target="_blank"><button>Code</button></a>
    </div>
  </section>
</template>

<script>
import { projectService } from '@/services/projectsService';
import  BlackScreen from '@/components/BlackScreen';
export default {
  data() {
    return {
      project: null,
    };
  },
  async created() {
    await this.loadProject();
  },
  methods: {
    async loadProject() {
      const projectId = this.$route.params.projectId;
      const currProject = await projectService.getById(projectId);
      this.project = currProject;
    },
    getImgUrl(pic) {
      return require('../assets/projects-imgs/' + pic);
    },
  },
  computed: {
    tags() {
      return this.project.tags;
    },
  },
  components:{
    BlackScreen
  }
};
</script>

<style>
</style>