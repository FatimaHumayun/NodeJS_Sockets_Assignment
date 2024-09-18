import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
}) //namespace will % the communication space, only sent in this namespace
export class ChatGateway {
  @WebSocketServer()
  server: { emit: (arg0: string, arg1: string) => void };
  @SubscribeMessage('message') //listen for specific websocket events, server rec an event matching the name, handle message will work
  handleMessage(@MessageBody() message: string): void {
    //@messagebody will extract the msg out from the payload coming in
    this.server.emit('message', message); //broadcast the msg to everyone on the
  }
}
