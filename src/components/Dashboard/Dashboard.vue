<template>
  <v-container>
    <v-row class="">
      <v-col>
        <h2>Widgets</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4">
        <v-card v-for="item in itemsList">
          <v-card-title>
            <h3>{{ item.title }}</h3>
          </v-card-title>
          <v-card-text>
            <p>{{ item.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  data: () => ({
    itemsList: [
      {
        id: 1,
        title: 'Widget 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, odio.',
        img: ''
      },
      {
        id: 2,
        title: 'Widget 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, earum?',
        img: ''
      },
      {
        id: 3,
        title: 'Widget 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, officiis!',
        img: ''
      },
    ]
  })
}
</script>

<style scoped>

</style>