const replace = require('@rollup/plugin-replace');

module.exports = {
  // ...otras configuraciones de Rollup...
  plugins: [
    replace({
      preventAssignment: true,
      // ...otras opciones de reemplazo...
    }),
    // ...otros plugins...
  ],
};
