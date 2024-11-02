# ------------------------------------------------------------------------------
# General Commands
# ------------------------------------------------------------------------------

# Install all dependencies
install:
    npm install

# ------------------------------------------------------------------------------
# Eslint
# ------------------------------------------------------------------------------

# Check files are linted
eslint-check:
    npx eslint .

# Fix files with eslint
eslint-fix:
    npx eslint . --fix

eslint-with-sarif:
    npx eslint . --config eslint.config.js --format @microsoft/eslint-formatter-sarif --output-file eslint-results.sarif

# ------------------------------------------------------------------------------
# Prettier
# ------------------------------------------------------------------------------

# Check files are prettier formatted
prettier-check:
    prettier . --check

# Format files with prettier
prettier-format:
    prettier . --check --write

# ------------------------------------------------------------------------------
# Justfile
# ------------------------------------------------------------------------------

# Format the justfile
just-format:
    just --fmt --unstable

# Check if the justfile is formatted correctly
just-format-check:
    just --fmt --check --unstable

# ------------------------------------------------------------------------------
# Git Leaks
# ------------------------------------------------------------------------------

# Detect secrets in the repos
gitleaks-detect:
    gitleaks detect --source .

# ------------------------------------------------------------------------------
# Git Hooks
# ------------------------------------------------------------------------------

# Install pre commit hook to run on all commits
install-git-hooks:
    cp -f githooks/pre-commit .git/hooks/pre-commit
    cp -f githooks/post-commit .git/hooks/post-commit
    chmod ug+x .git/hooks/*
