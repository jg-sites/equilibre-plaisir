#!/bin/bash

# 🔍 Script de vérification de la qualité du code
# Appelé par le hook pre-commit

set -e

RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo "🔍 Vérification de la qualité du code..."

# Récupérer les fichiers stagés
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(ts|tsx|js|jsx)$' || true)

if [ -z "$STAGED_FILES" ]; then
  echo -e "${GREEN}✅ Aucun fichier JS/TS à vérifier${NC}"
  exit 0
fi

HAS_ERROR=0
HAS_WARNING=0

# ❌ BLOQUANT : Vérification des marqueurs de conflit Git
echo "Vérification des marqueurs de conflit..."
for file in $STAGED_FILES; do
  if [ -f "$file" ]; then
    if grep -qE '^(<{7}|={7}|>{7})' "$file"; then
      echo -e "${RED}❌ ERREUR: Marqueurs de conflit Git trouvés dans $file${NC}"
      HAS_ERROR=1
    fi
  fi
done

# ❌ BLOQUANT : Vérification des console.log
echo "Vérification des console.log..."
for file in $STAGED_FILES; do
  if [ -f "$file" ]; then
    # Ignorer les fichiers de config et les tests
    if [[ "$file" != *".config."* ]] && [[ "$file" != *".test."* ]] && [[ "$file" != *".spec."* ]]; then
      if grep -qE 'console\.(log|debug|info|warn|error|trace|dir|table)\(' "$file"; then
        echo -e "${RED}❌ ERREUR: console.* trouvé dans $file${NC}"
        grep -nE 'console\.(log|debug|info|warn|error|trace|dir|table)\(' "$file" | head -5
        HAS_ERROR=1
      fi
    fi
  fi
done

# ⚠️ WARNING : Vérification des TODOs
echo "Vérification des TODOs..."
for file in $STAGED_FILES; do
  if [ -f "$file" ]; then
    if grep -qE '(TODO|FIXME|XXX|HACK):?' "$file"; then
      echo -e "${YELLOW}⚠️  WARNING: Commentaires TODO/FIXME trouvés dans $file${NC}"
      grep -nE '(TODO|FIXME|XXX|HACK):?' "$file" | head -3
      HAS_WARNING=1
    fi
  fi
done

if [ $HAS_ERROR -eq 1 ]; then
  echo -e "\n${RED}❌ Des erreurs bloquantes ont été trouvées. Corrigez-les avant de committer.${NC}"
  exit 1
fi

if [ $HAS_WARNING -eq 1 ]; then
  echo -e "\n${YELLOW}⚠️  Des warnings ont été trouvés mais ne bloquent pas le commit.${NC}"
fi

echo -e "${GREEN}✅ Vérification de la qualité terminée${NC}"
exit 0
