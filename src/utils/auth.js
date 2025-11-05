// LocalStorage utility functions for auth and config handling

export const LS_USERS = "sg_users";
export const LS_AUTH = "sg_auth";
export const LS_CONFIG = "sg_config_key";

export function getRegisteredUsers() {
  try {
    return JSON.parse(localStorage.getItem(LS_USERS)) || [];
  } catch {
    return [];
  }
}

export function saveRegisteredUsers(users) {
  localStorage.setItem(LS_USERS, JSON.stringify(users));
}

export function setAuth(email) {
  localStorage.setItem(LS_AUTH, email);
}

export function getAuth() {
  return localStorage.getItem(LS_AUTH);
}

export function clearAuth() {
  localStorage.removeItem(LS_AUTH);
}

export function setConfigKey(key) {
  localStorage.setItem(LS_CONFIG, key);
}

export function getConfigKey() {
  return localStorage.getItem(LS_CONFIG);
}
