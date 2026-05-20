// All chart specs are loaded here and embedded into the page

const chartConfigs = [
  { id: "chart-world-map", spec: "charts/world_map.vg.json" },
  { id: "chart-top-countries", spec: "charts/top_countries.vg.json" },
  { id: "chart-genre-tides", spec: "charts/genre_tides.vg.json" },
  { id: "chart-films-each-year", spec: "charts/films_each_year.vg.json" },
  { id: "chart-genre-shape", spec: "charts/genre_shape.vg.json" },
  { id: "chart-languages-of-cinema", spec: "charts/languages_of_cinema.vg.json" }
];

// Embed each chart with shared options
chartConfigs.forEach(({ id, spec }) => {
  vegaEmbed("#" + id, spec, {
    actions: false,       
    renderer: "svg",       
  }).catch(err => console.error(`Error rendering ${id}:`, err));
});