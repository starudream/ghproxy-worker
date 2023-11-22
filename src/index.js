import config from "./config"

export default {
  async fetch(req) {
    const url = new URL(req.url)
    const target = url.pathname.slice(1)

    if (target.length <= "https://github.com/".length) {
      return new Response(config.HTML, { headers: { "Content-Type": "text/html" } })
    }

    const matches = config.REGEX.exec(target)

    if (!matches || matches.length !== 5) {
      return new Response("invalid", { status: 400 })
    }

    if (req.method === "options" && req.headers.has("Access-Control-Request-Headers")) {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,TRACE,DELETE,HEAD,OPTIONS",
          "Access-Control-Allow-Headers": req.headers.get("Access-Control-Request-Headers"),
          "Access-Control-Max-Age": "1728000",
        },
      })
    }

    const owner = matches[1]

    let allow = false
    for (const i in config.OWNERS) {
      if (owner === config.OWNERS[i]) {
        allow = true
        break
      }
    }

    if (!allow) {
      return new Response("forbidden", { status: 403 })
    }

    const res = await fetch(target, { method: req.method, headers: req.headers, body: req.body, redirect: "follow" })

    const headers = new Headers(res.headers)
    headers.set("X-Proxy-Redirect", res.url)

    return new Response(res.body, { status: res.status, headers: headers })
  },
}
