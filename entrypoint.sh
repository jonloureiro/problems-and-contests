#!/bin/bash
set -e
files=$(ls $@/*.txt)

for file in $files
do
  echo "##### $file"
  node $@ < $file
  echo
done
