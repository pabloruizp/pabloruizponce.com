<script>
export default {
  props: {
    id: String,
    name: String,
    description: String,
    github: String,
    demo: String,
    documentation: String,
    tags: []
  }
}
</script>

<template>
    <div class="base-preview">
        <div class="name-preview">
            {{name}}
        </div>
        <div class="tag-preview">
            <span v-for="tag in tags">{{tag}}</span>
        </div>
        <div class="description-preview">
            {{description}}
        </div>
        <div class="links-preview">
            <a v-if="github != null" :href="github">
                <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
            </a>
            <a v-if="demo != null" :href="demo">
                <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                </svg>
            </a>
            <a v-if="documentation != null" :href="documentation">
                <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-file-earmark-medical" viewBox="0 0 16 16">
                    <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317V5.5zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                </svg>
            </a>
        </div>
    </div>
</template>

<style>

.tag-preview {
    display: flex;
    flex-direction: row;
    font-size: 0.9em;
    font-weight: 200;
    color: gray;
    margin-bottom: 1em;
}

.tag-preview > span {
    margin-right: 1em;
}

.base-preview {
    display: flex;
    flex-direction: column;
    font-family: 'Inter';
    text-align: justify;  
    padding: 2em;  
    border-radius: 0.5em;
    position: relative;
    background-color: white;
    box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.2);
    transition: 0.3s ease-in-out;
}

.base-preview:hover {
    transform: translate(0, -20px);
}

.base-preview > * {
    background-color: transparent;
}

.links-preview {
    width: 100%;
    height: 2em;
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 2em;
}

.links-preview > a {
    color: black;
    text-decoration: none;
    width: 2em;
    height: 2em;
    margin-right: 1em;
}

.base-preview > svg {
    width: 2em;
    background-color: white;
}

.name-preview {
    font-weight: 800;
}

.description-preview {
    font-weight: 200;
    margin-bottom: 3em;
}

</style>