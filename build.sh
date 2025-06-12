#!/bin/sh

# 실행 방법: ./build.sh

cd ..
mkdir -p output

# WeTrip_FE의 전체 파일을 output으로 복사
cp -R ./WeTrip_FE/* ./output

# 복사한 output 내용을 다시 WeTrip_FE로 덮어쓰기
cp -R ./output/* ./WeTrip_FE
