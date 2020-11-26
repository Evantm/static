# static

Welcome to static. Static is a barebones implementation of using automated github workflows to intergrate with github pages. 

How it works:
- Github work flow runs on a cronjob.
- This workflow scrapes a given JSON endpoint and commits it to a file in this repo
- When loading github pages, the markdown has javascript which reads the file in the repo and uses that to display content
