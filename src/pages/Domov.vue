<template>
  <div>
    <h1>Home</h1>
    <label for="selection">Vyberte typ:</label>
    <select id="selection" v-model="kategoria">
      <option value="" selected>All type</option>
      <option value="laser">Laser</option>
      <option value="inkjet">InkJet</option>
      <option value="3d">3D</option>
    </select>

    <section v-if="kategoria === 'laser' || kategoria === ''">
      <h2>Laser</h2>
      <div v-for="printer in laserPrinters" :key="printer.name">
        <img :src="`/images/${printer.image}`" :alt="printer.name" />
        <h3>{{ printer.name }}</h3>
        <p>Cena: {{ printer.price }} €</p>
      </div>
    </section>

    <section v-if="kategoria === 'inkjet' || kategoria === ''">
      <h2>InkJet</h2>
      <div v-for="printer in inkjetPrinters" :key="printer.name">
        <img :src="`/images/${printer.image}`" :alt="printer.name" />
        <h3>{{ printer.name }}</h3>
        <p>Cena: {{ printer.price }} €</p>
      </div>
    </section>

    <section v-if="kategoria === '3d' || kategoria === ''">
      <h2>3D</h2>
      <div v-for="printer in _3dPrinters" :key="printer.name">
        <img :src="`/images/${printer.image}`" :alt="printer.name" >
        <h3>{{ printer.name }}</h3>
        <p>Cena: {{ printer.price }} €</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
img{
  height: 400px;
  width: 600px;
}
</style>

<script>
export default {
  data() {
    return {
      kategoria: '',
      laserPrinters: [
        { name: "Canon i-SENSYS MF231", image: "Canon_laser.jpg", price: 339 },
        { name: "Epson WorkForce AL-M320DN Series", image: "Epson_laser.png", price: 243 },
        { name: "HP Laser 107w", image: "HP_laser.jpg", price: 180 },
      ],
      inkjetPrinters: [
        { name: "Canon PIXMA TS3355 black", image: "Canon_InkJet.jpg", price: 49 },
        { name: "Epson WorkForce Pro WF-C4310DW A4 WF", image: "Epson_InkJet.jpg", price: 189 },
        { name: "HP Smart Tank 580", image: "HP_InkJet.jpg", price: 159 },
      ],
      _3dPrinters: [
        { name: "Prusa MK4", image: "Prusa_MK4.jpg", price: 889 },
        { name: "Prusa SL1S SPEED", image: "Prusa_SL1S_SPEED.jpg", price: 1979 },
        { name: "Prusa MINI+", image: "Prusa_MINI.jpg", price: 459 },
      ],
    };
  },
};
</script>

