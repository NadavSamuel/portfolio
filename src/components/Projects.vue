<template>
  <section id="projects" class="projects-container flex justify-center">
      <div class="projects-intro text-center">
          <h2>My recent projects </h2>
          <p>Here are a few projects I've worked on recently. Want to see more?<span class="cursor-pointer"> 
            <a href="mailto:samuelna9@gmail.com"> Email me.</a></span></p>
          <project-list :projects="projects"></project-list>

      </div>
  </section>
</template>

<script>
import {projectService} from '../services/projectsService'
import ProjectList from '@/components/ProjectList'
export default {
  data(){
    return{
      projects:null
    }
  },
  created(){
    this.onLoadProjects()

  },
  methods:{
    async onLoadProjects(){
      this.projects = await projectService.loadProjects()
      // console.log('projects are => , ' , this.projects)
    }

  },
    components: {
      ProjectList,
    }

}
</script>

<style>

</style>