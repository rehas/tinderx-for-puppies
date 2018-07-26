import { NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css'
 
export default function createNotifications(type, props) {
  switch (type) {
    case 'login':
      return NotificationManager.info(`Logged in as ${props}`,null, 1000);
    case 'success':
      return NotificationManager.success('You matched with NAME_HERE', 'It\'s A Match!');
    case 'warning':
      return NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
    case 'error':
      return NotificationManager.error('Error message', 'Click me!', 5000, () => {
        alert('callback');
      });
    default:
    break;
  }
}
