const users =[];

const addUser = ({id,name}) => {
    name = name.trim().toLowerCase();

    const isThereUser = users.find( (user) => user.name === name );

    if(!name) return {error : 'put name'};
    if(isThereUser) return {error:'user name taken'};

    else{
        const user = {id, name};
        users.push(user);
        return {user};
    }

}

const removeUser = (id) => {
    const index = users.findIndex( (user) => user.id === id );
    if(index !== -1) return users.splice(index,1)[0];
}

const getUser = (id) => users.find( (user) => user.id === id );

module.exports = {addUser,removeUser,getUser};