import {useState} from "react" ;

const useChat = () => {
    const [messages , setMessages] = useState([]) ;
    const [status , setStatus] = useState({}) ;
    client.onmessage = (byteString) => {
        const { data } = byteString;
        const [task, payload] = JSON.parse(data);    
        switch (task) {
          case "output": {
            setMessages(() =>  
            [...messages, ...payload]); break; }
          default: break;
        }
      }
    const sendMessage = (msg) => {console.log(msg) ; }

    return {
        status,
        messages,
        sendMessage
    };
};

export default useChat ;