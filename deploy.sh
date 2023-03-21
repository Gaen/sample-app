STACK=my-stack

target=$1
tag=$2
shift 2

case $target in
  vds)
    context=my-vds
    compose=docker-compose.vds.yml
    ;;
  *)
    echo "Usage: $0 <vds> <tag>"
    exit 1
    ;;
esac

echo "Deploying tag \"$tag\" to target \"$target\" using context \"$context\" and file \"$compose\""

TAG=$tag docker -c $context stack deploy --with-registry-auth --compose-file $compose $STACK