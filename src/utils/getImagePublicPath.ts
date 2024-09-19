export const getImagePublicPath = ({ path, dir }: { path: string; dir?: string }) => {
  return `/images/${dir ? dir + "/" : ""}${path}`;
};
