(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/configs/endpoints.config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const ApiRoutes = {
    auth: {
        login: {
            Method: "POST",
            Endpoint: "/auth/login"
        },
        signup: {
            Method: "POST",
            Endpoint: "/auth/signup"
        },
        forget: {
            Method: "POST",
            Endpoint: "/auth/forget-password"
        },
        reset: {
            Method: "POST",
            Endpoint: "/auth/reset-password"
        },
        updateProfile: {
            Method: "PUT",
            Endpoint: "/auth/profile"
        },
        updateImage: {
            Method: "PUT",
            Endpoint: "/auth/profile-image"
        },
        newsletterSubscribe: {
            Method: "POST",
            Endpoint: "/newsletter"
        },
        Contact: {
            Method: "POST",
            Endpoint: "/contact"
        }
    },
    // ✅ PRODUCTS
    products: {
        topPicks: {
            Method: "GET",
            Endpoint: "/products/top-picks"
        },
        details: {
            Method: "GET",
            Endpoint: "/products"
        }
    }
};
const __TURBOPACK__default__export__ = ApiRoutes;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/token.util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTokenLocal",
    ()=>getTokenLocal,
    "removeTokenLocal",
    ()=>removeTokenLocal,
    "setTokenLocal",
    ()=>setTokenLocal
]);
const getTokenLocal = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return localStorage.getItem("token");
};
const setTokenLocal = (token)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem("token", token);
};
const removeTokenLocal = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.removeItem("token");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/index.api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$token$2e$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/token.util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
;
const baseURL = ("TURBOPACK compile-time value", "http://localhost:3000/api");
class HttpClient {
    constructor(){
        this.instance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
            baseURL: baseURL || "http://localhost:3000/api",
            timeout: 15000
        });
        // REQUEST
        this.instance.interceptors.request.use((config)=>{
            const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$token$2e$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTokenLocal"])();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config; // 🔴 MUST RETURN
        }, (error)=>Promise.reject(error));
        // RESPONSE
        this.instance.interceptors.response.use((response)=>{
            // 🔴 MUST RETURN DATA
            return response.data;
        }, (error)=>{
            return Promise.reject(error);
        });
    }
    // ===== HTTP METHODS =====
    get(url, config = {}) {
        return this.instance.get(url, config);
    }
    post(url, data, config = {}) {
        return this.instance.post(url, data, config);
    }
    put(url, data, config = {}) {
        return this.instance.put(url, data, config);
    }
    delete(url, config = {}) {
        return this.instance.delete(url, config);
    }
}
const __TURBOPACK__default__export__ = HttpClient;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/auth/auth.api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$endpoints$2e$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/configs/endpoints.config.js [app-client] (ecmascript)");
// Import the API Routes
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/index.api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$token$2e$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/token.util.js [app-client] (ecmascript)");
;
;
;
;
const baseURL = ("TURBOPACK compile-time value", "http://localhost:3000/api");
class Auth extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    constructor(){
        super(baseURL);
        this._initializeRequestInterceptor();
        this._initializeResponseInterceptor();
    }
    _initializeRequestInterceptor = ()=>{
        this.instance.interceptors.request.use((config)=>{
            config.headers["Authorization"] = `Bearer ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$token$2e$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTokenLocal"])() || ""}`;
            // config.headers["authKey"] = process.env.NEXT_PUBLIC_API_AUTH_KEY;
            // config.headers["Content-Type"] = "text/plain";
            return config;
        });
    };
    _initializeResponseInterceptor = ()=>{
        this.instance.interceptors.response.use(async (response)=>{
            let data;
            if (response) {
                data = await response; // Decrypt response body
                if (data.status == "success") {} else if (data.status == "fail") {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(data.message);
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(response.message);
            // console.log("No encryptedData found in response.");
            }
            return data;
        }, (error)=>Promise.reject(error));
    };
    // **Auth APIs with Encrypted Requests**
    login = async (reqBody)=>{
        return this.instance({
            method: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$endpoints$2e$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.login.Method,
            url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$endpoints$2e$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.login.Endpoint,
            data: reqBody
        });
    };
    // signup
    signup = async (reqBody)=>{
        return this.instance({
            method: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$endpoints$2e$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.signup.Method,
            url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$endpoints$2e$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.signup.Endpoint,
            data: reqBody
        });
    };
    // reset password 
    resetPass = async (reqBody)=>{
        return this.instance({
            method: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$endpoints$2e$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.reset.Method,
            url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$endpoints$2e$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.reset.Endpoint,
            data: reqBody
        });
    };
    // forget password
    forgetPassword = async (reqBody)=>{
        return this.instance({
            method: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$endpoints$2e$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.forget.Method,
            url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$endpoints$2e$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.forget.Endpoint,
            data: reqBody
        });
    };
    //   profileupdate password
    profileUpdate = async (reqBody)=>{
        return this.instance({
            method: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$endpoints$2e$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.updateProfile.Method,
            url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$endpoints$2e$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.updateProfile.Endpoint,
            data: reqBody
        });
    };
    //   profileImage password
    profileImage = async (reqBody)=>{
        return this.instance({
            method: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$endpoints$2e$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.updateImage.Method,
            url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$endpoints$2e$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.updateImage.Endpoint,
            data: reqBody,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    };
    //   newslettersubscribe password
    newsletterSubscribe = async (reqBody)=>{
        return this.instance({
            method: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$endpoints$2e$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.newsletterSubscribe.Method,
            url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$endpoints$2e$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.newsletterSubscribe.Endpoint,
            data: reqBody
        });
    };
    //   contact password
    ContactUs = async (reqBody)=>{
        return this.instance({
            method: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$endpoints$2e$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.Contact.Method,
            url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$configs$2f$endpoints$2e$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.Contact.Endpoint,
            data: reqBody
        });
    };
}
//  Export an instance of the `Auth` class
const authInstance = new Auth();
const __TURBOPACK__default__export__ = authInstance;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/newsletter/NewsletterPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsletterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$auth$2f$auth$2e$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/auth/auth.api.js [app-client] (ecmascript)"); // using your existing setup
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function NewsletterPage() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // simple email validation
    const isValidEmail = (value)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const handleSubmit = async ()=>{
        if (!email) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter your email");
            return;
        }
        if (!isValidEmail(email)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a valid email address");
            return;
        }
        try {
            setLoading(true);
            // 🔹 API call
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$auth$2f$auth$2e$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].newsletterSubscribe({
                email
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("🎉 Successfully subscribed!");
            setEmail("");
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error?.message || "Something went wrong. Please try again.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full px-4 md:px-6 lg:px-8 py-14 bg-[#f7f8f7]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto bg-white rounded-xl px-6 py-10 text-center shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg md:text-xl font-semibold mb-2",
                    children: "Get Exclusive Offers"
                }, void 0, false, {
                    fileName: "[project]/src/components/newsletter/NewsletterPage.jsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500 mb-6",
                    children: "Sign up for our newsletter and get 10% off your first order."
                }, void 0, false, {
                    fileName: "[project]/src/components/newsletter/NewsletterPage.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row items-center justify-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            value: email,
                            onChange: (e)=>setEmail(e.target.value),
                            placeholder: "Enter your email",
                            disabled: loading,
                            className: " w-full sm:w-[260px] border border-gray-300 rounded-md px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-green-500 hover:border-green-400 disabled:bg-gray-100 "
                        }, void 0, false, {
                            fileName: "[project]/src/components/newsletter/NewsletterPage.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSubmit,
                            disabled: loading,
                            className: " bg-[#00ff66] hover:bg-[#00e65c] active:scale-95 text-black font-medium px-6 py-2.5 rounded-md text-sm transition disabled:opacity-60 disabled:cursor-not-allowed ",
                            children: loading ? "Subscribing..." : "Subscribe"
                        }, void 0, false, {
                            fileName: "[project]/src/components/newsletter/NewsletterPage.jsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/newsletter/NewsletterPage.jsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/newsletter/NewsletterPage.jsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/newsletter/NewsletterPage.jsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(NewsletterPage, "GJ4bGuor3Bl+gOvF0O6ErTtqrIU=");
_c = NewsletterPage;
var _c;
__turbopack_context__.k.register(_c, "NewsletterPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_9c915a4f._.js.map