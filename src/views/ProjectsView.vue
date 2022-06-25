<script>
import db from "../firebaseInit.js";
import { collection, getDocs } from 'firebase/firestore';
import ProjectPreview from "../components/ProjectPreview.vue";

export default {
    data: () => ({
        projects: [],
    }),
    async created() {
        const projects = collection(db, "projects");
        const querySnap = await getDocs(projects);
        querySnap.forEach((doc) => {
            const project = { id: doc.id, name: doc.data().name, description: doc.data().description }
            
            if(doc.data().github != null) {
              project['github'] = doc.data().github
            }
            
            if(doc.data().demo != null) {
              project['demo'] = doc.data().demo
            }
            
            this.projects.push(project);
        });
    },
    components: { ProjectPreview }
}
</script>


<template>
  <div class="projects">
    <div class="projects-grid">
      <ProjectPreview v-for="project in projects" :id=project.id :name=project.name :description=project.description :github="project.github" :demo="project.demo" />
    </div>
  </div>
</template>


<style>
  .projects-grid {
    display: grid;
    grid-template-columns: 25vw 25vw 25vw;
    column-gap: 2vw;
    row-gap: 2vw;
  }

  .projects {
    margin: 5vw 10vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
