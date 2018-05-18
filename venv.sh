#!/usr/bin/env bash
DIRECTORY=virtualenvs/.support
deactivate 2> /dev/null
if [ -d "${DIRECTORY}" ]; then
    source ${DIRECTORY}/bin/activate
else
    virtualenv -p `which python3` ${DIRECTORY}
    source ${DIRECTORY}/bin/activate
fi


# load environment
export $(cat .env | grep -v ^# | xargs)

# setenv() {
# }
#
# unsetenv() {
#   unset $(cat .env | grep -v ^# | sed -E 's/(.*)=.*/\1/' | xargs)
# }
