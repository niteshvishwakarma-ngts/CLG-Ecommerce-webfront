
export const HttpMethod = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Patch: "PATCH",
  Delete: "DELETE",
};

const ApiRoutes = {
  auth: {
    signup: { Method: HttpMethod.Post, Endpoint: "auth/sign-up" },
    login: { Method: HttpMethod.Post, Endpoint: "auth/login" },
    reset: { Method: HttpMethod.Post, Endpoint: "auth/reset-password" },
    forget: { Method: HttpMethod.Post, Endpoint: "auth/forget-password" },
    updateProfile: {Method: HttpMethod.Patch,Endpoint: "/user/update-profile",},
    updateImage: { Method: HttpMethod.Post, Endpoint: "/upload" },
    newsletterSubscribe: {Method: HttpMethod.Post,Endpoint: "/user/newsletter-subscribe",},
    Contact: { Method: HttpMethod.Post, Endpoint: "/user/contact-us" },
   },   
};      
    
    
  
      
      
    


export default ApiRoutes;
