export default {
  schema: './src/db/schema.js',
  out: './drizzle',
  dialect: 'sqlite',
  driver: 'd1-http',
  dbCredentials: {
    wranglerConfigPath: 'wrangler.jsonc',
    dbName: 'diaryvio',
  },
}; 