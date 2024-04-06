@echo off
setlocal enabledelayedexpansion

rem Set the full path to cwebp.exe
set "cwebp=C:\Users\Kei\Downloads\libwebp-1.3.2-windows-x64\libwebp-1.3.2-windows-x64\bin\cwebp"

rem Iterate through each folder in the current directory
for /D %%d in (*) do (
    rem Enter into the folder
    pushd "%%d"
    
    rem Check if the folder contains .jpg files
    dir /b *.jpg > nul 2>&1
    if not errorlevel 1 (
        rem Convert each .jpg file to .webp
        for %%f in (*.jpg) do (
            echo Converting "%%~nf.jpg" to "%%~nf.webp"...
            "!cwebp!" "%%f" -o "%%~nf.webp"
        )
    ) else (
        echo No JPG files found in folder "%%d"
    )

    rem Return to the parent directory
    popd
)

endlocal