type Notification = {
  type: string;
  message: string;
}

const consoleNotification: Notification = {
  type: 'Console',
  message: 'Teste1',
};

const emailNotification: Notification = {
  type: 'Email',
  message: 'Teste2',
};

const phoneNotification: Notification = {
  type: 'Phone',
  message: 'Teste3',
};

progressNotification(consoleNotification);
progressNotification(emailNotification);
progressNotification(phoneNotification);

export default function progressNotification({ type, message }: Notification): void {
  console.log(`${type}: `, message); 
}