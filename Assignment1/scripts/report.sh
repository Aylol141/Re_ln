#!/bin/bash
mkdir -p ./notes
echo "User: $(whoami)" > ./notes/report.txt
echo "Path: $(pwd)" >> ./notes/report.txt
echo "Files in data: $(ls ../data 2>/dev/null | wc -l || echo 0)" >> ./notes/report.txt
echo "تم التنفيذ بنجاح"
