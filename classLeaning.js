const meeting ={
    attendees:[],
    add(name){
        console.log(`${name} joined the meeting`);
        this.attendees.push(name);
        return this;
    },
    get latest(){
        let counter = this.attendees.length;
        // console.log(counter)
       return counter==0? undefined:this.attendees[counter -1];
       
    }
};
meeting.add('Orange').add('Apple').add('Pear')