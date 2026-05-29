// All chart specs are loaded here and embedded into the page

const chartConfigs = [
  { id: "chart-world-map", spec: "charts/world_map.vg.json" },
  { id: "chart-genre-tides", spec: "charts/genre_tides.vg.json" },
  { id: "chart-films-each-year", spec: "charts/films_each_year.vg.json" },
  { id: "chart-genre-shape", spec: "charts/genre_shape.vg.json" },
  { id: "chart-languages-of-cinema", spec: "charts/languages_of_cinema.vg.json" },
  { id: "chart-two-crowds", spec: "charts/two_crowds_taste.vg.json" },
  { id: "chart-budget-revenue", spec: "charts/budget_vs_revenue.vg.json" },
  { id: "chart-rating-vs-reviews", spec: "charts/rating_vs_reviews.vg.json" },
  { id: "chart-power-players", spec: "charts/power_players.vg.json" },
  { id: "chart-country-genre-flow", spec: "charts/country_genre_flow.vg.json" },
];

// Embed each chart with shared options
chartConfigs.forEach(({ id, spec }) => {
  vegaEmbed("#" + id, spec, {
    actions: false,       
    renderer: "svg",       
  }).catch(err => console.error(`Error rendering ${id}:`, err));
});