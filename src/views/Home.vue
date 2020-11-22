<template>
  <main class="home full-width">
    <hero></hero>
    <statment></statment>
    <features></features>
    <projects></projects>
    <contact></contact>
    <footer-cmp></footer-cmp>
  </main>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero';
import Statment from '@/components/Statment';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import FooterCmp from '@/components/FooterCmp';
export default {
  name: 'Home',
  components: {
    Hero,
    Statment,
    Features,
    Projects,
    Contact,
    FooterCmp
  },
};
</script>
