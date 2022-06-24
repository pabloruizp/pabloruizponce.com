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
            this.projects.push({ id: doc.id, name: doc.data().name, description: doc.data().description });
        });
    },
    components: { ProjectPreview }
}
</script>


<template>
  <div class="projects">
    <ProjectPreview v-for="project in projects" :id=project.id :name=project.name :description=project.description />
  </div>
</template>


<style>
  .projects {
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
