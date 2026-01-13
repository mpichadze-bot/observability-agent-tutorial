// Simple Username/Password Authentication Service

const VALID_CREDENTIALS = {
  username: 'ObsAgent',
  password: '!@#QWEasd'
};

// Check if user is authenticated
export const isAuthenticated = () => {
  const authData = localStorage.getItem('app_auth');
  if (!authData) return false;

  try {
    const auth = JSON.parse(authData);
    // Check if session is expired (24 hours)
    if (auth.expires_at && Date.now() > auth.expires_at) {
      localStorage.removeItem('app_auth');
      return false;
    }
    return true;
  } catch {
    return false;
  }
};

// Get current user info
export const getCurrentUser = () => {
  const authData = localStorage.getItem('app_auth');
  if (!authData) return null;

  try {
    return JSON.parse(authData);
  } catch {
    return null;
  }
};

// Login with username and password
export const login = (username, password) => {
  // Normalize username (case-insensitive)
  const normalizedUsername = username.trim();

  // Check credentials
  if (normalizedUsername.toLowerCase() !== VALID_CREDENTIALS.username.toLowerCase() ||
      password !== VALID_CREDENTIALS.password) {
    throw new Error('Invalid username or password');
  }

  // Store auth data (24 hour session)
  const authData = {
    username: normalizedUsername,
    loggedInAt: Date.now(),
    expires_at: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
  };

  localStorage.setItem('app_auth', JSON.stringify(authData));
  return authData;
};

// Logout
export const logout = () => {
  localStorage.removeItem('app_auth');
  window.location.href = '/';
};
