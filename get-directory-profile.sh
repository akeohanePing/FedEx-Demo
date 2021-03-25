#!/bin/bash
set -x

DIR=`dirname $0`

docker-compose exec -T pingdirectory /bin/sh -c 'PROFILE=`mktemp -p /tmp -d server-profile-XXXXXX` && /opt/out/instance/bin/manage-profile generate-profile --profileRoot $PROFILE 2>/dev/null >/dev/null && tar jcf - -C $PROFILE .' | (cd $DIR/pingdirectory/pd.profile; tar jxvf -)

find $DIR/pingdirectory/pd.profile -perm 600 -print0 | xargs -0 chmod 644
find $DIR/pingdirectory/pd.profile -perm 700 -print0 | xargs -0 chmod 755
