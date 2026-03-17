export default {
  async fetch(request) {
    const url = new URL(request.url);
    const hostname = url.hostname;

    let path = "/";

    if (hostname === "app.mychurchflow.app") {
      path = "/app/";
    } else if (hostname === "admin.mychurchflow.app") {
      path = "/admin/";
    }

    const newUrl = new URL(request.url);
    newUrl.hostname = "mychurchflow.pages.dev";
    newUrl.pathname = path;

    return fetch(newUrl, request);
  },
};