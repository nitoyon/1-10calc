#!/bin/sh

set -eu
cd `dirname $0`

DST=../1-10calc-gh-pages
SRC=./dist

SHA=`git rev-parse HEAD`

OUT=`git status --porcelain`
if [ ! -z "${OUT}" ]; then
	echo Directory is not clean
	git status
	exit 1
fi

if [ ! -d $DST ]; then
	echo Creating $DST...
	git worktree add $DST gh-pages
fi

# publish
npm run build
if [ $? -ne 0 ]; then
	echo Failed to build
	exit 1
fi

# Delete all files in $DST (except for .git)
echo Deleting $DST...
rm -rf $DST/*

# Copy SRC to DST
echo Copying $SRC to $DST...
cp -r $SRC/* $DST/

# commit
echo Commiting...
cd $DST
git add -A .
git commit -m "Deploy $SHA"
