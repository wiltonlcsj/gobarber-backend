module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'localhost',
  database: 'gobarber',
  define: {
    timestamps: true,
    undescored: true,
    undescoredAll: true,
  },
};
