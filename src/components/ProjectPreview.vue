<script>
export default {
  props: {
    id: String,
    name: String,
    description: String
  }
}
</script>

<template>
    <div class="base-preview">
        <div class="name-preview">
            {{name}}
        </div>
        <div class="description-preview">
            {{description}}
        </div>
    </div>
</template>

<style>
.base-preview {
    font-family: 'Inter';
    width: 30vw;
    margin-bottom: 2em;
    text-align: justify;  
    padding: 2em;  
    border: 1px solid rgb(211, 211, 211);
    border-radius: 0.5em;
}

.name-preview {
    font-weight: 800;
}

.description-preview {
    font-weight: 200;
}

</style>