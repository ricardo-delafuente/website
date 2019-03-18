export const getCookieFromReq = (req, key) => {
  const cookie = req.headers.cookie
    .split(';')
    .find(c => c.trim().startsWith(`${key}=`));

  if (!cookie) return undefined;

  return cookie.split('=')[1];
};
