export const users = [];

export async function userExists(user) {
  return users.some((item) => item.username === user);
}

export async function getHashed(user) {
  return users.find((item) => item.username === user)?.password;
}

export async function createUser(user, hashed) {
  const newUser = {
    username: user,
    password: hashed
  }

  users.push(newUser);
}