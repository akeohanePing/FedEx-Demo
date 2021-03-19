#!/usr/bin/env sh

## THIS IS TO CLEAN THE RELEASE RELATED TO YOUR CURRENT BRANCH IN GIT.
## *****IT CAN BE VERY DESTRUCTIVE*****
## Be sure: 
## 1. you're on the right git branch. 

set -x
env

echo empty
echo empty
echo empty
echo empty
# shellcheck source=./ci_tools.lib.sh
. ./ci_tools/ci_tools.lib.sh

k8sFolder="k8s${ENV:+-feature}"
kustomize build "${k8sFolder}" | envsubst
kustomize build "${k8sFolder}" | envsubst | kubectl delete -n "${K8S_NAMESPACE}" -f -

kubectl delete pvc --selector=refs="${REF}"