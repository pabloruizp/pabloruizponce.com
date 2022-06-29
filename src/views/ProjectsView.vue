<script>
import db from "../firebaseInit.js";
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import ProjectPreview from "../components/ProjectPreview.vue";
import FeaturedPreview from "../components/FeaturedPreview.vue";

export default {
    data: () => ({
        projects: [],
        featured: []
    }),
    async mounted() {
        const projects = query(collection(db, "projects"), orderBy("creation_date", "desc"));
        const querySnap = await getDocs(projects);
        querySnap.forEach((doc) => {
            const project = { id: doc.id, name: doc.data().name, description: doc.data().description, tags: doc.data().tags}
            
            if(doc.data().github != null) {
              project['github'] = doc.data().github
            }
            
            if(doc.data().demo != null) {
              project['demo'] = doc.data().demo
            }

            if(doc.data().documentation != null) {
              project['documentation'] = doc.data().documentation
            }

            if(doc.data().featured == true) {
                const storage = getStorage();
                const storageRef = ref(storage, "featured/" + doc.id + ".png");
                getDownloadURL(storageRef).then((url) => {
                  project['imageURL'] = url
                  this.featured.push(project)
                })
            } else {
                this.projects.push(project);
            }
            
        });
    },
    components: { ProjectPreview, FeaturedPreview }
}
</script>


<template>
  <div class="projects">
    <div class="featured-grid">
      <FeaturedPreview v-for="project in featured" :id=project.id :name=project.name :description=project.description :github="project.github" :demo="project.demo" :imageURL="project.imageURL" :tags="project.tags" :documentation="project.documentation"></FeaturedPreview>
    </div>
    <div class="projects-grid">
      <ProjectPreview v-for="project in projects" :id=project.id :name=project.name :description=project.description :github="project.github" :demo="project.demo" :tags="project.tags" :documentation="project.documentation"/>
    </div>
  </div>
</template>


<style>
  .featured-grid {
    display: grid;
    grid-template-columns: 50vw;
    column-gap: 2vw;
    row-gap: 2vw;
    margin-bottom: 3em;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: 25vw 25vw 25vw;
    column-gap: 2vw;
    row-gap: 2vw;
  }

  .projects {
    margin: 2vw 10vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
