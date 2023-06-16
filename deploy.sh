#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm run docs:build

# 进入生成的文件夹
cd src/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

git remote add origin https://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@github.com/stayn1ght/MycobiomeDB_Document
# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f origin master:gh-pages

cd -