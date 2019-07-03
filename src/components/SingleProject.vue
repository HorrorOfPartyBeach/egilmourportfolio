<template>
<div id="single-project-view">
    <FirstProject v-if="firstProject()"></FirstProject>
    <SecondProject v-if="secondProject()"></SecondProject>
    <ThirdProject v-if="thirdProject()"></ThirdProject>
</div>
</template>

<script>
import FirstProject from './FirstProject.vue';
import SecondProject from './SecondProject.vue';
import ThirdProject from './ThirdProject.vue';

export default {
    name: 'SingleProject',
    components: {
        "FirstProject": FirstProject,
        "SecondProject": SecondProject,
        "ThirdProject": ThirdProject
    },
methods: {
      firstProject() {
        if(this.$route.path == "/project/portfolio") {
          return true
        } else {
          return false
        }
      },
      secondProject() {
          if(this.$route.path == "/project/daisy") {
          return true
        } else {
          return false
        }
      },
      thirdProject() {
          if(this.$route.path == "/project/previous") {
          return true
        } else {
          return false
        }
      }
    }
}
</script>

<style scoped>
/* #single-project-view {
  background-color: rgb(231, 15, 15);
} */
</style>