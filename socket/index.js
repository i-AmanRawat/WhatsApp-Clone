import { Server } from "socket.io";

const io=new Server(9000,{
	cors:{
		origin:'https://chatu-chatu.netlify.app/'
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

                            
