# The Wall

The Wall is a Full Stack React and Django REST app for posting to a public wall.

You can create an account, recieve a welcome email, log in, and then post to the wall.

You can also Update or Delete your own posts.

##Code for Heroku is located on heroku-build branch

## Launching instructions

## Front End
### From root:
cd frontend/the-wall-frontend 
yarn install
yarn start
front end will launch on localhost:3000

## Back End
### From root:
cd backend
source env/bin/activate
pip install -r requirements.txt
cd TheWallBackend
python manage.py runserver will launch on localhost:8000
back end will launch on localhost:8000