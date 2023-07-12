import { Server } from "socket.io";

const io=new Server(9000,{
	cors:{
		origin:'https://64ae42042175e97ef5629e99--whimsical-haupia-d0d9c5.netlify.app/'
		}
	})

let users = [];
const addUser = (userData, socketId) => {
   console.log("users");
  if (users.email!== userData.email){
    users.push({...userData, socketId });
     console.log(users);
    console.log(true); // Return true if the user was added
  }else{
  return false; // Return false if the user already exists
	}
	};

const getUser = (userId) =>{
	return users.find(user=>user.sub===userId)
	} 

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('adduser', userData => {
	console.log(userData, socket.id)
    addUser(userData, socket.id);
    io.emit('getuser', users);
  });
   socket.on('sendMessage', data => {
	console.log(data)
	const user=getUser(data.receiverId);
	io.to(users.socketId).emit('getMessage',data)
	})
});

                            
