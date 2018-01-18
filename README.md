# node(express)_api_boilerplate
Simple API boilerplate that can be used as foundation for any app (this is based on freecodecamp nodejs tutorial).

### database
In this project we use mLab (cloud-hosted mongodb) for database.

You should make an account to use mLab (there is free feature)

### Create database in mLab with the following step:
1. Log in, of course
2. click 'create new' button in mongodb deployment
3. choose the free one plan type
4. then click continue button in right bottom of the page
5. choose region
6. then click continue again
7. fill the database name input (in this project the database named notable, you can choose anything you want but it need some configuration in the project file)
8. click continue and then click set order
9. click the mongodb deployments that you have create
10. click users 
11. click add database users and then fill the database username and password form
12. and then copy the url in the top page.

### Connect the mLab database to the nodejs express server:
1. Open config folder in the project folder
2. create db.js file in there
3. open the db.js and copy this code: 

```javascript
module.exports = {
  //this url is copied from the mLab
  // replace '<dbuser>' and '<password>' with your database username and password
  url: "mongodb://<dbuser>:<password>@ds047146.mlab.com:47146/notable" 
}
```
4. Save
