class CorsConfig {
  constructor() {
    if (CorsConfig.instance) {
      return CorsConfig.instance;
    }
    this.whitelist = ["http://localhost:3000", "http://localhost:5173", null];
    CorsConfig.instance = this;
  }

  configuration = () => ({
    origin: (origin, callback) => {
      if (this.whitelist.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  });

  static getInstance() {
    if (!CorsConfig.instance) {
      CorsConfig.instance = new CorsConfig();
    }
    return CorsConfig.instance;
  }
}

const corsConfig = CorsConfig.getInstance();
export default corsConfig;
