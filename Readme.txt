Signup.html -->
        firstName 
        email
        password 

login
signup 

how to start server ? 

node index.js or nodemon index.js 

how to check url?
open your browser and type

localhost:3000/login  [ login is my url name you can use your url name :) ]
localhost:3000/signup



task:11-2-2022 

    Login.htlm -> login 
---------------------------------------------

postman


REST client 

http

api -> test 


response?

a
i
w


REST  api
backend ==> Frontend ==> json

login
saveuser
forgetpassword 

product ->  add,remove,read-all,read-single
	     modify,

res : product
res : cart 


\saveproducts
\products 		POST		insert 
\products 		GET		read-all
\products\:productId	GET		read-single 
\products		PUT		modify
\products\:productId	DELETE		remove









{
    "msg": "done danadone....",
    "status": 200,
    "data": {
        "firstName": "ram",
        "email": "ram@gmail.com",
        "password": "ram123"
    }
}



-----------------------------------------------
mongoose --> insert , list ,delete 

save()
find()
deleteOne()

edit profile
change password ==> update 

http method -> update --> PUT  /roles 

-------------------------------------------

role --> CRUD 

user [role fk ] --> CRUD 




user ->
        userId 
        firstName
        email
        password 
        roleId [fk:role] 

1) model 
2) controller 
3) routing 
4) testing 


nodemon index.js --> to start server 


windows + r ==> it will open run 

now type services.msc 

above command will open services --> 
now search mongo service and check its running or not 
if not running , right click and select running.