import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
  data() {
    return {
      element: document.querySelector('.llamachain'),
    };
  },
  computed: {},
  created() {
    //
  },
  mounted() {
    this.element = document.querySelector('.llamachain');
    document.documentElement.style.setProperty('--x', 100 * 1.5 + '%');
    document.documentElement.style.setProperty('--y', 100 * 1.5 + '%');

    document.documentElement.style.setProperty('--bg-x', 0 + '%');
    document.documentElement.style.setProperty('--bg-y', 0 + '%');

    document.documentElement.style.setProperty('--r-x', 0 + 'deg');
    document.documentElement.style.setProperty('--r-y', 0 + 'deg');

    // Call the function to start the rotation
    this.rotateEvoli();
  },
  methods: {
    rotateEvoli() {
      const llamachain = document.querySelector('.llamachain');
      const radius = 150; // Distance from the center of the element
      let angle = 0; // Initial angle
  
      function animate() {
          if (!llamachain) return;
  
          const rect = llamachain.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
  
          // Increment angle to create rotation effect
          angle += 0.01; // Adjust speed of rotation by changing this value
  
          // Calculate new cursor position in circular path
          const cursorX = centerX + radius * Math.cos(angle);
          const cursorY = centerY + radius * Math.sin(angle);
  
          // Update cursor position relative to the circular path
          const X = (cursorX - rect.left) / rect.width;
          const Y = (cursorY - rect.top) / rect.height;
  
          const rX = -(X - 0.5) * 26;
          const rY = (Y - 0.5) * 26;
  
          const bgX = 40 + 20 * X;
          const bgY = 40 + 20 * Y;
  
          document.documentElement.style.setProperty('--x', 200 * X + '%');
          document.documentElement.style.setProperty('--y', 200 * Y + '%');
  
          document.documentElement.style.setProperty('--bg-x', bgX + '%');
          document.documentElement.style.setProperty('--bg-y', bgY + '%');
  
          document.documentElement.style.setProperty('--r-x', rX + 'deg');
          document.documentElement.style.setProperty('--r-y', rY + 'deg');
  
          // Loop the animation
          requestAnimationFrame(animate);
      }
  
      // Start the animation loop
      animate();
    },
  },
});
