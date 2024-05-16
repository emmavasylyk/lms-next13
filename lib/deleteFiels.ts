import { UTApi } from "uploadthing/server";

export const utapi = new UTApi();

export function getFileName(url: string) {
  const urlObject = new URL(url);
  const pathname = urlObject.pathname;
  const filename = pathname.substring(pathname.lastIndexOf("/") + 1);
  return filename;
}
