// All chart specs are loaded here and embedded into the page

const chartConfigs = [
  { id: "chart-world-map", spec: "charts/world_map.vg.json" },
  // Add more charts here as you build them
  // { id: "chart-top-countries", spec: "charts/top_countries.vg.json" },
];

// Embed each chart with shared options
chartConfigs.forEach(({ id, spec }) => {
  vegaEmbed("#" + id, spec, {
    actions: false,        // hides the "..." menu — cleaner look
    renderer: "svg",       // SVG renders crisper than canvas for static charts
  }).catch(err => console.error(`Error rendering ${id}:`, err));
});