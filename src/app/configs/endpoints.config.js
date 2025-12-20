const ApiRoutes = {
  auth: {
    login: { Method: "POST", Endpoint: "/auth/login" },
    signup: { Method: "POST", Endpoint: "/auth/signup" },
    forget: { Method: "POST", Endpoint: "/auth/forget-password" },
    reset: { Method: "POST", Endpoint: "/auth/reset-password" },
    updateProfile: { Method: "PUT", Endpoint: "/auth/profile" },
    updateImage: { Method: "PUT", Endpoint: "/auth/profile-image" },
    newsletterSubscribe: { Method: "POST", Endpoint: "/newsletter" },
    Contact: { Method: "POST", Endpoint: "/contact" },
  },

  // ✅ PRODUCTS
  products: {
    topPicks: {
      Method: "GET",
      Endpoint: "/products/top-picks",
    },
    details: {
      Method: "GET",
      Endpoint: "/products", // + /:id
    },
  },
};

export default ApiRoutes;
