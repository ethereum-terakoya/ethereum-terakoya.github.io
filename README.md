# ethereum-terakoya.org website

visit : [ethereum-terakoya.org](https://ethereum-terakoya.org)

## deploy

after you make a commit to `source` repositoy, please run:

```bash
yarn deploy
```

## development

this repository use `gatsbyjs` for CMS. please refer it's [document](https://www.gatsbyjs.com/docs/) for development.

### local

after running this command below:

```bash
yarn develop
```

please visit [localhost:8000](http://localhost:8000)

## blog rules

1. all blog contents should be located at `/blog` directory.
2. create child directory with blog's slug name
   1. for example, if your blog's slug will be `sample-post`, create directory named `sample-post`
   2. create `.mdx` file which is written in markdown format
   3. create `.en.mdx` for english content
3. caution: your post's slug on the content's header should be same as your directory name
4. every post should contain `title`, `date`, `slug` and `group`
5. images for a post should be included at the same directory

example

```bash
#/blog/sample-post/index.mdx file

---
title: title
date: 2020-01-01
slug: sample-post
group: id-voting
---
```

### add new group

1. update i18n json files. (i18n/react-intl/\*\*.json)
2. add group name each json files.
3. group name rule is "groupName\_\${xxxxx}"
4. xxxxx is new group name
