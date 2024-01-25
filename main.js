const { createApp, ref, onMounted } = Vue;

// <input ref="input">  реф - это метка на html элемент

const Test = {
    props: [
        'index'
    ],
    template: `
        <div>{{ index }}</div>
    `

}

const Root = {
    template: `
        <v-test :index="index">
        </v-index>
    `,
    setup () {
        const index = ref([1, 2, 3, 4, 5, 6]);

        

        return {
            inc,
            index
        };
    }
};


const app = createApp(Root);

app.component('#VTest')
app.mount('#app');