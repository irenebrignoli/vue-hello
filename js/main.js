/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/


const { createApp } = Vue

  createApp({
    data() {
      return {
        artist: 'Keith Haring',
        picture: 'https://www.travelonart.com/wp-content/uploads/2016/05/keith-1024x683.jpg',
        picture_name: 'Animals'
      }
    }
  }).mount('#app')