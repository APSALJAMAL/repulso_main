# create a new repository
echo "# repulso_main" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/APSALJAMAL/repulso_main.git
git push -u origin main

# push an existing repository
git remote add origin https://github.com/APSALJAMAL/repulso_main.git
git branch -M main
git push -u origin main

