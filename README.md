# What is it

It's a test task for Smart Recruiters. It's a media gallery arranged in a bento grid, where one of the assets is a video that opens in a modal.

In this version of my solution I approached the task as if it was a standalone component. This solution features no granularity - it contains a single, static HTML file that renders images served locally. I copied the stylesheet from the more advanced version of the solution, but here the SCSS main file is compiled to a single stylesheet `main.css` which is linked in the `<head>` of the document.

Similarly with scripts: I used TypeScript, which was compiled (using the command `tsc scripts/modal.ts --outDir scripts`) to vanilla JavaScript, which is linked at the end of the `<body>` of the document.

This version of the solution is ready to be uploaded and used elsewhere.

# Tech stack used

- HTML5
- SCSS (using variables and partials)
- TypeScript

# How to run it

## Locally

1. open `index.html` in the browser (or use e.g. Five Server VS Code plugin), or right click and 'show preview'.
2. if you want to make any changes to styles, use e.g. Live Sass compiler VS Code plugin.
3. if you want to make any changes to scripts, use `tsc` command.

## Live

Live version is deployed with Netlify and can be found here: https://smartrecruiters-task.netlify.app/

Project deploy status:

[![Netlify Status](https://api.netlify.com/api/v1/badges/788f5094-721c-4d0a-adc8-7fa9417e81b2/deploy-status)](https://app.netlify.com/projects/smartrecruiters-task/deploys)
