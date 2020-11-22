<template>
  <section class="project-list">
    <ul class=" project-list clean-list card-grid">
      <li class="project-in-list " v-for="currProject in projects" :key="currProject.id">
        <project-preview :project="currProject" ></project-preview>
      </li>
    </ul>
  </section>
</template>

<script>
import ProjectPreview from '@/components/ProjectPreview.vue'
export default {
  props: ['projects'],
  methods:{
  },
  components: {
    ProjectPreview,
  },
};
</script>