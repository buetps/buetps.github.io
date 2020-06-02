<template>
    <div>
        <v-carousel :height="height" show-arrows hide-delimiters mandatory v-model=selectedPhoto :continuous="false">
            <v-carousel-item v-for="(photo, photoIndex) in data" :key=photoIndex transition="fade-transition" reverse-transition="fade-transition">
                <v-img  :src="directory+photo.id+'.jpg'" contain :height="height"></v-img>
            </v-carousel-item>
        </v-carousel>
        <p>{{data[selectedPhoto].description}}</p>
    </div>
</template>
<script>
export default {
    name: "GalleryComponent",
    props: {
        data: Array,
        directory: String,
        height: Number
    },
    data(){
        return {
            selectedPhoto: 0
        }
    },
    methods: {
        _keyListener(e){
            switch(e.keyCode){
                case 37:
                    if(this.selectedPhoto != 0){
                        this.selectedPhoto--; 
                    }
                    break;
                case 39:
                    if(this.selectedPhoto != this.data.length-1){
                        this.selectedPhoto++; 
                    }
                    break;
            }
        }
    },
    mounted(){
        this.selectedPhoto = 0;
        document.addEventListener('keydown', this._keyListener);
    },
    destroyed() {
        document.removeEventListener('keydown', this._keyListener);
    }
}
</script>