@echo off
setlocal enabledelayedexpansion
set /a count=1
for /f "tokens=*" %%a in ('dir /b /od *.jpg') do (
 ren "%%a" wallpaper!count!.jpg
 echo renamed "%%a" wallpaper!count!.jpg
 set /a count+=1
)

:End
PAUSE
