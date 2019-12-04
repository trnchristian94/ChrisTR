del /q ".\app\dist\*"
FOR /D %%p IN (".\app\dist\*.*") DO rmdir "%%p" /s /q
echo this file is necessary for deploytogithub, dont ask why > ".\app\dist\emptyfile.txt"
call npm run develop
cmd /k