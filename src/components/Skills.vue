<template>
  <div>
    <div class="page-title">Skills</div>
    <div class="page-items">
      <p>使用言語、ツール</p>
      <div>
        <ul v-for="skill of skills" :key="skill">
          <li>{{ skill }}</li>
        </ul>
      </div>
      <p>勉強中</p>
      <div>
        <ul v-for="skill of studySkills" :key="skill">
          <li>{{ skill }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: ["HTML", "CSS", "JavaScript", "Java", "PostgreSQL/SQL", "Git/GitHub"],
      studySkills: ["Vue", "React", "PHP", "Firebase"],
    };
  },
};
</script>
script

<style scoped>
.page-title {
  padding: 4rem 0 2rem 4rem;
  font-size: 3rem;
}

.page-items {
  padding: 2rem 0 2rem 4rem;
  font-size: 1.5rem;
}
.page-items p{
  margin: 1rem 0;
}
</style>
