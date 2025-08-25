#!/bin/bash
cd /Users/abhijeetthombare/ab_lib/web-dev/web_development
date >> heartbeat.log
/usr/bin/git add .
/usr/bin/git commit -m "Auto COMMIT on portfolio-layout Branch" # For Porfolio
#/usr/bin/git commit -m "Auto COMMIT on HTML, CSS & JS - Project" # For Project & Understandings.
#/usr/bin/git push origin main
/usr/bin/git push origin portfolio-layout
