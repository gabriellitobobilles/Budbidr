#!/bin/bash
alias mycd='/home/gbobilles/Desktop/nightwatch'
pwd



counter=1
while [ $counter -le 30 ]
do
./node_modules/.bin/wdio run wdio.conf.js --spec registration

((counter++))
done
echo All done




