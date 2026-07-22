# Navigate to the project directory
Set-Location "C:\Users\MATLOOB ALI\Downloads\nextflix\nextflix-main"

# Remove old .git if exists
if (Test-Path ".git") {
    Remove-Item -Recurse -Force ".git" -ErrorAction SilentlyContinue
    Write-Host "Deleted old .git folder"
}

# Create .gitignore
@"
node_modules/
.next/
.env
.env.local
dist/
build/
coverage/
*.log
"@ | Out-File -FilePath ".gitignore" -Encoding utf8
Write-Host "Created .gitignore"

# Init git
git init
git branch -M main
git remote add origin https://github.com/matlum2005/Natflix.git

# Add and commit
git add .
git commit -m "Initial commit"

# Push to GitHub
git push -u origin main --force

Write-Host "Done!"

