#!/bin/bash
rules=""
functions=""
for file in $(git diff --name-only $TRAVIS_COMMIT_RANGE)
do
  if [[ $file =~ ^database\.rules\.json$ ]]; then
    rules=",database"
  fi
  if [[ $file =~ ^functions.* ]]; then
    functions=",functions"
  fi
done

firebase deploy --only hosting$rules$functions