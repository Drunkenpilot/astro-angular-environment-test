const env = import.meta.env;

console.log(env.PUBLIC_SECRET);
console.log(env.SECRET);
console.log(env.SECRET_SECRET);

export const secrets = {
  PUBLIC_SECRET: env.PUBLIC_SECRET,
  SECRET: env.SECRET,
  SECRET_SECRET: env.SECRET_SECRET,
};
