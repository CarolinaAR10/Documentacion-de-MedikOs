import { useState, useRef, useEffect } from "react";
import { 
  Send, 
  Search, 
  MoreVertical, 
  Phone, 
  Video, 
  Paperclip,
  Smile,
  MessageCircle,
  Users,
  Menu,
  X
} from "lucide-react";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";

interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: "user" | "other";
  senderName?: string;
}

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  avatar: string;
  online: boolean;
  role?: string;
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    name: "Dr. Carlos Mendoza",
    lastMessage: "Los resultados del paciente están listos",
    timestamp: "10:30",
    unread: 2,
    avatar: "CM",
    online: true,
    role: "Cardiólogo",
  },
  {
    id: "2",
    name: "Dra. Ana Torres",
    lastMessage: "¿Puedes revisar el caso de urgencias?",
    timestamp: "09:45",
    unread: 0,
    avatar: "AT",
    online: true,
    role: "Pediatra",
  },
  {
    id: "3",
    name: "Enfermería - Piso 3",
    lastMessage: "Paciente en habitación 302 requiere atención",
    timestamp: "Ayer",
    unread: 5,
    avatar: "EP",
    online: false,
    role: "Equipo de enfermería",
  },
  {
    id: "4",
    name: "Dr. Roberto Silva",
    lastMessage: "Gracias por la consulta",
    timestamp: "Ayer",
    unread: 0,
    avatar: "RS",
    online: false,
    role: "Cirujano",
  },
  {
    id: "5",
    name: "Farmacia Central",
    lastMessage: "Medicamento disponible para retiro",
    timestamp: "Mar",
    unread: 1,
    avatar: "FC",
    online: true,
    role: "Farmacia",
  },
];

const mockMessages: Message[] = [
  {
    id: "1",
    content: "Buenos días, ¿cómo está el paciente de la habitación 205?",
    timestamp: "09:00",
    sender: "other",
    senderName: "Dr. Carlos Mendoza",
  },
  {
    id: "2",
    content: "Buenos días doctor. El paciente presenta mejoría significativa, presión arterial estable y sin fiebre.",
    timestamp: "09:05",
    sender: "user",
  },
  {
    id: "3",
    content: "Excelente. ¿Ya están los resultados del laboratorio?",
    timestamp: "09:10",
    sender: "other",
    senderName: "Dr. Carlos Mendoza",
  },
  {
    id: "4",
    content: "Sí, acaban de llegar. Los niveles están dentro del rango normal. ¿Quiere que se los envíe al sistema?",
    timestamp: "09:12",
    sender: "user",
  },
  {
    id: "5",
    content: "Perfecto, por favor envíelos. También necesito que programe una consulta de seguimiento para la próxima semana.",
    timestamp: "09:15",
    sender: "other",
    senderName: "Dr. Carlos Mendoza",
  },
  {
    id: "6",
    content: "Entendido. Ya quedó agendada para el martes a las 10:00 AM. Le envío la confirmación.",
    timestamp: "09:18",
    sender: "user",
  },
  {
    id: "7",
    content: "Los resultados del paciente están listos",
    timestamp: "10:30",
    sender: "other",
    senderName: "Dr. Carlos Mendoza",
  },
];

export function ChatView() {
  const [activeConversation, setActiveConversation] = useState<string>("1");
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState("");
  const [showConversations, setShowConversations] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      content: newMessage,
      timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
      sender: "user",
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  const currentConversation = mockConversations.find(c => c.id === activeConversation);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-2">Mensajería</h1>
          <p className="text-gray-600">
            Comunicación con el equipo médico
          </p>
        </div>
        <button 
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          onClick={() => setShowConversations(!showConversations)}
        >
          {showConversations ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Chat Container */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden h-[calc(100vh-220px)]">
        <div className="flex h-full">
          {/* Conversations List */}
          <div className={`
            ${showConversations ? 'absolute inset-0 z-10' : 'hidden'}
            lg:relative lg:block
            w-full lg:w-80 border-r border-gray-200 bg-white flex flex-col
          `}>
            {/* Search */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Buscar conversaciones..."
                  className="pl-9"
                />
              </div>
            </div>

            {/* Conversations */}
            <ScrollArea className="flex-1">
              <div className="divide-y divide-gray-100">
                {mockConversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    onClick={() => {
                      setActiveConversation(conversation.id);
                      setShowConversations(false);
                    }}
                    className={`
                      w-full p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors text-left
                      ${activeConversation === conversation.id ? 'bg-blue-50' : ''}
                    `}
                  >
                    <div className="relative">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-blue-100 text-blue-600">
                          {conversation.avatar}
                        </AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-gray-900 truncate">
                          {conversation.name}
                        </h4>
                        <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                          {conversation.timestamp}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 truncate mb-1">
                        {conversation.role}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 truncate flex-1">
                          {conversation.lastMessage}
                        </p>
                        {conversation.unread > 0 && (
                          <Badge className="ml-2 bg-blue-500 hover:bg-blue-600 text-white border-0 h-5 min-w-5 px-1.5">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col h-full">
            {currentConversation ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-blue-100 text-blue-600">
                          {currentConversation.avatar}
                        </AvatarFallback>
                      </Avatar>
                      {currentConversation.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-gray-900">
                        {currentConversation.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {currentConversation.online ? 'En línea' : 'Desconectado'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Phone className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Video className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex gap-2 max-w-[80%] md:max-w-[60%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                          {message.sender === 'other' && (
                            <Avatar className="w-8 h-8 flex-shrink-0">
                              <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                                {currentConversation.avatar}
                              </AvatarFallback>
                            </Avatar>
                          )}
                          <div>
                            <div
                              className={`
                                rounded-2xl px-4 py-2
                                ${message.sender === 'user' 
                                  ? 'bg-blue-500 text-white rounded-tr-sm' 
                                  : 'bg-gray-100 text-gray-900 rounded-tl-sm'
                                }
                              `}
                            >
                              <p className="break-words">{message.content}</p>
                            </div>
                            <p className={`text-xs text-gray-500 mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                              {message.timestamp}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200">
                  <form onSubmit={handleSendMessage} className="flex items-end gap-2">
                    <button
                      type="button"
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                    >
                      <Paperclip className="w-5 h-5 text-gray-600" />
                    </button>
                    
                    <div className="flex-1 relative">
                      <Input
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Escribe un mensaje..."
                        className="pr-10 resize-none"
                      />
                      <button
                        type="button"
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded transition-colors"
                      >
                        <Smile className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>

                    <button
                      type="submit"
                      disabled={!newMessage.trim()}
                      className="p-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors flex-shrink-0"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-gray-900 mb-2">Selecciona una conversación</h3>
                  <p className="text-gray-600">
                    Elige un contacto para comenzar a chatear
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
