# TODO for Dynamic Menu Display in index.html

- [x] Remove static div.img elements from #profile-images container in index.html
- [x] Add JavaScript code to fetch data/menu.json
- [x] Parse JSON and skip index 0 from menu array
- [x] For each remaining item, create div.img with anchor (href from MLink) and img (src generated as ./images/0X.jpeg where X is index+1)
- [x] Append the created elements to #profile-images container
- [ ] Test the dynamic loading by running the page
