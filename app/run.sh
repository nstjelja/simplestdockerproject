scriptDirectory="$(cd $(dirname "$0"); pwd)";
docker run -i -t -v "$scriptDirectory:/opt/app" local-app:1 $@