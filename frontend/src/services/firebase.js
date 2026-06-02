import { initializeApp } from "firebase/app";

// --- Configured Sandbox Credentials ---
const firebaseConfig = {
  apiKey: "AIzaSyD-FixKartSandboxApiKeyForCollegeProj",
  authDomain: "fixkart-service.firebaseapp.com",
  projectId: "fixkart-service",
  storageBucket: "fixkart-service.appspot.com",
  messagingSenderId: "9901438220",
  appId: "1:9901438220:web:fixkartsandboxappiddemo"
};

// Initialize Firebase (Sandbox fallback handles gracefully if offline)
let app;
let authMockInstance = null;

try {
  app = initializeApp(firebaseConfig);
} catch (e) {
  console.warn("Firebase Initialized in Offline Mock Sandbox Mode.", e.message);
}

// Custom Premium Authentication Provider simulation
export const firebaseAuthService = {
  loginWithEmail: async (email, password) => {
    // Simulate server latency
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (email && password.length >= 6) {
      const user = {
        uid: "fk-" + Math.random().toString(36).substr(2, 9),
        email: email,
        displayName: email.split("@")[0].toUpperCase(),
        emailVerified: true
      };
      localStorage.setItem("fk_user", JSON.stringify(user));
      return { success: true, user };
    }
    throw new Error("Invalid password credentials. Minimum 6 characters required.");
  },

  registerWithEmail: async (email, password, displayName, role) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email && password.length >= 6) {
      const user = {
        uid: "fk-" + Math.random().toString(36).substr(2, 9),
        email: email,
        displayName: displayName || email.split("@")[0],
        role: role || "customer",
        emailVerified: true
      };
      localStorage.setItem("fk_user", JSON.stringify(user));
      return { success: true, user };
    }
    throw new Error("Registration details rejected. Please verify email structures.");
  },

  signOutUser: async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    localStorage.removeItem("fk_user");
    return { success: true };
  },

  getCurrentUser: () => {
    try {
      const u = localStorage.getItem("fk_user");
      return u ? JSON.parse(u) : null;
    } catch {
      return null;
    }
  }
};
