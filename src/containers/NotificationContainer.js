import { NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css'
 
export default function createNotifications(type, props) {
  switch (type) {
    case 'failedLogin':
      return NotificationManager.error(`Wrong email or password`, `Error`, 1600)
    case 'login':
      return NotificationManager.info(`Logged in as ${props}`,null, 1000)
    case 'matched':
      return NotificationManager.success(`You matched with ${props}`, `It's A Match!`)
    case 'warning':
      return NotificationManager.warning(`Warning message`, null, 3000)
    default: break;
  }
}
