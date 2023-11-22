export default {
  OWNERS: [ "starudream" ],

  REGEX: /^https:\/\/github\.com\/(.+)\/(.+)\/(releases|archive)\/(.*$)/i,

  HTML: `
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>GitHub Proxy</title>
    <link rel="icon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg">
    <script src="https://cdn.tailwindcss.com/3.3.5"></script>
</head>
<body>
<div class="flex h-screen items-center justify-center bg-[#fbfbfb]">
    <div class="grid w-full md:w-1/3 px-10 md:px-1 grid-rows-4 gap-3">
        <p class="font-semibold text-gray-700">Please input the GitHub link:</p>
        <input type="text" id="link" class="w-full rounded border p-2 text-sm" placeholder="GitHub Link" autofocus/>
        <button id="submit" class="rounded bg-[#FD5E57] text-gray-50 hover:bg-gradient-to-r hover:from-[#FD5E57] hover:to-[#FC477E]">Download</button>
        <a href="">
            <p class="mt-4 flex items-center text-xs text-gray-500 hover:text-gray-700">
                See source code on GitHub
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-1 h-3 w-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
            </p>
        </a>
    </div>
</div>
<script type="text/javascript">
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelector("#submit").addEventListener("click", function () {
            const link = document.querySelector("#link").value
            if (link) {
                window.location.href = window.location.origin + "/" + link
            }
        })
    })
</script>
</body>
</html>
`,
}
