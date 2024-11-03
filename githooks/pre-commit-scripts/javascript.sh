#!/bin/bash
set -e

# Check if there are any changes in the watched folder
if git diff --cached --name-only | grep -q "^src/"; then
  just install
  just prettier-format
  just eslint-fix
  printf "Javascript files are formatted and linted\n"
fi
